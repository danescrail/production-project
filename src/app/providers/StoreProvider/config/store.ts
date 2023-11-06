import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState
    });

    // @ts-expect-error @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
