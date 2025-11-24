import 'reflect-metadata'
import { DataSource } from 'typeorm'
import {config} from 'dotenv'
// import { User } from '../entities/User'

config()

export const AppDataSoucer = new DataSource({
    type: 'mssql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // user: [User]
    synchronize: true,
    logging: false
})