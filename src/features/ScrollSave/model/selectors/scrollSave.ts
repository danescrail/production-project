import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

export const getScrollSaveData = (state: StateSchema) => state.saveScroll.scroll;
export const getScrollSavePath = createSelector(
    getScrollSaveData,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0
)