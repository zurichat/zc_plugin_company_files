const Joi = require('joi');

const NewRoomSchema = Joi.object({
	room_name: Joi.string().required(),
	// room_url: Joi.string().required(),
	room_image: Joi.string().uri().default('https://zuri.chat/zurichatlogo.svg'),
	isDefault: Joi.boolean().default(false),
	private: Joi.boolean().default(false),
	org_id: Joi.string().required(),
	room_member_ids: Joi.array().default([]),
	room_creator_id: Joi.string().required(),
	room_created_at: Joi.date().default(new Date().toISOString()),
	room_modified_at: Joi.date().default(new Date().toISOString()),
	description: Joi.string().max(250).default(''),
	isArchived: Joi.boolean().default(false),
	// room_domain: Joi.string().required().valid('base', 'files', 'folders', 'personal').messages({
	//   'any.only': 'Invalid room domain! Try base, files, folders or personal.',
	// }),
  
});

module.exports = NewRoomSchema;
