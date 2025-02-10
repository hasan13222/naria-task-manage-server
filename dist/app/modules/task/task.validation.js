"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskValidations = void 0;
const zod_1 = require("zod");
const task_const_1 = require("./task.const");
const createTaskValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        description: zod_1.z.string().optional(),
        userId: zod_1.z.string(),
        due_date: zod_1.z.string().optional(),
        status: zod_1.z.enum([...Object.keys(task_const_1.TASK_STATUS)]).optional(),
    }),
});
const updateTaskValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        userId: zod_1.z.string().optional(),
        due_date: zod_1.z.string().optional(),
        status: zod_1.z.enum([...Object.keys(task_const_1.TASK_STATUS)]).optional(),
    }),
});
exports.taskValidations = {
    createTaskValidationSchema,
    updateTaskValidationSchema,
};
