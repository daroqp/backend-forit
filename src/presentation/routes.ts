import { Router } from "express";
import { TaskRoutes } from "./tasks/routes";

export class AppRoutes {
    static get routes(): Router {
        const router = Router();

        router.use('/api/tasks' )

        return router
    }
}
