import { TaskEntity } from "../entities/task.entity";
import { ITaskRepository } from "../repositories/task.repository";

export interface ListTasksUseCase {
    execute(): Promise<TaskEntity[]>
}

export class ListTasks implements ListTasksUseCase {
    constructor(
        private readonly repository: ITaskRepository
    ){}

    execute(): Promise<TaskEntity[]> {
        return this.repository.list()
    }
}
