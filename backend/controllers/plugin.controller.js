const axios = require('axios');
const { name, description, version, author, license, bugs: issues, homepage } = require('../../package.json');

exports.info = async (req, res) => {
  const repoInfo = await axios.get('https://api.github.com/repos/zurichat/zc_plugin_company_files');

  res.status(200).json({
    pluginId: name,
    pluginName: description.split('~').pop().trim(),
    description,
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