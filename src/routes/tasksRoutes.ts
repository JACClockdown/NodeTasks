import { Router } from "express"
import { TasksController } from "../controllers/TasksController"


const router = Router()

router.get('/tasks', TasksController.index)
router.post('/task', TasksController.store)
router.get('/task/:id', TasksController.show)

export default router