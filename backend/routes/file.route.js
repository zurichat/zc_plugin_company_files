const router = require('express').Router();

const {
  fileCreate,
  fileRename,
  fileUpdate,
  fileDetails,
  fileDelete,
  deleteMultipleFiles,
  getNonDeletedFiles,
  deleteTemporarily,
  restoreFile,
  getAllFiles,
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

// CREATE A NEW FILE
router.post('/write', fileCreate);

// GET ALL THE FILES FROM THE ENDPOINT
router.get('/read', getAllFiles);

// SEARCH FOR ALL DELETED FILES
router.get('/read/searchByisDeleted', searchFileByIsDeleted);

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

router.route('/file/write/:admin')
.put(fileUpdate)
.delete(fileDelete)
// SET EDIT PERMISSION
router.get('/setedit/:admin', setEditPermission)

// SEARCH FILES BY FILE TYPE
router.get('/searchByType', searchByType);

module.exports = router;
