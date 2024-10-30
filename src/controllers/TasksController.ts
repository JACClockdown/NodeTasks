import type {Request, Response} from 'express'
import colors from 'colors'
import Task from '../models/Tasks'

export class TasksController {
    
    static index = async (req: Request, res: Response) => {
        try{
            const tasks = await Task.find({})
            res.json(tasks)
        }catch(error){
            console.log(error)
        }
    }

    static store = async (req: Request, res: Response) => {

        const task = new Task(req.body)

        try{
            await task.save()
            res.send(`Task created success`)
        }catch( error ){
            console.log( colors.bgRed.bold(error.message) )
        }
    }

    static show = async (req: Request, res: Response) => {
        const { id } = req.params
        try{
            const task = await Task.findById(id)
            res.json(task)
        }catch(error){
            console.log(error)
        }
    }
}