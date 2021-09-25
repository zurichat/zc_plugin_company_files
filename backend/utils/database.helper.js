const axios = require("axios");
const { response } = require("express");

const databaseWriteUrl = "https://api.zuri.chat/data/write";
const databaseReadUrl = "https://api.zuri.chat/data/read";
const databaseDeleteUrl = "https://api.zuri.chat/data/delete";

// const databaseWriteUrl = "https://zccore.herokuapp.com/data/write";
// const databaseReadUrl = "https://zccore.herokuapp.com/data/read";

class DatabaseConnection {
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
    try {
      this.data.payload = payload;

      const response = await axios.post(databaseWriteUrl, this.data);

      return response.data;
    } catch (error) {
      return error;
    }
  };

  fetchAll = async (filter = {}) => {
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

  fetchOne = async (query) => {
    try {
      const response = await axios.get(
        `${databaseReadUrl}/${this.data.plugin_id}/${
          this.data.collection_name
        }/${this.data.organization_id}?${Object.keys(query)}=${Object.values(
          query
        )}`
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

      const response = await axios.put(databaseWriteUrl, this.data);

      return response.data;
    } catch (error) {
      return error;
    }
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
    try {
      // delete multiple files
      let obj_id = id;
      if (obj_id instanceof Array) {
        let delItems = await Promise.all(
          obj_id.map(async (val) => {
            this.delete_data.object_id = val;
            let info = this.delete_data;
            let response = await axios.post(databaseDeleteUrl, info);
            return response.data;
          })
        );
        return delItems;
      } else {
        this.delete_data.object_id = id;
        const response = await axios.post(databaseDeleteUrl, this.delete_data);
        return response.data;
      }
    } catch (error) {
      return error;
    }
  };
}

module.exports = DatabaseConnection;
