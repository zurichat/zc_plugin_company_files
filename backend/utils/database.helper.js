const axios = require("axios");
const uuid = require('uuid').v4;

// const databaseWriteUrl = "https://api.zuri.chat/data/write";
// const databaseReadUrl = "https://api.zuri.chat/data/read";

const databaseWriteUrl = "https://zccore.herokuapp.com/data/write";
const databaseReadUrl = "https://zccore.herokuapp.com/data/read";

class DatabaseConnection {
  constructor(collection_name) {
    this.data = {
      plugin_id: '613125166e7d00b82b78b815',
      organization_id: '612a3a914acf115e685df8e3',
      collection_name: collection_name,
      bulk_write: false,
      object_id: '',
      filter: {},
      payload: {}
    }
  }

  create = async (payload) => {
    try {

      this.data.payload = payload;
      this.data.object_id = `${this.data.collection_name}-${uuid()}`

      const response = await axios.post(
        databaseWriteUrl,
        JSON.stringify(this.data)
      );

      return response.data;

    } catch (error) {
      
      return error.response;

    }
  };

  fetchAll = async ( filter = {} ) => {
    
    try {
      
      this.data.filter = filter;
      const response = await axios.get(
        `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}`
      );
  
      return response.data;

    } catch (error) {

      return error.response.data;

    }

  };

  fetchOne = async (id) => {
    try {
      
      const response = await axios.get(
        `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}?object_id=${id}`
      );
  
      return response.data;

    } catch (error) {
      
      return error.response.data;

    }
  };

  update = async (id, payload) => {
    try {
      
      this.data.payload = payload;
      this.data.object_id = id;

      const response = await axios.post(
        databaseWriteUrl,
        JSON.stringify(this.data)
      );

      return response.data;

    } catch (error) {
      
      return error.response.data;
      
    }
  };
}

module.exports = DatabaseConnection;
