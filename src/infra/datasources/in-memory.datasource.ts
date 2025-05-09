import { ITaskDatasource } from "../../domain/datasources/task.datasource";
import { CreateTaskDto } from "../../domain/dtos/tasks/create-task.dto";
import { TaskEntity } from "../../domain/entities/task.entity";

const tasks: Array<TaskEntity> = [];

export class InMemoryDatasource implements ITaskDatasource {

    async create(createDto: CreateTaskDto): Promise<TaskEntity> {
        const task = TaskEntity.fromObject( createDto )
        tasks.push( task )
        return task
    }
}
