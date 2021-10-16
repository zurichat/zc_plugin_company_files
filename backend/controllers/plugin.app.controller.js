
const {VerifyMemberInOrganization,
installPlugin,
unInstallPlugin} = require('../utils/plugin.helper');

const axios = require('axios')

const pluginInstallation = async (req, res, next) => {
    const { organization_id: orgID, user_id: userId } = req.body;
    const userToken = req.header('Authorization');

    try{

        const isUserVerified = await VerifyMemberInOrganization(userId, userToken, orgID );
        console.log(userId, 'userId');
        if(isUserVerified.error){
          return res.status(400).json({status: 'failed', message: isUserVerified.error})
        }

        if(isUserVerified === true){
            const deploy = await installPlugin(userId, userToken, orgID);

           console.log(deploy, 'isuserverified');
        }

        if(isUserVerified === false){
           // const deploy = await installPlugin(userId, userToken, orgID);

           console.log('isuserverified didnt work');
        }
    }

    catch{

    }

}


module.exports = {
    pluginInstallation
}