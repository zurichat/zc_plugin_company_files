const Joi = require('joi');
Joi.object = require('joi-objectid')(Joi);

const RoomSchema = Joi.object({
  ownerId: Joi.object().required(),
  receiverId: Joi.object(),
  organisationId: Joi.object().required(),
  roomId: Joi.string().guid({ version: 'uuidv4' }).required(),
  roomName: Joi.string().required(),
  roomType: Joi.string().required().valid('inbox', 'group', 'channel', 'plugin').messages({
    'any.only': 'Invalid room type! Try inbox, group, channel or plugin.',
  }),
  iconUrl: Joi.string().uri().default('https://zuri.chat/zurichatlogo.svg'),
  pluginId: Joi.object().when('roomType', {
    is: Joi.string().valid('plugin'),
    then: Joi.object().required(),
    otherwise: Joi.valid(null)
  }),
  description: Joi.string().required().max(250),
  members: Joi.array().items(Joi.object({})),
  createdAt: Joi.date().default(new Date().toISOString()),
  isArchived: Joi.boolean().default(false),
  isPrivate: Joi.boolean().default(true)
})

module.exports = RoomSchema;
