import axios from 'axios'
import { loginByUsername } from './loginByUsername';
import { userAction } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);
describe('loginByUsername.test', () => {
    test('success auth', async () => {
        const userValue = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userAction.setAuthData(userValue)); // проверяем что после экшена, пользователь авторизован, сохранен в Redux
        expect(mockedAxios.post).toHaveBeenCalled(); // http запрос был вызван
        expect(result.meta.requestStatus).toBe('fulfilled'); // meta.request status => запрос успешно выполнен
        expect(result.payload).toEqual(userValue);
    });

    test('error auth', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 404 }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected'); // Вызываем на status 404
        expect(result.payload).toBe('error');
    });
});