const Joi = require('joi');

const FileSchema = Joi.object({
  fileId: Joi.string().guid({ version: 'uuidv4' }).required(),
  fileName: Joi.string().required(),
  url: Joi.string().uri().required(),
  type: Joi.string().required(),
  size: Joi.number().required(),
  folderId: Joi.string().guid({ version: 'uuidv4' }).allow(null),
  cloudinaryId: Joi.string().required(),
  isStarred: Joi.boolean().default(false),
  isArchived: Joi.boolean().default(false),
  isDeleted: Joi.boolean().default(false),
  comments: [{ content: Joi.string(), name: Joi.string() }],
  md5Hash: Joi.string().pattern(/^[a-f0-9]{32}$/i).required()
    .messages({ 'string.pattern.base': 'MD5 hash provided is invalid or malformed' }),
  permissions: Joi.string().default('view'),
  isShared: Joi.boolean().default(false),
  shareToken: [Joi.string()],
  dateAdded: Joi.date().default(new Date().toISOString()),
  dateModified: Joi.date().default(new Date().toISOString()),
  lastAccessed: Joi.date().default(new Date().toISOString())
})

module.exports = FileSchema;
