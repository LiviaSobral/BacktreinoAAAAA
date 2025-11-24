import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import bcrypt from 'bcrypt'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 120 })
    name: string

    @Column()
    phone:string

    @Column()
    email:string

    @Column({nullable:true})
    bloodType?: string

    @Column()
    weight:number

    @Column()
    age:number

    @Column({type:"date"})
    lastDonation:Date

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (!this.password.startsWith('$2')) {
            const rounds = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10)
            this.password = await bcrypt.hash(this.password, rounds)
        }
    }

    async validatePassword(plain: string): Promise<boolean> {
        return bcrypt.compare(plain, this.password)
    }
}