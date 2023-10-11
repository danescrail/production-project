import { lazy } from 'react';

// @ts-expect-error
export const MainPageAsync = lazy(() => import('./MainPage'));