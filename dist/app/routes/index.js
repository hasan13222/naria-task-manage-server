"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const task_route_1 = require("../modules/task/task.route");
const router = express_1.default.Router();
const moduleRouters = [
    {
        path: '/auth',
        routes: auth_route_1.AuthRoutes,
    },
    {
        path: '/tasks',
        routes: task_route_1.taskRoutes
    }
];
moduleRouters.forEach((route) => {
    router.use(route.path, route.routes);
});
exports.default = router;
