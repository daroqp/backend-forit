import { ITaskDatasource } from "../../domain/datasources/task.datasource";
import { ITaskRepository } from "../../domain/repositories/task.repository";

export class TaskRepository implements ITaskRepository {
    constructor(
        private readonly datasource: ITaskDatasource
    ){}
}
