const axios = require('axios');
const { name, version, author, license, bugs: issues } = require('../../package.json');
const pluginId = name;
const pluginName = 'Company Files Management Plug-In';

exports.info = async (req, res) => {
  const repoInfo = await axios.get('https://api.github.com/repos/zurichat/zc_plugin_company_files');

  res.status(200).json({
    pluginId,
    pluginName,
    description: 'An effective file management system that improves business workflow, organizes important data and provides a searchable database for quick retrieval.',
    version,
    author,
    repo: {
      type: 'git',
      url: repoInfo.data.html_url,
      gitUrl: repoInfo.data.git_url,
      license,
      issues,
      hasIssues: repoInfo.data.has_issues,
      hasOpenIssues: repoInfo.data.open_issues > 0,
      openIssuesCount: repoInfo.data.open_issues,
      starsCount: repoInfo.data.stargazers_count,
      forksCount: repoInfo.data.forks,
      createdAt: repoInfo.data.created_at,
      lastUpdated: repoInfo.data.updated_at
    },
  });
}

exports.sidebar = (req,res) => {
  const sidebarListObject = {
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
          number: 10,
          type: 'Info'
        }
      },{
        title: 'Shared',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630472833/sidebarplugin/users_ovn4oc.svg',
        action: 'View Shared Files',
        badge:{
          number: 1,
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
          count: 2,
          type: 'Info'
        }
      },{
        title: 'Help',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630472990/sidebarplugin/help-circle_zlzd4p.svg',
        action: 'View Help',
        badge:{
          number: 10,
          type: 'Info'
        }
      }]
  };

  res.status(200).json(sidebarListObject);
}