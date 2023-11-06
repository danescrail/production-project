import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe('getLoginUsername.test', () => {
    test('test text in username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
                password: '123',
                isLoading: true
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('123');
    });
    test('test empty username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '',
                password: '',
                isLoading: false
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});