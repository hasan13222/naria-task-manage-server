"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const notFoundHandler_1 = require("./app/utils/notFoundHandler");
const globalErrorHandler_1 = require("./app/middleware/globalErrorHandler");
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
// cors middleware
app.use((0, cors_1.default)({ origin: ['http://localhost:5173', 'https://naria-task-manage-front.vercel.app'], credentials: true }));
// json parsing middleware
app.use(express_1.default.json());
// cookie parser
app.use((0, cookie_parser_1.default)());
// application routes
app.use('/', routes_1.default);
app.get("/", (req, res) => {
    res.send("welcome to naria task management!");
});
// not found handler
app.all("*", notFoundHandler_1.notFoundHandler);
// global error handler middleware
app.use(globalErrorHandler_1.globalErrorHandler);
exports.default = app;
