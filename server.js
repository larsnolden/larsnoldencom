#!/usr/bin/env node

const express = require("express");
const Lars = require("./Lars");

const port = 80;
const app = express();

app.get('/', (req, res) => {
	res.redirect('/api/lars')
});

app.get(['/api/lars', '/me', '/aboutme'], (req, res) => {
	res.send(Lars);
});

// serve static files from "./files"
const staticFiles = express.static("files");
app.use('/files', staticFiles);

const server = app.listen(port, () => console.log(`Server listening on ${port}`));