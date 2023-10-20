"use strict";
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.json({
        id: 202,
        message: 'New server'
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
