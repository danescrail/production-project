import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe('getLoginPassoword.test', () => {
    test('test text in password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
                password: '123',
                isLoading: true
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
    test('test empty password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
                password: '',
                isLoading: false
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});