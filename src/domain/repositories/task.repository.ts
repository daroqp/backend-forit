import { CreateTaskDto } from "../dtos/tasks/create-task.dto";
import { UpdateTaskDto } from "../dtos/tasks/update-task.dto";
import { TaskEntity } from "../entities/task.entity";

export interface ITaskRepository {
    create(taskDto: CreateTaskDto): Promise<TaskEntity>
    list(): Promise<TaskEntity[]>
    update(updateDto: UpdateTaskDto): Promise<TaskEntity>
    delete(id: string): Promise<TaskEntity>
}
