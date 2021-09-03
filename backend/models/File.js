const { Schema, model } = require("mongoose");

<<<<<<< HEAD
const FileSchema = new Schema({
  fileName: {
    type: String,
    trim: true,
    required: true
  }, 
  isStarred: {
    type: Boolean
  }
}, { timestamps: true });
=======
const FileSchema = new Schema(
  {
    fileName: {
      type: String,
      trim: true,
      required: true,
    },
    isArchived: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

FileSchema.methods.joiValidate = (data) => {
  const Joi = require("joi");
  const schema = Joi.object()
    .keys({
      fileName: Joi.string().required(),
    })
    .unknown(true);
>>>>>>> f8a585d74c44006788bc5177cfc184445a0fdd3e

  return new Promise((resolve, reject) => {
    schema
      .validateAsync(data)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

module.exports = model("File", FileSchema);
