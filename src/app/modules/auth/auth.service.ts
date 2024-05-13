import config from "../../config";
import { UserModel } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const loginUser = async (payload: TLoginUser) => {
    const user = await UserModel.findOne({ email: payload.email })
    if (!user) {
        throw new Error('User does not found!')
    }

    const isPasswordMatched = await bcrypt.compare(payload.password, user.password)
    console.log(isPasswordMatched)

    const jwtPayload = {
        email: user.email,
        role: user.role,
    }

    console.log(config.secretKey)

    const accessToken = jwt.sign(jwtPayload, config.secretKey as string, {
        expiresIn: '10d'
    })
    console.log(accessToken)
    return accessToken
}

export const AuthService = {
    loginUser
}