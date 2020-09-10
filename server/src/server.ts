//npx tsc --init -> gerando tsconfig.json
//npm install ts-node-dev -D - dependencia typescript
import express from 'express'
import cors from 'cors'
import routes from './routes'
import {checkJwt} from './middlewares/checkJwt'

const app = express()

app.use(express.json())
app.use(cors())
app.use(checkJwt)
app.use(routes)
app.use(express.urlencoded({extended: false}))

app.listen(3333, ()=>console.log('EM EXECUÇÃO... PODE IR'))