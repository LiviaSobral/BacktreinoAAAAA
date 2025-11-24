import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

const service = new UserService()

export class UserController {

    async create(req: Request, res: Response) {
        try {
            const user = await service.create(req.body)
            res.status(201).json(user)
        } catch (e: any) {
            res.status(400).json({ mensagem: e.mensagem })
        }
    }

    async list(res: Response) {
        try {
            const user = await service.findAll()
            res.status(201).json(user)
        } catch (e: any) {
            res.status(400).json({ mensagem: e.mensagem })
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const user = await service.findById(req.body)
            res.status(201).json(user)
        } catch (e: any) {
            res.status(400).json({ mensagem: e.mensagem })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const user = await service.update(Number(req.params.id), req.body)
            res.status(201).json(user)
        } catch (e: any) {
            res.status(400).json({ mensagem: e.mensagem })
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const user = await service.remove(Number(req.params.id))
            res.status(201).json(user)
        } catch (e: any) {
            res.status(400).json({ mensagem: e.mensagem })
        }
    }
}