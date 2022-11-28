var express = require("express");
var router = express.Router();

var fluteController = require("../controllers/fluteController");

router.get("/flute", function (req, res) {
    fluteController.buscarFlautas(req, res);
});

module.exports = router;