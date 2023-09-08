const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudent);
router.put("/:id", controller.updateStudent);
router.delete("/:id", controller.deletedStudent);

module.exports = router;