import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe('getLoginError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'name',
                password: '123',
                isLoading: false,
                error: 'error'
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
    test('with empty error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'name',
                password: '123',
                isLoading: false
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual('');
    });
});