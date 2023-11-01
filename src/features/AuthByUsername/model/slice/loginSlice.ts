import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

export interface CounterState {
    value: number
}

const initialState: LoginSchema = {
    isLoading: false,
    username: '',
    password: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },

        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state: any, action) => {
                state.isLoading = false;
                state.error = action.error;
            })
    }
})

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
export default loginSlice.reducer