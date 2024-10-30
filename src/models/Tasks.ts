import mongoose, {Schema, Document} from "mongoose"

export type Tasks = Document & {
    taskName: string,
    description: string
}

const TasksSchema: Schema = new Schema({
    taskName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    }
})

const Task = mongoose.model('task', TasksSchema)
export default Task