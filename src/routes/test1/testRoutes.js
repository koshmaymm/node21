const express = require("express");
const { testOneCtrl, testTwoCtrl } = require("../../controllers/test1/testOneCtrl");


const testOneRouter = express.Router();

testOneRouter.get("/", testOneCtrl);
testOneRouter.post("/", testTwoCtrl);

module.exports = testOneRouter;
