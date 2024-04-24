import {Router} from 'express';

const router = Router();

import TaskController from '../controllers/task.controller.js';
import TaskService from '../services/task.service.js';

const taskService = new TaskService();
const taskController = new TaskController(taskService);

router.get('/', taskController.getTasks.bind(taskController));
router.get('/:id', taskController.getTaskById.bind(taskController));
router.post('/', taskController.createTask.bind(taskController));
router.put('/:id', taskController.updateTask.bind(taskController));
router.delete('/:id', taskController.deleteTask.bind(taskController));

export default router