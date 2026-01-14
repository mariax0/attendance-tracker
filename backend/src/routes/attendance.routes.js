const router = require("express").Router();
const requireAuth = require("../middleware/requireAuth");
const controller = require("../controllers/attendance.controller");

// participant
router.post("/check-in", requireAuth, controller.checkIn);
router.get(
  "/event-group/:eventGroupId",
  requireAuth,
  controller.listForEventGroup
);

module.exports = router;
