import { CreateTaskDto } from "../dtos/tasks/create-task.dto";
import { TaskEntity } from "../entities/task.entity";

export interface ITaskRepository {
    create(taskDto: CreateTaskDto): Promise<TaskEntity>
    list(): Promise<TaskEntity[]>
}
