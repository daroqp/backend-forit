export interface TaskEntityOptions {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    createdAt: Date
}

export class TaskEntity {

    public id: string;
    public title: string;
    public description: string;
    public completed: boolean;
    public createdAt: Date;

    constructor( options: TaskEntityOptions ){
        const { id, title, description, completed, createdAt } = options;

        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.createdAt = createdAt;
    }
}
