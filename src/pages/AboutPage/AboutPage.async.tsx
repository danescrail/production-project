import { lazy } from 'react';

// @ts-expect-error
export const AboutPageAsync = lazy(() => import('./AboutPage'));