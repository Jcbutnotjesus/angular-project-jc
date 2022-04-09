// https://mongoosejs.com/docs/schematypes.html
var mongoose = require("mongoose");

var educationSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  educationName: { type: String, required: true },
  keyWords: { type: String, required: true },
  link: { type: String, required: true },
  schoolId: { type: Number, required: true },
});

educationSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

educationSchema.virtual("id").get(function () {
  return this._id;
});

// Export model.
module.exports = mongoose.model("education", educationSchema);
