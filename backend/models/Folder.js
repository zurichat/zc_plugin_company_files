const Joi = require('joi');

const FolderSchema = Joi.object({
  id: Joi.string().guid({ version: 'uuidv4' }).required(),
  folderName: Joi.string().required(),
  folderId: [Joi.string().guid({ version: 'uuidv4' }).required(), Joi.allow(null)],
  description: Joi.string().required(),
  permissions: Joi.string().default('view'),
  isPinned: Joi.boolean().default(false).required(),
  dateAdded: Joi.date().default(new Date().toISOString()),
  dateModified: Joi.date().default(new Date().toISOString()),
  lastAccessed: Joi.date().default(new Date().toISOString())
})

module.exports = FolderSchema;
