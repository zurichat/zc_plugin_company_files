const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')
const FolderSchema = new Schema({
  folderName: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    default: '',
  },
  folderId: {type: Schema.Types.ObjectId, default: mongoose.Types.ObjectId},
  permissions: {
    type: String,
    trim: true,
    default: '',
  },
  isPinned: {type: Boolean, default: false},
  lastAccessed: { type: Date, default: Date.now() },
  dateModified: { type: Date, default: Date.now() },
  dateAdded: { type: Date, default: Date.now() },
});

FolderSchema.methods.joiValidate = data => {
	const Joi = require('joi');
	const schema = Joi.object().keys({
		folderName: Joi.string().required(),
    description: Joi.string(),
    permissions: Joi.string(),

    lastAccessed: Joi.date(),
    dateModified: Joi.date(),
    dateAdded: Joi.date()
  }).unknown(true);
  
  return new Promise((resolve, reject) => {
    schema.validateAsync(data)
      .then(result => resolve(result))
      .catch(error => reject(error))
  })
}

module.exports = model('Folder', FolderSchema);