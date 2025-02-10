"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("mongoose");
const task_const_1 = require("./task.const");
const taskSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    due_date: {
        type: String,
    },
    status: {
        type: String,
        enum: Object.keys(task_const_1.TASK_STATUS),
        default: "todo",
    },
}, { timestamps: true });
exports.Task = (0, mongoose_1.model)("Task", taskSchema);
