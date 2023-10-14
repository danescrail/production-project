import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    const { t } = useTranslation('translation');
    return (
        <Suspense fallback={<div>...{t('Загрузка')}</div>}>
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => {
                        return <Route key={path} element={element} path={path} />
                    })};
                </Routes>
            </div>
        </Suspense>
    );
}

export default AppRouter;