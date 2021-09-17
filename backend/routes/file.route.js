const router = require('express').Router();

const {
  fileUpload,
  fileUploadRequest,
  fileUploadStatus,
  fileRename,
  fileUpdate,
  fileDetails,
  fileDelete,
  deleteMultipleFiles,
  getNonDeletedFiles,
  deleteTemporarily,
  restoreFile,
  getAllFiles,
  getFileByType,
  getArchivedFiles,
  searchByDate,
  searchStarredFiles,
  searchFileByIsDeleted,
  getAllDeletedFiles,
  isDuplicate,
  getAllDuplicates,
  setEditPermission,
  searchBySize,
  searchByType
} = require('../controllers/file.controller');

// FILE UPLOAD REQUEST
router.post('/uploadRequest', fileUploadRequest);

// FILE UPLOAD STATUS
router.get('/uploadStatus', fileUploadStatus);

// UPLOAD A NEW FILE/FILES
router.post('/upload', fileUpload);

// GET ALL THE FILES FROM THE ENDPOINT
router.get('/all', getAllFiles);

// GET A SPECIFIC FILE TYPE
router.get('/type/:type', getFileByType);

// SEARCH FOR ALL DELETED FILES
router.get('/searchByisDeleted', searchFileByIsDeleted);

// GET A SINGLE FILE DETAILS
router.get('/read/:id', fileDetails);

// Renames file
router.post('/rename/:id', fileRename);

// GET ARCHIVED FILES
router.get('/archive', getArchivedFiles);

// SEARCH FILES BY DATE ADDED
router.get('/searchByDate', searchByDate);

// SEARCH STARRED FILES
router.get('/searchStarredFiles', searchStarredFiles)

// SEARCH FILES BY SIZE
router.get('/searchBySize/:size', searchBySize)

// GET DELETED FILES
router.get('/deletedFiles', getAllDeletedFiles)

// GET NON DELETED FILES
router.get('/NonDeletedFiles', getNonDeletedFiles);

// CHECK IF FILE IS A DUPLICATE
router.post('/isDuplicate', isDuplicate);

// GET DUPLICATE FILES
router.get('/duplicateFiles', getAllDuplicates);

// EDIT FILE
router.put('/file/write/:id', fileUpdate)

// DELETE SINGLE FILE
router.delete('/deleteFile/:id', fileDelete);  

// DELETE MULTIPLE FILES
router.post('/deleteMultipleFiles', deleteMultipleFiles);

//  TEMPORARILY DELETE FILES TO BIN
router.put('/deleteToBin/:id', deleteTemporarily);

// RESTORE FILE FROM BIN
router.put('/restoreFile/:id', restoreFile);

// SET EDIT PERMISSION
router.get('/setEdit/:admin', setEditPermission)

// SEARCH FILES BY FILE TYPE
router.get('/searchByType', searchByType);

module.exports = router;