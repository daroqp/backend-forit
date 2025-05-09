import { CreateTaskDto } from "../dtos/tasks/create-task.dto";
import { TaskEntity } from "../entities/task.entity";

export interface ITaskDatasource {
    create(taskDto: CreateTaskDto): Promise<TaskEntity>
}
