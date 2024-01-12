import { AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { CounterSchema } from "entities/Counter/model/types/counterSchema";
import { ProfileSchema } from "entities/Profile";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { UserSchema } from "entities/User";
import { AddCommentFormSchema } from "features/AddNewComment";
import { LoginSchema } from "features/AuthByUsername";
import { ScrollSaveSchema } from "features/ScrollSave";
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage/model/types";
import { ArticlesPageSchema } from "pages/ArticlePage";
import { NavigateOptions, To } from "react-router-dom";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    saveScroll: ScrollSaveSchema;
    profile: ProfileSchema;
    loginForm?: LoginSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api?: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig {
    rejectValue: ValidateProfileError[];
    extra: ThunkExtraArg;
    state: StateSchema;
    dispatch?: Dispatch<AnyAction>;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}
