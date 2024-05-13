import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import httpStatus from 'http-status-codes';
import { UserService } from "./user.service";

const addUser = catchAsync(async (req, res) => {
    const userInfo = req.body
    const result = await UserService.addUserIntoDB(userInfo)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'user create succesfull',
        data: result
    })
})

const getAllUsers = catchAsync(async (req, res) => {
    const result = await UserService.getAllUsersFromDB()

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'users retrived succesfull',
        data: result
    })
})
const getSingleUsers = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await UserService.getSingleUserFromDB(id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'users retrived succesfull',
        data: result
    })
})

export const UserController = {
    addUser,
    getAllUsers,
    getSingleUsers
}