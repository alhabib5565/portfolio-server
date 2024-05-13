import { Schema, model } from "mongoose";
import { TUser, TUserModel } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config";
const userSchema = new Schema<TUser>({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

userSchema.pre("save", async function (next) {
    console.log(config.salt_round)
    const password = await bcrypt.hash(this.password, Number(config.salt_round))
    this.password = password
    next()
})

userSchema.statics.isUserExist = async function (email: string) {
    return await UserModel.findOne({ email: email })
}

export const UserModel = model<TUser, TUserModel>('User', userSchema)