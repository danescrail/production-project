import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe('getLoginIsLoading.test', () => {
    test('if isLoading = true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
                password: '123',
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test('if isLoading = false', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123',
                password: '123',
                isLoading: false
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});