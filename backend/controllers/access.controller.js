const uuid = require("uuid").v4;
const AccessSchema = require("../models/Access.js");
const appResponse = require("../utils/appResponse");
const DatabaseConnection = require("../utils/database.helper");
const RealTime = require("../utils/realtime.helper");
const { NotFoundError } = require("../utils/appError");
const axios = require("../utils/axios.helper");
const databaseReadUrl = "https://api.zuri.chat/data/read";
const databaseWriteUrl = "https://api.zuri.chat/data/write";
const databaseEmailUrl = "https://api.zuri.chat/external/send-mail?custom_mail=1";




//Global Data
this.data = {
    plugin_id: "6134c6a40366b6816a0b75cd",
    organization_id: "6133c5a68006324323416896",
    collection_name: "Folders",
    bulk_write: false,
    object_id: "",
    filter: {},
    payload: {},
};
  this.data_update = {
    plugin_id: "6134c6a40366b6816a0b75cd",
    organization_id: "6133c5a68006324323416896",
    collection_name: "Folders",
    object_id: "" ,
    bulk_write: false,
    raw_query: {},
};
  this.data_email = {
    email: "",
    subject: "Zuri Chat Folder Permission",
    content_type: "text/html",
    mail_body: "",
};





//Create a folder
exports.createFolderAccess = async (req, res) => {
  const { body } = req;
  body.folderId = uuid();

  //Custom payload
  const payload={
  folderId : body.folderId,
  folderName: body.folderName,
  description: body.description,
  collaborators: [
    {
      memberId: body.memberId,
      memberName: body.memberName,
      memberPic: body.memberPic,
      role: "owner",
    }
]
}

  //Code to create a folder

    //Validate payload according to Schema
    const folder = await AccessSchema.validateAsync(payload);
    //Set folder to payload
    this.data.payload = folder;
    // Send folder info to FE using Centrifugo
    await RealTime.publish('New Folder', folder);
    //Store folder in Database
    const response = await axios.post(databaseWriteUrl, this.data);
    //Store response in variable
    const createdFolder = response.data;
    //Get particular stored folder back
    //Query
    const query ={ _id: createdFolder?.object_id }
    //Fetch data
    const { data } = await axios.get(
    `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${
      this.data.organization_id
    }?${Object.keys(query)}=${Object.values(query)}`
  );  
    //Store result
    const createdFolderObject = data;
    console.log(createdFolderObject)
    //Send result
    res.status(201).json(createdFolderObject);
};

//Get all folders
exports.getAllFoldersAccess = async (req, res) => {
    //Get all FOlders in collection
    const { data } = await axios.get(
        `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}`
    );
    // Send all folders info to FE using Centrifugo
    const response = await RealTime.publish("All Folders", data);
    //Send all folders to frontend
    res.status(200).send(
        appResponse(null, data, true
            , {
                ...response,
                count: data.length,
            }
        )
    );
};

//Update folder Access
exports.updateFolderAccess = async (req, res) => {
    const { body }=req;
    //Set query
    const query = {
      "$set": {
          "collaborators.$.role": {
              role: body.role,    
          }
      }
    }
    //Set Main Data
    this.data_update.object_id = body._id 
    this.data_update.raw_query = query
    //Send update
    const response = await axios.put(databaseWriteUrl, this.data_update);
    //Store response
    const data = response.data   
    // Send updated folder info to FE using Centrifugo 
    const centrifugoResponse = await RealTime.publish("Updated Folder", data);
    // Send updated folder info to FE 
    res.status(200).send(
        appResponse("Folder Access updated!", data, true, 
            {
                 ...centrifugoResponse,
                count: data.length,
            }
        )
      );
};

//Add folder Access
exports.addFolderAccess = async (req, res) => {
  const { body }=req;
  
  //Set query
  const query = {
      "$addToSet": {
          "collaborators": {
              memberId: body.memberId,
              memberName: body.memberName,
              memberPic: body.memberPic,
              role: body.role,    
          }
      }
    }
  
  //Set Main Data
  this.data_update.raw_query = query
  this.data_update.object_id = body._id
  //Send update
  const response = await axios.put(databaseWriteUrl, this.data_update);
  //Store response
  const data = response.data   
  // Send updated folder info to FE using Centrifugo 
  const centrifugoResponse = await RealTime.publish("Add Folder", data);
  // Send updated folder info to FE 
 
  //Set Email data
  // this.data_email.email=body.MemberEmail;
  // this.data_email.mail_body=`<p>Admin has given you ${body.role} access to ${body.folderName} folder</p>`;
  // //Send Email
  // axios.put(databaseEmailUrl, this.data_email).then();
   res.status(200).send(
    appResponse("Added Folder Access!", data, true, 
        {
             ...centrifugoResponse,
            count: data.length,
        }
    )
  );
};

//Delete folder Access
exports.deleteFolderAccess = async (req, res) => {
  const { body }=req;
  //Set query
  const query = {
    "$pull": {
        "collaborators": {
            memberId: body.memberId,    
        }
    }
  }
  //Set Main Data
  this.data_update.object_id = body._id
  this.data_update.raw_query = {query}
  //Send update
  const response = await axios.post(databaseWriteUrl, this.data_update);
  //Store response
  const data = response.data   
  // Send updated folder info to FE using Centrifugo 
  const centrifugoResponse = await RealTime.publish("Deleted Folder", data);
  // Send updated folder info to FE 
  res.status(200).send(
      appResponse("Access deleted!", data, true, 
          {
               ...centrifugoResponse,
              count: data.length,
          }
      )
    );
};