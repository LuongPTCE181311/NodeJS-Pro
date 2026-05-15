"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const PORT = 8080;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/hoidanit", (req, res) => {
    res.send("Hello ERic Update");
});
app.listen(8080, () => {
    console.log(`My app is running on port : ${PORT}`);
});
//# sourceMappingURL=app.js.map