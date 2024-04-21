const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

/* GET home page. */
router.get("/", mainController.index);
router.get('/search', mainController.results);
router.get('/search/:id', mainController.resultsLogueado)

module.exports = router;
