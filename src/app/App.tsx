import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userAction } from 'entities/User';

export const App = () => {
    const { theme } = useTheme(); // Используем хук
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAction.initAuthData());
    }, [dispatch]);

    return <div className={classNames('app', {}, [theme!])}>
        <Suspense fallback=''>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </Suspense>
    </div>
}