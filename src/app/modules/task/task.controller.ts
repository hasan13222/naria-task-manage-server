import { Request, Response } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { taskServices } from "./task.service"
import { sendResponse } from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

const createNewTask = catchAsync(async (req: Request, res: Response) => {
    const newTask = await taskServices.createNewTaskIntoDb(req.body);
    sendResponse(res, {
        success: true,
        status: StatusCodes.CREATED,
        message: "Task created successfully",
        data: newTask
    })
})

export const taskController = {
    createNewTask
}