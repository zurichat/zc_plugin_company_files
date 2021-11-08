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
	getAllDeletedFiles,
	isDuplicate,
	setEditPermission,
	cropImage,
	sortFiles,
	recentlyViewedImages,
	recentlyViewedAudio,
	recentlyViewedVideos,
	recentlyViewedDocs,
	recentlyViewedCompressed,
	detectPreview,
	lockFile,
	resetFilePassword,

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
router.get('/sort', sortFiles);

// GET A SPECIFIC FILE TYPE
router.get('/type/:type', getFileByType);

// GET A SINGLE FILE DETAILS
router.get('/read/:fileId', fileDetails);

// Renames file
router.put('/rename/:fileId', fileRename);

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
router.get('/recentlyViewedImages', recentlyViewedImages);
router.get('/recentlyViewedAudio', recentlyViewedAudio);
router.get('/recentlyViewedVideos', recentlyViewedVideos);
router.get('/recentlyViewedDocs', recentlyViewedDocs);
router.get('/recentlyViewedCompressed', recentlyViewedCompressed);


// STAR A FILE
router.put('/starFile/:id', starFile);

// UNSTAR A FILE
router.put('/unStarFile/:id', unStarFile);

// DETECT WHEN A FILE IS PREVIEWED
router.get('/preview/:id', detectPreview);

// LOCK FILE ENDPOINT
router.put('/lockFile/:id', lockFile);

// RESET FILE PASSWORD
router.put('/reset/:id', resetFilePassword);

module.exports = router;
