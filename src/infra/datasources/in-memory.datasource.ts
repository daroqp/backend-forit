import { ITaskDatasource } from "../../domain/datasources/task.datasource";
import { CreateTaskDto } from "../../domain/dtos/tasks/create-task.dto";
import { UpdateTaskDto } from "../../domain/dtos/tasks/update-task.dto";
import { TaskEntity } from "../../domain/entities/task.entity";

const tasks: Array<TaskEntity> = [];

export class InMemoryDatasource implements ITaskDatasource {

    async create(createDto: CreateTaskDto): Promise<TaskEntity> {
        const task = TaskEntity.fromObject( createDto )
        tasks.push( task )
        return task
    }

    async list(): Promise<TaskEntity[]> {
        return tasks
    }

    async update(updateDto: UpdateTaskDto): Promise<TaskEntity> {
        const { id, title, description, completed, createdAt } = updateDto;

        const indexOfTask = tasks.findIndex( task => task.id === id)

        if(indexOfTask === -1) {
            throw `ID: ${ id } does not exist!`
        }

        const taskToUpdate = tasks[ indexOfTask ]

        if( title ) taskToUpdate.title = title
        if( description ) taskToUpdate.description = description
        if( completed ) taskToUpdate.completed = completed
        if( createdAt ) taskToUpdate.createdAt = createdAt

        return taskToUpdate
    }
}
