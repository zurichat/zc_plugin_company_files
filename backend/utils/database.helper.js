const axios = require("../utils/axios.helper");

const databaseReadUrl = "https://api.zuri.chat/data/read";
const databaseWriteUrl = "https://api.zuri.chat/data/write";
const databaseDeleteUrl = "https://api.zuri.chat/data/delete";

class DatabaseOps {
  constructor(collection_name) {
    this.data = {
      plugin_id: "6134c6a40366b6816a0b75cd",
      organization_id: "6133c5a68006324323416896",
      collection_name: collection_name,
      bulk_write: false,
      object_id: "",
      filter: {},
      payload: {},
    };

    this.delete_data = {
      plugin_id: "6134c6a40366b6816a0b75cd",
      organization_id: "6133c5a68006324323416896",
      collection_name: collection_name,
      bulk_delete: false,
      object_id: "",
      filter: {},
    };
  }

  create = async (payload) => {
    this.data.payload = payload;
    const response = await axios.post(databaseWriteUrl, this.data);

    return response.data;
  };

  fetchAll = async (filter = {}) => {
    this.data.filter = filter;
    const { data } = await axios.get(
      `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}`
    );

    return data;
  };

  fetchOne = async (query) => {
    const { data } = await axios.get(
      `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${
        this.data.organization_id
      }?${Object.keys(query)}=${Object.values(query)}`
    );

    return data;
  };

  update = async (id, payload) => {
    this.data.payload = payload;
    this.data.object_id = id;

    const { data } = await axios.put(databaseWriteUrl, this.data);

    return data;
  };
  patch = async (id, payload) => {
    try {
      this.data.payload = payload;
      this.data.object_id = id;

      const response = await axios.patch(databaseWriteUrl, this.data);

      return response.data;
    } catch (error) {
      return error;
    }
  };
  delete = async (id) => {
    if (id instanceof Array) {
      const deletedItems = await Promise.all(
        id.map((_id) => {
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
  };
}

module.exports = DatabaseOps;
