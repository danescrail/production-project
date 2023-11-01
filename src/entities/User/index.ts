import { userReducer, userAction } from "./model/slice/userSlice"
import type { UserSchema, User } from "./model/types/user"
import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData"

export {
    userReducer,
    userAction,
    getUserAuthData,
    type UserSchema,
    type User
}