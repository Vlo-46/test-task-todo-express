import {createErrorResponse, createSuccessResponse} from "../helpers/responseHandler.js";

export default class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    async getTasks(req, res, next) {
        try {
            const tasks = await this.taskService.getTasks();
            return res.json(createSuccessResponse(tasks));
        } catch (err) {
            next(err)
        }
    }

    async getTaskById(req, res, next) {
        try {
            const task = await this.taskService.getTaskById(req.params.id);
            return res.json(createSuccessResponse(task));
        } catch (err) {
            next(err)
        }
    }

    async createTask(req, res, next) {
        try {
            if (!req.body.title || !req.body.description) {
                return res.json(createErrorResponse('Invalid data'))
            }

            const newTask = await this.taskService.createTask(req.body)
            if (!newTask) return res.json(createErrorResponse('Something went wrong'));

            return res.json(createSuccessResponse(newTask));
        } catch (err) {
            next(err)
        }
    }

    async updateTask(req, res, next) {
        try {
            const updatedTask = await this.taskService.updateTask(req.params.id);
            if (!updatedTask) return res.json(createErrorResponse('Something went wrong'));

            return res.json(createSuccessResponse(updatedTask));
        } catch (err) {
            next(err)
        }
    }

    async deleteTask(req, res, next) {
        try {
            const taskIsDeleted = await this.taskService.deleteTask(req.params.id);
            if (!taskIsDeleted) return res.json(createErrorResponse('Something went wrong'));

            return res.send(createSuccessResponse(taskIsDeleted));
        } catch (err) {
            next(err)
        }
    }
}