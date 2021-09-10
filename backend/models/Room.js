const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const RoomSchema = Joi.object({
  ownerId: Joi.objectId().required(),
  receiverId: Joi.objectId(),
  organisationId: Joi.objectId().required(),
  roomId: Joi.string().guid({ version: 'uuidv4' }).required(),
  roomName: Joi.string().required(),
  roomType: Joi.string().required().valid('inbox', 'group', 'channel', 'plugin').messages({
    'any.only': 'Invalid room type! Try inbox, group, channel or plugin.',
  }),
  iconUrl: Joi.string().uri().default('https://zuri.chat/zurichatlogo.svg'),
  pluginId: Joi.objectId().when('roomType', {
    is: Joi.string().valid('plugin'),
    then: Joi.objectId().required(),
    otherwise: Joi.valid(null)
  }),
  members: [Joi.objectId()],
  createdAt: Joi.date().default(new Date().toISOString()),
  isArchived: Joi.boolean().default(false),
  isPrivate: Joi.boolean().default(true)
})

module.exports = RoomSchema;
