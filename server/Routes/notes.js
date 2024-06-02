const express = require("express");
const router = express.Router();
const NotesController = require("../Controllers/NotesController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const destinationPath = "./files";
    callback(null, destinationPath);
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now();
    callback(null, uniqueSuffix + file.originalname);
  },
});
var upload = multer({
  storage: storage,
});

//Routes
router.post("/upload", upload.single("file"), NotesController.uploadNote);
router.get("/getFiles", NotesController.getNote);
router.get("/getFiles/:id", NotesController.getNoteByID);

module.exports = router;
