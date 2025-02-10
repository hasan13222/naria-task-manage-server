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
exports.taskServices = void 0;
const task_model_1 = require("./task.model");
const createNewTaskIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.Task.create(payload);
    return result;
});
const getMyTaskFromDb = (userId, query) => __awaiter(void 0, void 0, void 0, function* () {
    const excludedFields = ["limit", "page"];
    const filterObject = Object.assign({}, query);
    Object.keys(filterObject).forEach((item) => {
        if (excludedFields.includes(item) || !filterObject[item]) {
            delete filterObject[item];
        }
    });
    const limit = Number(query === null || query === void 0 ? void 0 : query.limit) || 6;
    const page = Number(query === null || query === void 0 ? void 0 : query.page) || 1;
    const result = yield task_model_1.Task.find(Object.assign({ userId }, filterObject))
        .skip((page - 1) * limit)
        .limit(limit)
        .sort("-createdAt");
    const metaResult = yield task_model_1.Task.find(Object.assign({ userId }, filterObject)).lean();
    //   summary calculation
    const ongoingArr = metaResult.filter((item) => item.status === "ongoing");
    const todoArr = metaResult.filter((item) => item.status === "todo");
    const completeArr = metaResult.filter((item) => item.status === "complete");
    return {
        result,
        meta: {
            total: metaResult.length,
            totalPage: Math.ceil(metaResult.length / limit),
            currentPage: page,
            summary: { ongoing: ongoingArr.length, todo: todoArr.length, complete: completeArr.length },
        },
    };
});
const getSingleTaskFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.Task.findById(id);
    return result;
});
const updateSingleTaskIntoDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.Task.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteTaskFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield task_model_1.Task.findByIdAndDelete(id);
    return result;
});
exports.taskServices = {
    createNewTaskIntoDb,
    getMyTaskFromDb,
    deleteTaskFromDb,
    getSingleTaskFromDb,
    updateSingleTaskIntoDb,
};
