"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const task_service_1 = require("./task.service");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_codes_1 = require("http-status-codes");
const createNewTask = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTask = yield task_service_1.taskServices.createNewTaskIntoDb(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.CREATED,
        message: "Task created successfully",
        data: newTask,
    });
}));
const getMyTask = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_service_1.taskServices.getMyTaskFromDb(req.user.userId, req.query);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Task retrieved successfully.",
        data: result.result,
        meta: result.meta
    });
}));
const getSingleTask = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTask = yield task_service_1.taskServices.getSingleTaskFromDb(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Task retrieved successfully",
        data: newTask,
    });
}));
const updateSingleTask = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newTask = yield task_service_1.taskServices.updateSingleTaskIntoDb(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Task updated successfully",
        data: newTask,
    });
}));
const deleteTask = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.params.id;
    const newTask = yield task_service_1.taskServices.deleteTaskFromDb(taskId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        status: http_status_codes_1.StatusCodes.OK,
        message: "Task deleted successfully",
        data: newTask,
    });
}));
exports.taskController = {
    createNewTask,
    deleteTask,
    getMyTask,
    getSingleTask,
    updateSingleTask
};
