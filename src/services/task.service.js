import {Task} from '../models/task.model.js';

export default class TaskService {
    async getTasks() {
        return await Task.find()
            .sort({ createdAt: -1 });
    }

    async createTask(task) {
        const newTask = new Task({
            title: task.title,
            description: task.description,
            completed: false
        });

        if (!newTask) return

        await newTask.save()
        return newTask;
    }

    async updateTask(id) {
        const task = await Task.findById(id);
        if (!task) return;

        task.completed = !task.completed;
        return await task.save();
    }

    async deleteTask(id) {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) return
        return {message: 'Task deleted successfully'}
    }

    async getTaskById(id) {
        return await Task.findById(id)
    }
}