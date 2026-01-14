const prisma = require("../db");

// POST /attendance/check-in, participant checks in using access code
exports.checkIn = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Missing code" });
    }

    const event = await prisma.event.findUnique({
      where: { accessCode: code },
    });

    if (!event) {
      return res.status(404).json({ error: "Invalid code" });
    }

    // compute OPEN / CLOSED
    const now = new Date();
    const start = new Date(event.date);
    const end = new Date(event.date);

    const [sh, sm] = event.startTime.split(":").map(Number);
    const [eh, em] = event.endTime.split(":").map(Number);

    start.setHours(sh, sm, 0, 0);
    end.setHours(eh, em, 0, 0);

    if (now < start || now > end) {
      return res.status(403).json({ error: "Session is not open" });
    }

    const attendance = await prisma.attendance.create({
      data: {
        eventId: event.id,
        userId: req.user.id,
      },
    });

    res.status(201).json({
      eventId: event.id,
      checkInTime: attendance.checkInTime,
    });
  } catch (e) {
    if (e.code === "P2002") {
      return res.status(409).json({ error: "Already checked in" });
    }
    res.status(500).json({ error: "Server error" });
  }
};

// GET /attendance/event-group/:eventGroupId, host views attendance for an event group
exports.listForEventGroup = async (req, res) => {
  try {
    if (req.user.role !== "host") {
      return res.status(403).json({ error: "Only hosts allowed" });
    }

    const sessions = await prisma.event.findMany({
      where: { eventGroupId: req.params.eventGroupId },
      orderBy: { date: "desc" },
      include: {
        attendances: {
          include: {
            user: {
              select: { id: true, name: true, email: true },
            },
          },
        },
      },
    });

    const result = sessions.map((s) => ({
      id: s.id,
      date: s.date,
      startTime: s.startTime,
      endTime: s.endTime,
      status: "CLOSED",
      attendance: s.attendances.length,
      attendees: s.attendances.map((a) => ({
        id: a.user.id,
        name: a.user.name,
        email: a.user.email,
        checkIn: a.checkInTime,
      })),
    }));

    res.json(result);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};
