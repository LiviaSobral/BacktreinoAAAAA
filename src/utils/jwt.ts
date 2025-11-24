import jwt from "jsonwebtoken";
import { config } from "dotenv";

config()

interface Payload {
    id: number,
    name: string
}

export const genereteToken = (payload: Payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET!, {
        expiresIn: Number(process.env.JWT_EXPIRES_IN) || '1d'
    })
}

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET!)
    } catch (e) {
        return null
    }
}