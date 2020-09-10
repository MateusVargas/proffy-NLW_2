import {verifyJwt,getTokenHeaders} from '../helpers/jwt'
import { NextFunction, Response, Request } from 'express'

export const checkJwt = (req: any, res: Response, next: NextFunction)=>{
    const {url: path} = req
    const freePaths = ['/sign-in','/sign-up','/forgot-password','/reset-password']
    const isFree = !!freePaths.find(p => p.startsWith(path))
    if(isFree) return next()

    const token = getTokenHeaders(req.headers)
    if(!token) {
        return res.status(401).json('Invalid token')
    }
    try{
        const decoded:any = verifyJwt(token)
        req.accountId = decoded.id
        next()
    }catch(error){
        res.status(401)
        return res.json('Invalid token')
    }
}