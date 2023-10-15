import { lazy } from 'react';

// @ts-expect-error
export const NotFoundPageAsync = lazy(() => import('./NotFoundPage'));