import { TTask } from "./task.interface"
import { Task } from "./task.model"

const createNewTaskIntoDb = async (payload: TTask) => {
    const result = await Task.create(payload);
    return result
}

export const taskServices = {
    createNewTaskIntoDb
}