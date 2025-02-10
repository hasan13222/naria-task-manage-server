"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRoutes = void 0;
const express_1 = __importDefault(require("express"));
const verifyToken_1 = require("../../middleware/verifyToken");
const task_controller_1 = require("./task.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const task_validation_1 = require("./task.validation");
const router = express_1.default.Router();
router.post('/', (0, verifyToken_1.verifyToken)(), (0, validateRequest_1.validateRequest)(task_validation_1.taskValidations.createTaskValidationSchema), task_controller_1.taskController.createNewTask);
router.get('/', (0, verifyToken_1.verifyToken)(), task_controller_1.taskController.getMyTask);
router.get('/:id', (0, verifyToken_1.verifyToken)(), task_controller_1.taskController.getSingleTask);
router.put('/:id', (0, verifyToken_1.verifyToken)(), (0, validateRequest_1.validateRequest)(task_validation_1.taskValidations.updateTaskValidationSchema), task_controller_1.taskController.updateSingleTask);
router.delete('/:id', (0, verifyToken_1.verifyToken)(), task_controller_1.taskController.deleteTask);
exports.taskRoutes = router;
