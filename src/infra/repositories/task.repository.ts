import { ITaskDatasource } from "../../domain/datasources/task.datasource";
import { CreateTaskDto } from "../../domain/dtos/tasks/create-task.dto";
import { UpdateTaskDto } from "../../domain/dtos/tasks/update-task.dto";
import { TaskEntity } from "../../domain/entities/task.entity";
import { ITaskRepository } from "../../domain/repositories/task.repository";

export class TaskRepository implements ITaskRepository {
    constructor(
        private readonly datasource: ITaskDatasource
    ){}

    create(createDto: CreateTaskDto): Promise<TaskEntity> {
        return this.datasource.create( createDto )
    }

    list(): Promise<TaskEntity[]> {
        return this.datasource.list()
    }

    update(updateDto: UpdateTaskDto): Promise<TaskEntity> {
        return this.datasource.update( updateDto )
    }

    delete(id: string): Promise<TaskEntity> {
        return this.datasource.delete( id )
    }
}
