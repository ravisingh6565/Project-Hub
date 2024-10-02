const express = require("express");
// const {createPorjectController, getAllProjectController} = require('./../Controllers/projectController')
const {createProjectController , getAllProjectController} = require("../Controllers/projectController")
const router= express.Router();

router.post("/add-project",createProjectController)
router.get("/",getAllProjectController);


module.exports= router;

