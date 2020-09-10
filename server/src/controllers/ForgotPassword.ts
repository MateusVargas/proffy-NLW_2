import {Request, Response} from 'express'
import db from '../database/connections'
import crypto from 'crypto'
import Mailer from '../modules/mailer'
import bcrypt from 'bcrypt'

export default class ForgotController{
    async store(req: Request, res: Response){
        const {email} = req.body

        try{
            const account:any = await db('accounts').where({email})
            if(account.length === 0) return res.status(404).json('user not found')

            const token = crypto.randomBytes(20).toString('hex')

            const now = new Date()
            now.setMinutes(now.getMinutes() + 20)

            await db('accounts').update({
                passwordResetToken: token,
                passwordResetExpires: now
            }).where('accounts.id',account[0].id)

            Mailer.sendMail({
                to: email,
                from: 'sistematopicos@gmail.com',
                subject: "Redefinição de Senha",
                html: `<p><a href=http://localhost:3000/reset?token=${token}>Aqui</a> está o link para a redefinição da sua senha.</p>`,
            }, (err)=>{
                if(err) return res.status(400).send({error: 'cannot send forgot password email'})
                return res.send()
            })
        }catch(err){
            console.log(err)
            res.status(400).send()
        }
    }

    async reset(req: Request, res: Response){
        const { email, password, passwordConfirmation, token } = req.body
        try {
            const account:any = await db('accounts').where({email})
            if(account.length === 0) return res.status(404).json('user not found')

            if(token !== account[0].passwordResetToken) return res.status(404).json('invalid token')

            if(password !== passwordConfirmation) return res.status(404).json('invalid passwords')
            
            const now = new Date()
            if(now > account[0].passwordResetExpires) return res.status(404).json('token expired')

            const hash = bcrypt.hashSync(password, 10)
            await db('accounts').update({
                password: hash,
                passwordResetToken: null,
                passwordResetExpires: null
            }).where('accounts.id',account[0].id)

            return res.status(204).send()

        } catch (error) {
            console.log(error)
            res.status(400).send()
        }
    }
}