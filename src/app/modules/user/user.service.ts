import { TUser } from "./user.interface"
import { UserModel } from "./user.model"

const addUserIntoDB = (payload: TUser) => {
    const result = UserModel.create(payload)
    return result
}

const getAllUsersFromDB = async () => {
    const result = UserModel.find()
    return result
}


const getSingleUserFromDB = async (id: string) => {
    const result = UserModel.findById(id)
    return result
}

export const UserService = {
    addUserIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB
}