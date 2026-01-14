const router = require("express").Router();
const requireAuth = require("../middleware/requireAuth");
const controller = require("../controllers/eventGroups.controller");

router.use(requireAuth);

router.get("/", controller.list);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.delete("/:id", controller.remove);

module.exports = router;
