import { model, Schema } from "mongoose";
import { TTask } from "./task.interface";
import { TASK_STATUS } from "./task.const";


const taskSchema = new Schema<TTask>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    due_date: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: Object.keys(TASK_STATUS)
    }
})

export const Task = model<TTask>('Task', taskSchema);