import { TASK_STATUS } from "./task.const";

type TTaskStatus = keyof typeof TASK_STATUS

export interface TTask{
    title: string;
    description: string;
    due_date: string;
    status: TTaskStatus
}