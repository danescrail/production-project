import { memo } from "react";
import { ArticleView } from "../../model/types/article";
import ListIcon from 'shared/assets/list-24-24.svg';
import TiledIcon from 'shared/assets/tiled-24-24.svg';
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon
    }
]

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (newView: ArticleView) => {
        onViewClick?.(newView);
    }

    return (
        <div>
            {viewTypes.map(viewType => (
                // eslint-disable-next-line react/jsx-key, @typescript-eslint/no-confusing-void-expression
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={() => { onClick(viewType.view) }}
                >
                    <Icon Svg={viewType.icon} className={classNames('', { [cls.notSelected]: viewType.view !== view })}/>
                </Button>
            ))}
        </div>
    )
})
