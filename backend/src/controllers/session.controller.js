const prisma = require("../db");

// GET /sessions/:id/share, returns access code
exports.share = async (req, res) => {
  try {
    const session = await prisma.event.findUnique({
      where: { id: req.params.id },
    });

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    res.json({
      accessCode: session.accessCode,
    });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};
