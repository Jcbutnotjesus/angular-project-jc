// https://mongoosejs.com/docs/schematypes.html
var mongoose = require("mongoose");

var schoolSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  schoolName: { type: String, required: true },
  link: { type: String, required: true },
});

schoolSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

schoolSchema.virtual("id").get(function () {
  return this._id;
});

// Export model.
module.exports = mongoose.model("school", schoolSchema);
