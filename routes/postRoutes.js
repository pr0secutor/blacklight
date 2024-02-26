const express = require("express");
const {getCurrentWeek,getLastWeek} = require("../controllers/postControllers");
const { Router } = require("express");

const router=Router();

router.get("/get-curr-week",getCurrentWeek);
router.get("/get-last-week",getLastWeek);

module.exports = router;
