import { UpdateTaskDto } from "../dtos/tasks/update-task.dto";
import { TaskEntity } from "../entities/task.entity";
import { ITaskRepository } from "../repositories/task.repository";

export interface UpdateTaskUseCase {
    execute(updateDto: UpdateTaskDto): Promise<TaskEntity>
}

export class UpdateTask implements UpdateTaskUseCase {
    constructor(
        private readonly repository: ITaskRepository
    ){}

    execute(updateDto: UpdateTaskDto): Promise<TaskEntity> {
        return this.repository.update( updateDto )
    }
}
