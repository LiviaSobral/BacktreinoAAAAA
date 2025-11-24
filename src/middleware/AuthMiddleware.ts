import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt"
import { decode } from "punycode";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeaders = req.headers.authorization

    if (!authHeaders || !authHeaders.startsWith("Bearer")) {
        return res.status(401).json({ mensagem: "Token não fornecido" })
    }

    const token = authHeaders.split(' ')[1]

    const decoded = verifyToken(token)

    if(!decoded) {
        return res.status(401).json({mensagem: "Token Invalido"})
    }

    (req as any).user = decoded

    next()
}