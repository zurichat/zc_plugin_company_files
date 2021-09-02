const axios = require('axios');
const uuid = require("uuid").v4;

// const { name } = require('../../package.json');
// const pluginId = name;

const apiWriteUrl = "https://zccore.herokuapp.com/data/write";
const apiReadUrl = "https://zccore.herokuapp.com/data/read";

class ApiConnection {
    constructor (collection_name) {
        this.data = {
            plugin_id: '612e0c38a560ba3687c9ae4b',
            organization_id: '612a3a914acf115e685df8e3',
            collection_name: collection_name,
            bulk_write: false,
            object_id: "",
            filter: {},
            payload: {}
        }
    }

    create = async ( payload ) => {
        try {
    
            this.data.payload = payload;
            this.data.object_id = `file-${uuid()}`;
    
            const response = await axios.post(apiWriteUrl, JSON.stringify(this.data));

            console.log(response)
            return response.data;
    
        } catch (error) {

            return error.response.data;
    
        }
    }

    fetchAll = async () => {
        try {
            
            const response = await axios
                .get(`${apiReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}`);
        
            return response.data;

        } catch (error) {

            return error.response.data;

        }
    }

    fetchOne = async ( id ) => {
        try {

            const response = await axios
                .get(`${apiReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}?id=${id}`);
        
            return response.data;

        } catch (error) {
            
            return error;
            
        }
    }

    update = async ( id, payload ) => {
        try {
    
            this.data.payload = payload;
            this.data.object_id = id;

            const response = await axios.post(apiWriteUrl, JSON.stringify(this.data));

            return response.data;
    
        } catch (error) {

            return error;
    
        }
    }
}

module.exports = ApiConnection;