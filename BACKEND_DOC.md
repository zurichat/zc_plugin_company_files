### **BackEnd Structure**

The BackEnd is structured using the Model - Controller pattern. Since we are working on an API, the View part will be handled by the React FrontEnd. Mark-sensei said we should build it like a standalone app for now until the zccore API is completed. We plan to use the following third-party services for local development and testing:


**DB** - MongoDB (_for local development till the zccore API endpoints for data manipulation have been finished_)

**Cloud storage** - Cloudinary (_for local development till zccore provides an API for file storage_)


### **Folder Structure**
For the BackEnd of this project, all you truly need to worry about is the `backend` folder & the `server.js` file.

```
├── backend/
│   ├── controllers/
│   │   ├── file.controller.js
│   │   ├── folder.controller.js
│   ├── middlewares/
│   │   ├── errorHandler.js
│   │   ├── isAuthenticated.js
│   ├── models/
│   │   ├── File.js
│   │   ├── Folder.js
│   ├── routes/
│   │   ├── file.route.js
│   │   ├── folder.route.js
│   │   ├── index.js
│   ├── utils/
│   │   ├── appError.js
│   │   ├── db.js
├── ...
├── server.js
```

Since were using Model-Controller pattern (instead of the usual MVC), we have the `models` folder & the `controllers` folder along side three other folders: the `middlewares`, the `routes` & the `utils` folders. To get a proper grasp of how everything works together, open up the `server.js` file. You'll see the third-party modules and middlewares that were "required" or imported. You can then checking the files in the `backend` folder and what they're exporting.




### **Models**

Based on all the features we've planned out for our plugin, the BackEnd devs have come up with two primary models which are: the file model & folder model. As we work more on the plugin, we might see the need to abstract out new models.

- *File Model*
  - name (String)
  - _id (ObjectId)
  - url (String)
  - type (String)
  - size (Integer)
  - senderId (ObjectId)
  - folderId (ObjectId)
  - extra metadata (Mixed)
  - isStarred (Boolean)
  - comments (String [])
  - md5Hash (String)
  - permissions (String enum)
  - isShared (Boolean)
  - shareToken (String)
  - timestamps:dateAdded (Date)
  - timestamps:dateModified (Date)
  - timestamps:lastAccessed (Date)


- *Folder Model*
  - name (String)
  - _id (ObjectId)
  - folderId (ObjectId | null)
  - description (String)
  - permissions (String enum)
  - isPinned (Boolean)
  - timestamps:dateAdded (Date)
  - timestamps:dateModified (Date)
  - timestamps:lastAccessed (Date)


### **Routes** *(Grouped by Category)*

- **File search**: `GET` (with params)

- **File sort** (handled completely by frontend since pagination of results will be provided by backend)

- **File manipulation** (copy, paste, cut, delete, rename, star, pin)
  - *Paste*: `PUT` or `PATCH` (with params, indicate whether copy or cut)
  - *Delete*: `DELETE` (with params)
  - *Rename*: `PUT` (with params)
  - *Star*: `PUT` (with params)
  - *Pin*: `PUT` (with params)

- **File storage** (uploading, downloading *&lt;frontend&gt;*, storage limit *&lt;pending review by mentor&gt;*)
  - *Uploading*: `POST` (with body and params)
  - *Upload limit*: `GET` *&lt;pending review&gt;*

- **File access &amp; authorization** (sharing, permissions, link generation *&lt;to be discussed&gt;*, **file encryption** *&lt;future work&gt;*)
  - *Permissions*: `PUT` (with params)

- **App management** (notifications for storage limit *&lt;pending discussion with frontend and mentors&gt;*, for file access *&lt;pending discussion with frontend and mentors&gt;*)
  - `PATCH` (with params)

- **File History** (undo, redo, view file history, search history) *&lt;to be handled by frontend with local storage&gt;*

- **Archive** *&lt;a boolean field on file schema handles this&gt;* & **Recycle bin** *&lt;awaiting further clarification from mentors&gt;*

- **Fetch Archived Files**: `GET` (to retrieve archived files) & `PUT` (to archive files)

- **Views** (images, pdf, docs, txt, videos) &lt;all to be handled by frontend&gt;

- **Text Editing** (create text, text editing features) *&lt;replaced with a description field for folders and a comment field for files&gt;*
  - *Description / Commenting*: `POST` (with body and params)