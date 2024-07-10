const express = require('express');
const { signUp, logIn } = require("../controller/userController");
const asyncHandler = require("../utils/asyncHandler");

const router=require("express").Router();

router.post("/signup",asyncHandler(signUp));
router.post("/login",asyncHandler(logIn));

module.exports=router;


