const router = require("express").Router();
const requireAuth = require("../middleware/requireAuth");
const controller = require("../controllers/export.controller");

router.post("/csv", requireAuth, controller.exportCSV);
router.post("/xlsx", requireAuth, controller.exportXLSX);

module.exports = router;
