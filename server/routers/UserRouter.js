import express from 'express'
import {getAllUser, registerUser, login, DeleteUser, changePassword, updateUser, getUserDetails} from '../controllers/UserController.js'
const UserRouter = express.Router()
import {isAuth, isAdmin} from '../untils/until.js'

UserRouter.post('/register', registerUser)
UserRouter.post('/create', registerUser)
UserRouter.post('/login', login)

UserRouter.get('/', getAllUser)
UserRouter.delete('/delete/:id', DeleteUser)

UserRouter.patch('/password/:id', changePassword);

UserRouter.put('/update/:id', updateUser);

UserRouter.get('/:id', getUserDetails);

export default UserRouter
