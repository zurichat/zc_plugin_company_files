const { name, version, author } = require('../../package.json');
const pluginId = name;
const pluginName = 'Company Files Management Plug-In';

const RealTime = require('../utils/realtime.helper');

exports.info = (req, res) => {
  const baseUrl = `${req.protocol}://${req.get('host')}`;

  res.status(200).json({
    status: 'success',
    pluginId,
    pluginName,
    pluginUrl: `${baseUrl}`,
    sidebarUrl: `${baseUrl}/sidebar`,
    infoUrl: `${baseUrl}/info`,
    pingUrl: `${baseUrl}/ping`,
    description: 'An effective file management system that improves business workflow, organizes important data and provides a searchable database for quick retrieval.',
    author,
    version
  });
}

exports.sidebar = async (req, res) => {
  const sidebarListObject = {
      status: 'success',
      pluginId,
      pluginName,
      organisationId: '10f82718-672e-48c2-8fb2-ae26db5980e6',
      menuLink:{
        title: 'Company Files',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630473101/sidebarplugin/files_mq3woy.svg',
        action: 'Open Plugin'
        },
      subItems:[{
        title: 'All Files',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630472654/sidebarplugin/all-files_ewrlii.svg',
        action: 'View All Files',
        badge:{
          number: 50,
          type: 'Primary'
        }
      },{
        title: 'Shared',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630472833/sidebarplugin/users_ovn4oc.svg',
        action: 'View Shared Files',
        badge:{
          number: 2,
          type: 'Info'
        }
      },{
        title: 'Starred Files',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630472904/sidebarplugin/starred_japone.svg',
        action: 'View Starred Files',
        badge:{
          number: 4,
          type: 'Info'
        }
      },{
        title: 'Trash',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630472955/sidebarplugin/trash_ms7mit.svg',
        action: 'View Trash',
        badge:{
          count: 6,
          type: 'Warning'
        }
      },{
        title: 'Help',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630472990/sidebarplugin/help-circle_zlzd4p.svg',
        action: 'View Help',
      }]
  };

  await RealTime.publish("sidebar", sidebarListObject)

  res.status(200).json({ ...sidebarListObject });
}

exports.ping = (req, res) => {
  res.status(200).json({ status: 'success', message: 'Server is up & running...' });
}