import { Request, Response } from 'express'
import { IUserRequest, IUserUpdate } from '../../interfaces/user.interface'
import { createUserService, deleteUserService, getAllUsersService, getUserService, updateUserService } from '../../services'

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
    const allUsers = await getUserService(res.locals.foundUser)
    return res.status(200).json(allUsers)
}

export const deleteUserController = async (req: Request, res: Response) => {
    await deleteUserService(res.locals.foundUser)
    return res.status(204).send()
}

export const updateUserController = async (req: Request, res: Response) => {
    const dataToUpdate: IUserUpdate = req.body
    const foundUser = res.locals.foundUser

    const updatedUser = await updateUserService(dataToUpdate, foundUser, req.params.id)
    return res.status(200).json(updatedUser)
}