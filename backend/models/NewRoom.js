const Joi = require('joi');

const NewRoomSchema = Joi.object({
  room_name: Joi.string().required(),
  room_url: Joi.string().required(),
  room_image: Joi.string().uri().default('https://zuri.chat/zurichatlogo.svg')
});

module.exports = NewRoomSchema;
