const axios = require('../utils/axios.helper');

const databaseReadUrl = 'https://api.zuri.chat/data/read';
const databaseWriteUrl = 'https://api.zuri.chat/data/write';
const databaseDeleteUrl =  'https://api.zuri.chat/data/delete';

const PLUGIN_ID = process.env.PLUGIN_ID || '6169d79a4bfde011fe582e4a';
const ORG_ID = process.env.ORG_ID || '6169e016f5998a09e3bbbd11';
// 61518d6c9d521e488c59745f 
// const PLUGIN_ID = process.env.PLUGIN_ID || '61696153b2cc8a9af4833d6a';
// const ORG_ID = process.env.ORG_ID || '6133c5a68006324323416896';

class DatabaseOps {
  constructor(collection_name) {
    this.data = {
      plugin_id: PLUGIN_ID,
      organization_id: ORG_ID,
      collection_name: collection_name,
      bulk_write: false,
      object_id: '',
      filter: {},
      options: {},
      payload: {}
    }

    this.delete_data = {
      plugin_id: PLUGIN_ID,
      organization_id: ORG_ID,
      collection_name: collection_name,
      bulk_delete: false,
      object_id: ''
    }
  }

  normalizeFilterQuery(paramsObject) {
    return Object
      .keys(paramsObject)
      .filter(key => paramsObject[key] !== null)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`)
      .join('&')
    ;
  }

  
  create = async (payload) => {
    this.data.filter = undefined;
    this.data.payload = payload;

    const { data } = await axios.post(databaseWriteUrl, this.data);
    return data;
    
  }

  fetchAll = async () => {
    const { data } = await axios.get(
      `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}`
    );

    return data === null ? [] : data;
  }

  fetchOne = async (query) => {
    const { data } = await axios.get(
      `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}?${this.normalizeFilterQuery(query)}`
    );

    return data;
  }

  fetchByFilter = async (filter = {}, options = {}) => {
    this.data.filter = filter;
    this.data.options = options;
    
    const { data } = await axios.post(`${databaseReadUrl}`, this.data);

    return data === null ? [] : data;
  }

  update = async (id, payload) => {
    this.data.filter = undefined;
    this.data.payload = payload;
    this.data.object_id = id;

    const { data } = await axios.put(databaseWriteUrl, this.data);

    return data;
  }

  delete = async (id) => {
    if (id instanceof Array) {
      const deletedItems = await Promise.all(
        id.map(_id => {
          this.delete_data.object_id = _id;
          return axios.post(databaseDeleteUrl, this.delete_data);
        })
      );
      return deletedItems;
    } else {
      this.delete_data.object_id = id;
      const { data } = await axios.post(databaseDeleteUrl, this.delete_data);

      return data;
    }
  }

  deleteAll = async () => {
    this.delete_data.bulk_delete = true;
    this.delete_data.filter = {};
    const { data } = await axios.post(databaseDeleteUrl, this.delete_data);

    return data;
  }
}

module.exports = DatabaseOps;
