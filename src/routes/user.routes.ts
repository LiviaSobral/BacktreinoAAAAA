import { Router } from 'express'
import { UserController } from '../controller/UserController'
import { authMiddleware } from '../middleware/AuthMiddleware'
import { validateDTO } from '../middleware/ValidateDTO'
import { UpdateUserDTO } from '../dto/UpdateUserDTO'

const router = Router()
const controller = new UserController()

router.get('/me', authMiddleware, controller.getById.bind(controller)) 
router.put('/me', authMiddleware, validateDTO(UpdateUserDTO), controller.update.bind(controller)) 
router.delete('/me',authMiddleware,controller.remove.bind(controller)) 
export default router