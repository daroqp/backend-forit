import { ITaskDatasource } from "../../domain/datasources/task.datasource";
import { TaskEntity } from "../../domain/entities/task.entity";

const tasks: Array<TaskEntity> = [];

export class InMemoryDatasource implements ITaskDatasource {
}
