const Joi = require('joi');

const NewRoomSchema = Joi.object({
  room_name: Joi.string().required(),
  room_url: Joi.string().required(),
  room_image: Joi.string().uri().default('https://zuri.chat/zurichatlogo.svg'),
  isDefault: Joi.boolean().default(false),
  isPrivate: Joi.boolean().default(false),
  org_id: Joi.string().required(),
  members: Joi.array().default([])
});

module.exports = NewRoomSchema;
