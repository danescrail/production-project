import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';

export function createReduxStore (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        profile: profileReducer
    }

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => {
            const defaultMiddlewares = getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg
                }
            });
            return defaultMiddlewares;
        }
    })

    // @ts-expect-error @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
