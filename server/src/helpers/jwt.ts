require('dotenv').config()
import jwt from 'jsonwebtoken'

const tokenPrivateKey:any = process.env.JWT_TOKEN_PRIVATE_KEY

const options = { expiresIn: '30 minutes' }

const generateJwt = (payload: any) => {
    return jwt.sign(payload, tokenPrivateKey, options)
}

const verifyJwt = (token: any) => {
    return jwt.verify(token, tokenPrivateKey)
}

const getTokenHeaders = (headers: any) => {
    const token = headers['authorization']
    return token ? token.slice(7, token.length) : null
}

export {generateJwt, verifyJwt, getTokenHeaders}