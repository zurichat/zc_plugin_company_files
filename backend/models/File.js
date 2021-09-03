const Joi = require('joi');

const FileSchema = Joi.object({
  id: Joi.string().guid({ version: 'uuidv4' }).required(),
  fileName: Joi.string().required(),
  url: Joi.string().uri().required(),
  type: Joi.string().required(),
  size: Joi.number().required(),
  folderId: Joi.string().guid({ version: 'uuidv4' }).required(),
  metadata: {},
  isStarred: Joi.boolean().default(false).required(),
  isDeleted: Joi.boolean().default(false).required(),
  comments: [{ content: Joi.string(), name: Joi.string() }],
  md5Hash: Joi.string().pattern(/^[a-f0-9]{32}$/i).required()
    .messages({ 'string.pattern.base': 'MD5 hash provided is invalid or malformed' }),
  permissions: Joi.string().default('view'),
  isShared: Joi.boolean().default(false).required(),
  shareToken: [Joi.string()],
  dateAdded: Joi.date().default(new Date().toISOString()),
  dateModified: Joi.date().default(new Date().toISOString()),
  lastAccessed: Joi.date().default(new Date().toISOString())
})

module.exports = FileSchema;
