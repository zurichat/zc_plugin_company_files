const router = require("express").Router();
const {
  fileCreate,
  fileUpdate,
  fileDetails,
  fileDelete,
  fileSearchByDate,
  getArchivedFiles,
} = require("../controllers/file.controller");

router.post("/", fileCreate);
router.get("/searchByDate", fileSearchByDate);
router.get("/archive", getArchivedFiles);

router.route("/:id").get(fileDetails).put(fileUpdate).delete(fileDelete);

module.exports = router;
