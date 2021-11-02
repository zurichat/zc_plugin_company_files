const axios = require("../utils/axios.helper");
const axiosOrigin = require("axios");

const databaseReadUrl = "https://api.zuri.chat/data/read";
const databaseWriteUrl = "https://api.zuri.chat/data/write";
const databaseDeleteUrl = "https://api.zuri.chat/data/delete";
const organizationUrl = `https://api.zuri.chat/organizations`;

const PLUGIN_ID = process.env.PLUGIN_ID || "61696153b2cc8a9af4833d6a";
const ORG_ID = process.env.ORG_ID || "616986c5fbc5b28d42170c64";
// 61518d6c9d521e488c59745f
// const PLUGIN_ID = process.env.PLUGIN_ID || '61696153b2cc8a9af4833d6a';
// const ORG_ID = process.env.ORG_ID || '6133c5a68006324323416896';

class DatabaseOps {
  constructor(collectionName) {
    this.data = {
      plugin_id: PLUGIN_ID,
      organization_id: ORG_ID,
      collectionName,
      bulk_write: false,
      object_id: "",
      filter: {},
      options: {},
      payload: {},
    };

    this.delete_data = {
      plugin_id: PLUGIN_ID,
      organization_id: ORG_ID,
      collectionName,
      bulk_delete: false,
      object_id: "",
    };

    this.databaseUrl = "";
  }

  normalizeFilterQuery(paramsObject) {
    return Object.keys(paramsObject)
      .filter((key) => paramsObject[key] !== null)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`)
      .join("&");
  }

  async create(payload) {
    this.data.filter = undefined;
    this.data.payload = payload;

    const { data } = await axios.post(databaseWriteUrl, this.data);
    return data;
  }

  async createWithUrlAndHeaders(payload, orgId) {
    // this.data.payload = payload;
    const url = `${organizationUrl}/${orgId}/plugins`;
    console.log(payload, "payload");
    const { data } = await axiosOrigin.post(url, payload);

    return data;
  }

  async fetchAll() {
    const { data } = await axios.get(`${databaseReadUrl}/${this.data.plugin_id}/${this.data.collectionName}/${this.data.organization_id}`);

    return data === null ? [] : data;
  }

  async fetchOne(query) {
    const { data } = await axios.get(`${databaseReadUrl}/${this.data.plugin_id}/${this.data.collectionName}/${
        this.data.organization_id
      }?${this.normalizeFilterQuery(query)}`);

    return data;
  }

  async fetchByFilter(filter = {}, options = {}) {
    this.data.filter = filter;
    this.data.options = options;

    const { data } = await axios.post(`${databaseReadUrl}`, this.data);

    return data === null ? [] : data;
  }

  async update(id, payload) {
    this.data.filter = undefined;
    this.data.payload = payload;
    this.data.object_id = id;

    const { data } = await axios.put(databaseWriteUrl, this.data);

    return data;
  }

  async delete(id) {
    if (id instanceof Array) {
      const deletedItems = await Promise.all(id.map((_id) => {
          this.delete_data.object_id = _id;
          return axios.post(databaseDeleteUrl, this.delete_data);
        }));
      return deletedItems;
    } else {
      this.delete_data.object_id = id;
      const { data } = await axios.post(databaseDeleteUrl, this.delete_data);

      return data;
    }
  }

  async deleteAll() {
    this.delete_data.bulk_delete = true;
    this.delete_data.filter = {};
    const { data } = await axios.post(databaseDeleteUrl, this.delete_data);

    return data;
  }
}

module.exports = DatabaseOps;
