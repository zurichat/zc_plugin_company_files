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
      organisationId: 'jd93-ene82-rt92-df',
      menuLink:{
        title: 'Company Files',
        icon: '<URL to image>',
        action: 'Open Plugin'
        },
      subItems:[{
        title: 'All Files',
        icon: '<URL to image>',
        action: 'View All Files'
      },{
        title: 'Shared',
        icon: '<URL to image>',
        action: 'View All Files'
      },{
        title: 'Starred Files',
        icon: '<URL to image>',
        action: 'View Starred Files'
      },{
        title: 'Trash',
        icon: '<URL to image>',
        action: 'View Trash'
      },{
        title: 'Help',
        icon: '<URL to image>',
        action: 'View Help'
      }]
  };

  res.status(200).json(sidebarListObject);
}