exports.sidebar = (req,res) => {
    const sidebarListObject = {
        pluginId: 'zc-company-files',
        pluginName: 'Company Files Management Plugin',
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