const express = require("express");
// const {createPorjectController, getAllProjectController} = require('./../Controllers/projectController')
const {createProjectController , getAllProjectController} = require("../Controllers/projectController")
const uploadImageToCloudinary = require('../Middleware/cloudinaryMiddleware')
const router= express.Router();

router.post("/add-project",uploadImageToCloudinary,createProjectController)
router.get("/",getAllProjectController);


module.exports= router;

