const express = require("express");
const { testOneCtrl } = require("../../controllers/test1/testOneCtrl");


const testOneRouter = express.Router();

testOneRouter.get("/", testOneCtrl);

module.exports = testOneRouter;
