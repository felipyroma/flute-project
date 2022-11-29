var express = require("express");
var router = express.Router();

var fluteController = require("../controllers/fluteController");

router.get("/buscarFlautas", function (req, res) {
    fluteController.buscarFlautas(req, res);
});

router.post("/cadastrarFlautas", function (req, res) {
    fluteController.cadastrarFlautas(req, res);
});

module.exports = router;