const Joi = require('joi');

const NewRoomSchema = Joi.object({
  room_name: Joi.string().required(),
  room_url: Joi.string().required(),
  room_image: Joi.string().uri().default('https://zuri.chat/zurichatlogo.svg'),
  isDefault: Joi.boolean().default(false),
  private: Joi.boolean().default(false),
  org_id: Joi.string().required(),
  room_member_ids: Joi.array().default([]),
  room_created_by: Joi.string(),
  room_created_at: Joi.date().default(new Date()),
  room_modified_at: Joi.date().default(new Date()),
});

module.exports = NewRoomSchema;
