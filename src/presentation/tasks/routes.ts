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

        router.post('/', taskController.createTask )

        return router
    }
}
