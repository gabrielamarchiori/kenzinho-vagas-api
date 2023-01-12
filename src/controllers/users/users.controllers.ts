import { Request, Response } from 'express'
import { IUserRequest } from '../../interfaces/user.interface'
import { createUserService, getAllUsersService, getUserService } from '../../services'

export const createUserController = async (req: Request, res: Response) => {
    const userData: IUserRequest = req.body

    const createdUser = await createUserService(userData)
    return res.status(201).json(createdUser)
}

export const getAllUsersController = async (req: Request, res: Response) => {
    const allUsers = await getAllUsersService()
    return res.status(200).json(allUsers)
}

export const getUserController = async (req: Request, res: Response) => {
    const allUsers = await getUserService(req.params.id)
    return res.status(200).json(allUsers)
}