import { Request, Response } from "express";
import { ITaskRepository } from "../../../domain/repositories/task.repository";
import { CreateTaskDto } from "../../../domain/dtos/tasks/create-task.dto";
import { CreateTask } from "../../../domain/use-cases/create-task.use-case";
import { ListTasks } from "../../../domain/use-cases/list-tasks.use-case";
import { UpdateTask } from "../../../domain/use-cases/update-task.use-case";
import { UpdateTaskDto } from "../../../domain/dtos/tasks/update-task.dto";
import { DeleteTask } from "../../../domain/use-cases/delete-task.use-case";

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

    public listTasks = (req: Request, res: Response) => {

        new ListTasks( this.repository )
            .execute()
            .then(tasks => res.json( tasks ))
            .catch(error => res.status(400).json( error ))
    }

    public updateTask = (req: Request, res: Response) => {

        const id = req.params.id
        const [ error, updateDto ] = UpdateTaskDto.create({ ...req.body, id })

        if( error ) {
            res.status(400).json( error )
            return
        }

        new UpdateTask( this.repository )
            .execute( updateDto! )
            .then( task => res.json( task ) )
            .catch( error => res.status(400).json( error ) )
    }

    public deleteTask = (req: Request, res: Response) => {
        const id = req.params.id

        new DeleteTask( this.repository )
            .execute( id )
            .then( task => res.json( task ) )
            .catch( error => res.status(400).json( error ) )
    }
}
