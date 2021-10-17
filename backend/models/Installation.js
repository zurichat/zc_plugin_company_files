const Joi = require('joi');

const InstallationSchema = Joi.object({
  user_id: Joi.string().required().messages({ 'any.required': `"user_id" must be provided, please try again.` }),
  organization_id: Joi.string().required().messages({ 'any.required': `"organization_id" must be provided, please try again.` }),
  room_created_at: Joi.date().default(new Date().toISOString()),
  room_modified_at: Joi.date().default(new Date().toISOString())
});

module.exports = InstallationSchema;
