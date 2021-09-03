const Joi = require('joi');

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
    isStarred: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = FileSchema;
