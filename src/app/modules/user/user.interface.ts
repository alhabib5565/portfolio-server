import { Model } from "mongoose";

export type TUser = {
    email: string,
    name: string
    password: string,
    role: string
}

export interface TUserModel extends Model<TUser> {
    isUserExist(email: string): Promise<TUser | null>;
}