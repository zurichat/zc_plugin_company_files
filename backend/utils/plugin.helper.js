const axios = require('axios');
//const pluginId = process.env.PLUGIN_ID || '6134c6a40366b6816a0b75cd';
const pluginId = process.env.PLUGIN_ID || '61696153b2cc8a9af4833d6a';
//const validator = require('./authcheck.helper');
const DatabaseConnection= require('./database.helper');

const organizations = new DatabaseConnection('organizations')







const VerifyMemberInOrganization = async (userId, userToken, organizationId ) =>{

    const ORG_URL = `https://api.zuri.chat/organizations`;

    try{
      // const verifyMemberID = await axios.get(`${ORG_URL}/${organizationId}/members/${userId}`, {
      //   headers: {
      //     Authorization: userToken
      //   }
      // });

      const config = {
        url: `${ORG_URL}/${organizationId}/members`,
        method: 'get',
        Headers: {
          Authorization: userToken
        }
      }

      const result = await axios(config)
      //console.log(result);
      const members = result.data

      const aMember = members.find((member) =>{
        return member._id == userId
      })

      if(!aMember){
        return false;
      }

      return true;
    }

    catch(error){
      return {error: "server error, Unable to verify"}
    }

}

const installPlugin = async (userId, userToken, organizationId) => {

    try{
 

    let data = {
      plugin_id: '6169d79a4bfde011fe582e4a',
      user_id: userId
    }

    const config = {
      method: 'post',
      url: `https://api.zuri.chat/organizations/${organizationId}/plugins`,
      data: data,
      Headers: {
        Authorization : userToken
      }
    }

     const queryInstallPlugin = await axios.post(config.url, data, {headers: config.Headers})

    //const queryInstallPlugin = await organizations.createWithUrlAndHeaders(config.data, organizationId)

    
    const response = queryInstallPlugin;
    if(!response){
      return false;
    }
      return response;
    }

    catch(error){
        console.log(error)
        return { error: 'Server Error, Unable to Install Plugin' };
    }


}

const unInstallPlugin = async (userId, userToken, organizationId ) => {

    let pluginId = '6169d79a4bfde011fe582e4a';
    const config = {
        data: {
          user_id: userId,
        },
        url: `https://api.zuri.chat/organizations/${organizationId}/plugins/${pluginId}`,
        headers: {
          Authorization: userToken,
        },
      };

      try {
        const { headers, data } = config;
        const queryUnInstallPlugin = await axios.delete(config.url, { headers, data });
        const  response = queryUnInstallPlugin;
        if(!response){
          return false;
        }
        return response;
      } catch (error) {  
         console.log(error);
         return { error: 'Server Error, Unable to Uninstall Plugin' };
      }
    
}



module.exports = {
    VerifyMemberInOrganization,
    installPlugin,
    unInstallPlugin
}
