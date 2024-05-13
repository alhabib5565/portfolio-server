import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { AuthService } from "./auth.service"
import httpStatus from 'http-status-codes';


const loginUser = catchAsync(async (req, res) => {
    const result = await AuthService.loginUser(req.body)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'user logged in succesfull',
        data: result
    })
})

export const AuthController = {
    loginUser
}