import { AppDataSource } from '../config/data-source'
import { User } from '../entities/User'

export class UserService {
    private repo = AppDataSource.getRepository(User)

    async create(user:User) {
        const exists = await this.findByEmail(user.email)
        if (exists) throw new Error('E-mail já cadastrado')
        const user2 = this.repo.create(user)
        const user3: any = await this.repo.save(user2);
        delete user3.password
        return user3
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
        return await this.repo.save(user)
    }


    async remove(id: number) {
        const user = await this.repo.findOne({ where: { id } })
        if (!user) throw new Error('Usuário não encontrado')
        await this.repo.remove(user)
        return { message: 'Usuário removido' }
    }

    private async findByEmail(email: string) {
        return this.repo.findOne({ where: { email } })
    }
}