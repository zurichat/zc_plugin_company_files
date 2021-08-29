const { Schema, model } = require('mongoose');

const FileSchema = new Schema({
  fileName: {
    type: String,
    trim: true,
    required: true
  }
}, { timestamps: true });


FileSchema.methods.joiValidate = data => {
	const Joi = require('joi');
	const schema = Joi.object().keys({
		fileName: Joi.string().required()
  }).unknown(true);
  
  return new Promise((resolve, reject) => {
    schema.validateAsync(data)
      .then(result => resolve(result))
      .catch(error => reject(error))
  })
}

module.exports = model('File', FileSchema);