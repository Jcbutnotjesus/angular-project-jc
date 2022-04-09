var express = require("express");
var router = express.Router();

var school_controller = require("../controllers/school");

/* GET home page. */
router.get("/", school_controller.getAll);

router.get("/:id", school_controller.getById);

router.post("/", school_controller.create);

router.put("/:id", school_controller.update);

router.delete("/:id", school_controller.delete);

router.get("/:id/education", school_controller.getEducation);

module.exports = router;
