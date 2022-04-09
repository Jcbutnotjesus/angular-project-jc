var Education = require("../models/education");

const { param, body, validationResult } = require("express-validator");

// Create
exports.create = [
  // Check validation
  body("id")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Id must be specified.")
    .isNumeric()
    .withMessage("Id must be a number."),

  body("educationName"),

  body("keyWords"),

  body("link"),

  body("schoolId"),

  // Process Request
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create education object with escaped and trimmed data
    var education = new Education({
      _id: req.body.id,
      educationName: req.body.educationName,
      keyWords: req.body.keyWords,
      link: req.body.link,
      schoolId: req.body.schoolId,
    });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      education.save(function (err) {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(201).json("Education created successfully !");
      });
    }
  },
];

// Read
exports.getAll = function (req, res, next) {
  Education.find().exec(function (err, result) {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(result);
  });
};

exports.getById = [
  param("id")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Id must be specified.")
    .isNumeric()
    .withMessage("Id must be a number."),

  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      Education.findById(req.params.id).exec(function (err, result) {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).json(result);
      });
    }
  },
];

// Delete
exports.delete = [
  param("id")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Id must be specified.")
    .isNumeric()
    .withMessage("Id must be a number."),

  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      Education.findByIdAndRemove(req.params.id).exec(function (err, result) {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).json("Education deleted successfully !");
      });
    }
  },
];

// Update
exports.update = [
  body("id")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Id must be specified.")
    .isNumeric()
    .withMessage("Id must be a number."),

  body("educationName"),

  body("keyWords"),

  body("link"),

  body("schoolId"),

  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create education object with escaped and trimmed data
    var education = new Education({
      _id: req.body.id,
      educationName: req.body.educationName,
      keyWords: req.body.keyWords,
      link: req.body.link,
      schoolId: req.boyd.schoolId,
    });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      Education.findByIdAndUpdate(
        req.params.id,
        education,
        function (err, result) {
          if (err) {
            return res.status(500).json(err);
          }
          return res.status(201).json("Education updated successfully !");
        }
      );
    }
  },
];
