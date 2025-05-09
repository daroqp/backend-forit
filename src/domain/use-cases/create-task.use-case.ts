import { CreateTaskDto } from "../dtos/tasks/create-task.dto";
import { TaskEntity } from "../entities/task.entity";
import { ITaskRepository } from "../repositories/task.repository";

export interface CreateTaskUseCase {
    execute(createDto: CreateTaskDto): Promise<TaskEntity>
}

export class CreateTask implements CreateTaskUseCase {
    constructor(
        private readonly repository: ITaskRepository
    ){}

    execute(createDto: CreateTaskDto): Promise<TaskEntity> {
        return this.repository.create( createDto )
    }
}
