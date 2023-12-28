import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ScrollSaveSchema } from '../types/ScrollSave';

const initialState: ScrollSaveSchema = {
    scroll: {}
}

export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{
                path: string,
                position: number
            }>) => {
            state.scroll[payload.path] = payload.position;
        }
    }
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(_.pending, (state, action) => {
    //             state.isLoading = true;
    //         })
    //         .addCase(_.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(_.rejected, (state: any, action) => {
    //             state.isLoading = false;
    //             state.error = action.error;
    //         })
    // }
})

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
export default scrollSaveSlice.reducer;