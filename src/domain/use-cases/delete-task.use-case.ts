import { TaskEntity } from "../entities/task.entity";
import { ITaskRepository } from "../repositories/task.repository";

export interface DeleteTaskUseCase {
    execute(id: string): Promise<TaskEntity>
}

export class DeleteTask implements DeleteTaskUseCase {
    constructor(
        private readonly repository: ITaskRepository
    ){}

    execute(id: string): Promise<TaskEntity> {
        return this.repository.delete( id )
    }
}
