const { Schema, model } = require('mongoose');

const FolderSchema = new Schema({
  folderName: {
    type: String,
    trim: true,
    required: true
  }
}, { timestamps: true });


FolderSchema.methods.joiValidate = data => {
	const Joi = require('joi');
	const schema = Joi.object().keys({
		folderName: Joi.string().required()
  }).unknown(true);
  
  return new Promise((resolve, reject) => {
    schema.validateAsync(data)
      .then(result => resolve(result))
      .catch(error => reject(error))
  })
}

module.exports = model('Folder', FolderSchema);