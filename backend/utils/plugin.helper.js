const axios = require('axios');
const pluginId = process.env.PLUGIN_ID || '6134c6a40366b6816a0b75cd';
//const validator = require('./authcheck.helper');



// Verify User 
// class PluginHelpers = {

//     construc

// }

const isMemberValid =  async (userId, userToken, organizationId )=>{
    const ORG_URL = `https://api.zuri.chat/organizations`;
    try {
        console.log('is memeber valid')
        const verifyMemberID = await axios.get(`${ORG_URL}/${organizationId}/members`);
        console.log(verifyMemberID.data);
        const result = verifyMemberID.data;
        const { _id: compareID } = result;
    
        if (compareID === userId) {
          return true;
        }
    
        return false;
      } 
      catch (error) {
       // const { data } = error.response;
        console.log(error.message);
        return {error: "Server Error, Couldnt Verify User"};
      }
}

const VerifyMemberInOrganization = async (userId, userToken, organizationId ) =>{

    if(!userId && !userToken && !organizationId){
        return {status: 'failed', message: 'userId, userToken and organisationalId cannot be empty'}
    }

    try{
      const isUserVerified = await isMemberValid(userId, userToken, organizationId);

      if(isUserVerified.error){
          return {error: isUserVerified.error}
      }
  
      if(isUserVerified == true){
          console.log(isUserVerified, 'isuser');
          return true;
      }
  
      else{
          return false
      }
    }

    catch(error){
      res.status(500).json({data: "server error"})
    }


}

const installPlugin = async (userId, userToken, organizationId) => {

    const config = {
        data: {
          plugin_id: pluginId,
          user_id: userId,
        },
        url: `https://api.zuri.chat/organizations/${organizationId}/plugins`,
        headers: {
          Authorization: userToken,
        },
    };

    try{
        const queryInstallPlugin = await axios.post(config.url, config.data, { headers: config.headers });

        const { data: response } = queryInstallPlugin;
        console.log(queryInstallPlugin, 'query');
        return response.data.data;
    }

    catch(error){
        // const { data } = error.response;
        //console.log(data);

        // if (error.isAxiosError) {
        //     return error.response.data;
        // }        
        return { error: 'Server Error' };
    }


}

const unInstallPlugin = async (userId, userToken, organizationId ) => {

    const config = {
        data: {
          user_id: userId,
        },
        url: `https://api.zuri.chat/organizations/${orgID}/plugins/${pluginId}`,
        headers: {
          Authorization: userToken,
        },
      };

      try {
        const { headers, data } = config;
        const queryUnInstallPlugin = await axios.delete(config.url, { headers, data });
        const { data: response } = queryUnInstallPlugin;
        return response;
      } catch (error) {
        if (error.isAxiosError) {
          return error.response.data;
        }
        return error;
      }
    
}



module.exports = {
    VerifyMemberInOrganization,
    installPlugin,
    unInstallPlugin
}
