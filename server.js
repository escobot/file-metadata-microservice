'use strict';

const express = require('express');
const app = express();
const multer  = require('multer')
const port = process.env.PORT || 8000;
let upload = multer({ dest: 'uploads/' })

app.get('/*', function (req, res) {
  res.send("<form action=\"/upload\" method=\"post\" enctype=\"multipart/form-data\"><input type=\"file\" name=\"avatar\" /><input type=\"submit\" value=\"Submit\"></form>");
})

app.post('/upload', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.send({'size': req.file.size})
  })

app.listen(port);
console.log('App running on http://localhost:' + port);
