import { userReducer, userAction } from "./model/slice/userSlice"
import type { UserSchema, User } from "./model/types/user"
import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData"
import { getUserInited } from "./model/selectors/getUserInited/getUserInited"

export {
    userReducer,
    userAction,
    getUserAuthData,
    getUserInited,
    type UserSchema,
    type User
}