const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const FolderSchema = Joi.object({
  folderId: Joi.string().guid({ version: 'uuidv4' }).required(),
  folderName: Joi.string().required(),
  parentId: Joi.string().guid({ version: 'uuidv4' }).default(null),
  description: Joi.string().default(null),
  collaborators: Joi.array().items(
    Joi.object({
      memberId: Joi.string(),
      memberName: Joi.string().required(),
      memberPic: Joi.string().required(),
      role: Joi.string().default("owner"),
    }).required()
  ),
  permissions: Joi.string().default('view'),
  isPinned: Joi.boolean().default(false),
  isStarred: Joi.boolean().default(false),
  dateAdded: Joi.date().default(new Date().toISOString()),
  dateModified: Joi.date().default(new Date().toISOString()),
  lastAccessed: Joi.date().default(new Date().toISOString()),
});

module.exports = FolderSchema;
