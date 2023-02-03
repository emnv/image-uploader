const express = require("express");
const router = express.Router();
const uploadController = require("../controllers/upload.controller");

let routes = app => {

    router.post(
    "/upload",
    uploadController.uploadImages,
    uploadController.processImages,
    uploadController.getResult
  );

  return app.use("/", router);
};

module.exports = routes;