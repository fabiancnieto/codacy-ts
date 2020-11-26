"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.post("/v1/menu-import-log", (req, res, next) => {
    console.log(req.headers, req.body);
    res.status(200).send({ header: req.headers, body: req.body });
});
app.listen(8080, (error) => {
    console.log(error);
});
//# sourceMappingURL=index.js.map