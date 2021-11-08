class UploadFiles {
  constructor(files, options) {
    this.fileRequests = new WeakMap();

    const API_URL =
      window.location.hostname.includes("localhost") ||
      window.location.hostname.includes("127.0.0.1")
        ? "http://127.0.0.1:5500/api/v1"
        : "https://companyfiles.zuri.chat/api/v1";

    this.endpoints = {
      UPLOAD: `${API_URL}/files/upload`,
      UPLOAD_STATUS: `${API_URL}/files/uploadStatus`,
      UPLOAD_REQUEST: `${API_URL}/files/uploadRequest`
    };

    this.defaultOptions = {
      url: this.endpoints.UPLOAD,
      fileId: null,
      folderId: null,
      startingByte: 0,
      onAbort() {},
      onError() {},
      onProgress() {},
      onComplete() {}
    };

    this.files = files;
    this.options = options;

    // console.log({ ...this.defaultOptions, ...options })
    [...this.files].map((file) => {
      return this.uploadFile(file, { ...this.defaultOptions, ...this.options });
    });
  }

  uploadChunks(file, options) {
    const payload = new FormData();
    const request = new XMLHttpRequest();
    const chunk = file.slice(options.startingByte);

    payload.append("chunk", chunk, file.name);
    payload.append("fileId", options.fileId);

    request.open("POST", options.url, true);

    request.setRequestHeader("X-File-Id", options.fileId);
    if (options.folderId)
      request.setRequestHeader("X-Folder-Id", options.folderId);
    request.setRequestHeader(
      "Content-Range",
      `bytes=${options.startingByte}-${options.startingByte + chunk.size}/${
        file.size
      }`
    );

    request.onload = (event) => {
      return request.status === 200 || request.status === 201
        ? options.onComplete(event, file)
        : options.onError(event, file);
    };

    // console.log(file);
    request.onerror = (event) => options.onError(event, file);
    request.ontimeout = (event) => options.onError(event, file);

    request.upload.onprogress = (event) => {
      const loaded = options.startingByte + event.loaded;
      options.onProgress(
        {
          ...event,
          loaded,
          total: file.size,
          percentage: Math.round((loaded * 100) / file.size)
        },
        file
      );
    };

    request.onabort = (event) => options.onAbort(event, file);

    this.fileRequests.get(file).request = request;

    request.send(payload);
  }

  uploadFile(file, options) {
    const fileInfoRequest = new Request(this.endpoints.UPLOAD_REQUEST, {
      method: "POST",
      body: JSON.stringify({ fileName: file.name }),
      headers: new Headers({ "Content-Type": "application/json" })
    });

    fetch(fileInfoRequest)
      .then((res) => res.json())
      .then(({ data: { fileId } }) => {
        // eslint-disable-next-line no-param-reassign
        options = { ...options, fileId };
        this.fileRequests.set(file, { request: null, options });

        this.uploadChunks(file, options);
      })
      .catch((e) => {
        options.onError({ ...e, file });
      });
  }

  abortFileUpload(file) {
    const fileRequest = this.fileRequests.get(file);

    if (fileRequest && fileRequest.request) {
      fileRequest.request.abort();
      return true;
    }
    return false;
  }

  async retryFileUpload(file) {
    const fileRequest = this.fileRequests.get(file);

    if (fileRequest) {
      try {
        const res = await fetch(
          `${this.endpoints.UPLOAD_STATUS}?fileName=${file.name}&fileId=${fileRequest.options.fileId}`
        );
        const response = await res.json();
        this.uploadChunks(file, {
          ...fileRequest.options,
          startingByte: Number(response.totalChunkUploaded)
        });
      } catch (e) {
        this.uploadChunks(file, fileRequest.options);
      }
    }
  }

  async clearFileUpload(file) {
    const fileRequest = this.fileRequests.get(file);

    if (fileRequest) {
      this.abortFileUpload(file);
      fileRequest.delete(file);
      return true;
    }
    return false;
  }

  async resumeFileUpload(file) {
    const fileRequest = this.fileRequests.get(file);

    if (fileRequest) {
      try {
        const res = await fetch(
          `${this.endpoints.UPLOAD_STATUS}?fileName=${file.name}&fileId=${fileRequest.options.fileId}`
        );
        const response = await res.json();
        this.uploadChunks(file, {
          ...fileRequest.options,
          startingByte: Number(response.totalChunkUploaded)
        });
      } catch (error) {
        fileRequest.options.onError({ ...error, file });
      }
    }
  }
}

export default UploadFiles;
