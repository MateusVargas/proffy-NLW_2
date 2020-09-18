import {Request, Response} from 'express'
import db from '../database/connections'
import bcrypt from 'bcrypt'
import { generateJwt } from '../helpers/jwt'

export default class AccountsController{
    async signin(req: Request, res: Response){
        const { email, password } = req.body
        const account:any = await db('accounts').where({email})

        if(account.length === 0) return res.status(404).json('not found')

        const match = account ? bcrypt.compareSync(password, account[0].password) : null
        if(!match) return res.status(400).json('invalid data')

        const token = generateJwt({id: account[0].id})
        const metadata = {token}

        return res.status(200).json({account:{
            id: account[0].id,
            name: account[0].name,
            surname: account[0].surname,
            email: account[0].email
        },metadata})
    }

    async signup(req: Request, res: Response){
        const { name, surname, email, password } = req.body
        const account:any = await db('accounts').where({email})

        if(account.length > 0) return res.status(400).json({error: 'e-mail already exists'})

        const hash = bcrypt.hashSync(password, 10)
        await db('accounts').insert({
            name,
            surname,
            email,
            password: hash
        })
        return res.status(201).send()
    }
}