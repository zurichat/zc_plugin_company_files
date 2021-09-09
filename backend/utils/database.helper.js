const axios = require("axios");

const databaseWriteUrl = "https://api.zuri.chat/data/write";
const databaseReadUrl = "https://api.zuri.chat/data/read";

// const databaseWriteUrl = "https://zccore.herokuapp.com/data/write";
// const databaseReadUrl = "https://zccore.herokuapp.com/data/read";

class DatabaseConnection {
  constructor(collection_name) {
    this.data = {
      plugin_id: '6134c6a40366b6816a0b75cd',
      organization_id: '6133c5a68006324323416896',
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
      
      const response = await axios.post(
        databaseWriteUrl,
        this.data
      );

      return response.data;

    } catch (error) {

      return error;

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

      return error;

    }

  };

  fetchOne = async (id) => {
    try {
      
      const response = await axios.get(
        `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}?id=${id}`
      );
  
      return response.data;

    } catch (error) {
      
      return error;

    }
  };

  update = async (id, payload) => {
    try {
      
      this.data.payload = payload;
      this.data.object_id = id;

      const response = await axios.put(
        databaseWriteUrl,
        this.data
      );

      return response.data;

    } catch (error) {
      
      return error;
      
    }
  };

  delete = async ( id ) => {
    try {
      
      this.data.object_id = id;
      
      const response = await axios.delete(
        databaseWriteUrl,
        JSON.stringify(this.data)
      );

      return response.data;

    } catch (error) {
      
      return error;
      
    }
  };
}

module.exports = DatabaseConnection;
