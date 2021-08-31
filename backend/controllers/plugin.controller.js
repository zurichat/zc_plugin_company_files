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
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630441863/sidebarplugin/Company%20File%20Management%20PlugIn%20%28Sidebar%20Icons%29/Files_sm4hss.svg',
        action: 'Open Plugin'
        },
      subItems:[{
        title: 'All Files',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630443342/sidebarplugin/Company%20File%20Management%20PlugIn%20%28Sidebar%20Icons%29/all-files_onxhs8.svg',
        action: 'View All Files'
      },{
        title: 'Shared',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630442796/sidebarplugin/Company%20File%20Management%20PlugIn%20%28Sidebar%20Icons%29/users_wykbon.svg',
        action: 'View Shared Files'
      },{
        title: 'Starred Files',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630441865/sidebarplugin/Company%20File%20Management%20PlugIn%20%28Sidebar%20Icons%29/Vector_qdcc3i.svg',
        action: 'View Starred Files'
      },{
        title: 'Trash',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630442567/sidebarplugin/Company%20File%20Management%20PlugIn%20%28Sidebar%20Icons%29/active_xqcxkl.svg',
        action: 'View Trash'
      },{
        title: 'Help',
        icon: 'https://res.cloudinary.com/eyiajd/image/upload/v1630442662/sidebarplugin/Company%20File%20Management%20PlugIn%20%28Sidebar%20Icons%29/help-circle_hzmom4.svg',
        action: 'View Help'
      }]
  };

  res.status(200).json(sidebarListObject);
}