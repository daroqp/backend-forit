import { Request, Response } from "express";
import { ITaskRepository } from "../../../domain/repositories/task.repository";
import { CreateTaskDto } from "../../../domain/dtos/tasks/create-task.dto";
import { CreateTask } from "../../../domain/use-cases/create-task.use-case";

export class TaskController {
    constructor(
        private readonly repository: ITaskRepository
    ){}

    public createTask = (req: Request, res: Response) => {
        const [ error, createTaskDto ] = CreateTaskDto.create( req.body )
        if( error ) {
            res.status(400).json({ error: error });
            return
        }

        new CreateTask( this.repository )
            .execute( createTaskDto! )
            .then( ( task  )=> {
                return res.json( task )
            })
            .catch( ( error  )=> {
                return res.status(400).json({ error: error }) 
            })
    }
}
