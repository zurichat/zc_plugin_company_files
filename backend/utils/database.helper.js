const axios = require('axios');
const databaseWriteUrl = 'https://zccore.herokuapp.com/data/write';
const databaseReadUrl = 'https://zccore.herokuapp.com/data/read';

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
    this.data.payload = payload;
    this.data.payload.createdAt = new Date().toISOString();

    const response = await axios.post(databaseWriteUrl, JSON.stringify(this.data));

    console.log(response.data);
    return response.data;
  }

  fetchAll = async () => {
    const response = await axios.get(`${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}`);

    return response.data;
  }

  fetchOne = async (id) => {
    const response = await axios.get(`${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}?object_id=${id}`);

    return response.data;
  }

  update = async (id, payload) => {
    this.data.payload = payload;
    this.data.object_id = id;

    const response = await axios.post(databaseWriteUrl, JSON.stringify(this.data));

    return response.data;
  }
}

module.exports = DatabaseConnection;
