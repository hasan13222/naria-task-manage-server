import express from "express";
import { verifyCookieToken } from "../../middleware/verifyToken";
import { taskController } from "./task.controller";

const router = express.Router();

router.post('/', verifyCookieToken(), taskController.createNewTask)

export const taskRoutes = router;