var School = require("../models/school");
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

  body("schoolName")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("School name must be specified.")
    .isAlphanumeric()
    .withMessage("School name has non-alphanumeric characters."),

  body("link"),

  // Process Request
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create school object with escaped and trimmed data
    var school = new School({
      _id: req.body.id,
      schoolName: req.body.schoolName,
      link: req.body.link,
    });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      school.save(function (err) {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(201).json("School created successfully !");
      });
    }
  },
];

// Read
exports.getAll = function (req, res, next) {
  School.find().exec(function (err, result) {
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
      School.findById(req.params.id).exec(function (err, result) {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).json(result);
      });
    }
  },
];

exports.getEducation = [
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
      Education.find({ schoolId: req.params.id }).exec(function (err, result) {
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
      School.findByIdAndRemove(req.params.id).exec(function (err, result) {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).json("School deleted successfully !");
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

  body("schoolName")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("School name must be specified.")
    .isAlphanumeric()
    .withMessage("School name has non-alphanumeric characters."),

  body("link"),

  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create school object with escaped and trimmed data
    var school = new School({
      _id: req.body.id,
      schoolName: req.body.schoolName,
      link: req.body.link,
    });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      School.findByIdAndUpdate(req.params.id, school, function (err, result) {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(201).json("School updated successfully !");
      });
    }
  },
];
