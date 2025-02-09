"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// cors middleware
app.use((0, cors_1.default)());
// json parsing middleware
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("welcome to naria task management!");
});
exports.default = app;
