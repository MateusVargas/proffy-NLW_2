import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController'
import AccountsController from './controllers/AccountsController'
import ForgotController from './controllers/ForgotPassword'

const routes = express.Router()
const classesController = new ClassesController()
const connectionsController = new ConnectionsController()
const accountController = new AccountsController()
const forgotController = new ForgotController()

routes.get('/classes', classesController.index)
routes.get('/classes-total', classesController.total)
routes.post('/classes', classesController.create)
routes.get('/classes-profile', classesController.show)
routes.put('/classes-profile', classesController.update)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

routes.post('/sign-in', accountController.signin)
routes.post('/sign-up', accountController.signup)

routes.post('/forgot-password', forgotController.store)
routes.post('/reset-password', forgotController.reset)

export default routes