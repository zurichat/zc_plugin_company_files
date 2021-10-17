
const {VerifyMemberInOrganization,
installPlugin,
unInstallPlugin} = require('../utils/plugin.helper');


const pluginInstallation = async (req, res, next) => {
    const { organisation_id: organizationId, user_id: userId } = req.body;
    const userToken = req.header('Authorization');


    if(!organizationId || !userId || !userToken) {
        res.status(400).json({status: 'failed', message: "Organisation Id, user Id And Token is required"})
    }

    try{
        const isUserVerified = await VerifyMemberInOrganization(userId, userToken, organizationId );

        if(isUserVerified == true){
        console.log("deploying .....")
            const deploy =  await installPlugin(userId, userToken, organizationId)
            console.log(deploy.status, 'deploy from installation')
            if(deploy.status == "200"){
                return res.status(200).json({
                    message: `Plugin was added successfully to organization ID: ${organizationId}`,
                    success: 'true',
                    data: {
                    redirect_url: `/companyfiles`,
                }})
            }

            else{
              return res.status(404).json({status:'false', data: null, message: deploy.message})
            }
        }

        if(isUserVerified === false){
            res.status(404).json({status: 'failed', message: "User not a member", unverified: true})
        }
    }

    catch{
            res.status(500).json({message: 'server error, Coudnt deploy, try again'});
    }

}


const pluginUnInstallation = async (req, res, next) => {
    const { organisation_id: organizationId, user_id: userId } = req.body;
    const userToken = req.header('Authorization');


    if(!organizationId || !userId || !userToken) {
        res.status(400).json({status: 'failed', message: "Organisation Id, user Id And Token is required"})
    }

    try{
        const isUserVerified = await VerifyMemberInOrganization(userId, userToken, organizationId );

        if(isUserVerified === true){
        console.log("deploying .....")
            const deploy =  await unInstallPlugin(userId, userToken, organizationId)
            // console.log(deploy.status, 'ddepoy info')
            if(deploy.status == 200){
                return res.status(200).json({
                    message: `Plugin removed from organization ${organizationId} was successful`,
                    success: 'true',
                    data: {
                    redirect_url: `/channels/message-board/${organizationId}`,
                }})
            }
            else{
                return res.status(404).json({message: deploy.message, success: 'false', data: null })
            }
                 
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