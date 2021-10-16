
const {VerifyMemberInOrganization,
installPlugin,
unInstallPlugin} = require('../utils/plugin.helper');

const pluginInstallation = async (req, res, next) => {
    const { org_id: organizationId, user_id: userId } = req.body;
    const userToken = req.header('Authorization');


    if(!organizationId || !userId || !userToken) {
        res.status(400).json({status: 'failed', message: "Organisation Id, user Id And Token is required"})
    }

    try{
        const isUserVerified = await VerifyMemberInOrganization(userId, userToken, organizationId );

        if(isUserVerified === true){
        console.log("deploying .....")
            const deploy =  await installPlugin(userId, userToken, organizationId)
            return res.status(200).json({data: deploy})
        }

        if(isUserVerified === false){
            res.status(404).json({status: 'failed', message: "User not a member"})
        }
    }

    catch{
            res.status(500).json({message: 'server error, try again'});
    }

}


const pluginUnInstallation = async (req, res, next) => {
    const { org_id: organizationId, user_id: userId } = req.body;
    const userToken = req.header('Authorization');


    if(!organizationId || !userId || !userToken) {
        res.status(400).json({status: 'failed', message: "Organisation Id, user Id And Token is required"})
    }

    try{
        const isUserVerified = await VerifyMemberInOrganization(userId, userToken, organizationId );

        if(isUserVerified === true){
        console.log("deploying .....")
            const deploy =  await unInstallPlugin(userId, userToken, organizationId)
            return res.status(200).json({data: deploy})
        }

        if(isUserVerified === false){
          return  res.status(404).json({status: 'failed', message: "User not a member"})
        }
    }

    catch{
            res.status(500).json({message: 'server error, try again'});
    }

}


module.exports = {
    pluginInstallation,
    pluginUnInstallation
}