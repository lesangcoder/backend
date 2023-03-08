
const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World! Le Thanh Sang");
});

router.get("/abc", (req, res) => {
    res.send("Trang ABC");
});

router.get("/test", (req, res) => {
    res.render("sample.ejs");
});

module.exports = router;