import { Router } from 'express'
import { AuthController } from '../controller/AuthController'
import { validateDTO } from '../middleware/ValidateDTO'
import { LoginUserDTO } from '../dtos/LoginUserDTO'
import { CreateDonorDTO } from '../dto/UserCreateDTO' 

const router = Router()
const controller = new AuthController()


router.post('/register', validateDTO(CreateDonorDTO),controller.register.bind(controller)) 
router.post('/login', validateDTO(LoginUserDTO),controller.login.bind(controller))

export default router