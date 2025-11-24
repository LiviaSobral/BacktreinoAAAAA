import { Router } from 'express'
import { AuthController } from '../controller/AuthController'
import { validateDTO } from '../middleware/ValidateDTO'
import { LoginUserDTO } from '../dto/LoginUserDTO'
import { CreateUserDTO } from '../dto/UserCreateDTO' 

const router = Router()
const controller = new AuthController()


router.post('/register', validateDTO(CreateUserDTO),controller.register.bind(controller)) 
router.post('/login', validateDTO(LoginUserDTO),controller.login.bind(controller))

export default router