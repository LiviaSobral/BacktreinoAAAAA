import { AppDataSource } from '../config/data-source'
import { User } from '../entities/User'

export class UserService {
    private repo = AppDataSource.getRepository(User)

    async create(data:Partial<User>) {
        const exists = await this.repo.findOne({where:{email:data.email}})
        if(exists){
            throw new Error("Email ja utilizado")
        }
        const user = this.repo.create(data)
        await this.repo.save(user)
        const clone:any = user
        delete clone.password
        delete clone.cpf
        return clone
    }

    async findAll() {
        const users = await this.repo.find()
        return users.map((u: User) => {
            const clone: any = { ...u }
            delete clone.password
            return clone
        })
    }

    async findById(id: number) {
        const user = await this.repo.findOne({ where: { id } })
        if (!user) throw new Error('Usuário não encontrado')
        const clone: any = { ...user }
        delete clone.password
        return clone
    }

    async update(id: number, data: Partial<User>) {
        const user = await this.repo.findOne({ where: { id } })
        if (!user) throw new Error('Usuário não encontrado')
        if (data.password) {
            user.password = data.password
        }
        const { password, ...rest } = data
        Object.assign(user, rest)
        await this.repo.save(user)
        return rest
    }


    async remove(id: number) {
        const user = await this.repo.findOne({ where: { id } })
        if (!user) throw new Error('Usuário não encontrado')
        await this.repo.remove(user)
        return { message: 'Usuário removido' }
    }

    async findByEmail(email: string) {
        const user:any = await this.repo.findOne({ where: { email } })
        return user
    }
}