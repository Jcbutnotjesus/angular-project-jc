var express = require("express");
var router = express.Router();

var education_controller = require("../controllers/education");

/* GET home page. */
router.get("/", education_controller.getAll);

router.get("/:id", education_controller.getById);

router.post("/", education_controller.create);

router.put("/:id", education_controller.update);

router.delete("/:id", education_controller.delete);

module.exports = router;
