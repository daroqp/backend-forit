import { Router } from "express";
import { TaskController } from "./controller/task.controller";
import { TaskRepository } from "../../infra/repositories/task.repository";
import { InMemoryDatasource } from "../../infra/datasources/in-memory.datasource";

export class TaskRoutes {
    static get routes(): Router {
        const router = Router();

        const memoryTaskDatasource = new InMemoryDatasource()
        const taskRepository = new TaskRepository( memoryTaskDatasource )
        const taskController = new TaskController( taskRepository )

        router.get('/', taskController.listTasks)

        router.post('/', taskController.createTask )
        router.put('/:id', taskController.updateTask)

        return router
    }
}
