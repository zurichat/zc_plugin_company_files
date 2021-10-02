const router = require('express').Router();

const {
  fileUpload,
  fileUploadRequest,
  fileUploadStatus,
  cutOrMoveFile,
  starFile,
  unStarFile,
  fileRename,
  fileDetails,
  fileDelete,
  deleteMultipleFiles,
  deleteTemporarily,
  restoreFile,
  getAllFiles,
  getFileByType,
  getArchivedFiles,
  searchByDate,
  searchStarredFiles,
  getAllDeletedFiles,
  isDuplicate,
  setEditPermission,
  searchBySize,
  searchByType,
  getFilesWithSameFolderId,
  cropImage,
  sortFiles,
  recentlyViewed,
  detectPreview,
} = require('../controllers/file.controller');

// FILE UPLOAD REQUEST
router.post('/uploadRequest', fileUploadRequest);

// FILE UPLOAD STATUS
router.get('/uploadStatus', fileUploadStatus);

// UPLOAD A NEW FILE/FILES
router.post('/upload', fileUpload);

// CUT OR MOVE A FILE
router.put('/cutOrMove/:fileId/:folderId', cutOrMoveFile);

// CROP IMAGES
router.put('/crop', cropImage);

// GET ALL THE FILES FROM THE ENDPOINT
router.get('/all', getAllFiles);

// GET ALL FILES SORTED BY THE FILE PROPERTIES
router.get("/sort", sortFiles);

// GET A SPECIFIC FILE TYPE
router.get('/type/:type', getFileByType);

// SEARCH FOR ALL DELETED FILES - DELETED
// router.get("/searchByisDeleted", searchFileByIsDeleted);

// GET A SINGLE FILE DETAILS
router.get('/read/:fileId', fileDetails);

// Renames file
router.put('/rename/:fileId', fileRename);

// GET ARCHIVED FILES
router.get('/archive', getArchivedFiles);

// SEARCH FILES BY DATE ADDED
router.get('/searchByDate', searchByDate);

// SEARCH STARRED FILES
router.get('/searchStarredFiles', searchStarredFiles);

// GET DELETED FILES
router.get('/deletedFiles', getAllDeletedFiles);

// CHECK IF FILE IS A DUPLICATE
router.post('/isDuplicate', isDuplicate);

// DELETE SINGLE FILE
router.delete('/deleteFile/:id', fileDelete);

// DELETE MULTIPLE FILES
router.post('/deleteMultipleFiles', deleteMultipleFiles);

// TEMPORARILY DELETE FILES TO BIN
router.put('/deleteToBin/:id', deleteTemporarily);

// RESTORE FILE FROM BIN
router.put('/restoreFile/:id', restoreFile);

// SET EDIT PERMISSION
router.get('/setEdit/:admin', setEditPermission);

// GET RECENTLY VIEWED FILES
router.get('/recentlyViewed', recentlyViewed);

// STAR A FILE
router.put('/starFile/:id', starFile);

// UNSTAR A FILE
router.put('/unStarFile/:id', unStarFile);

// DETECT WHEN A FILE IS PREVIEWED
router.post('/preview/:id', detectPreview);

module.exports = router;
