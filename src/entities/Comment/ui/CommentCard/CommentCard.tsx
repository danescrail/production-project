import { classNames } from "shared/lib/classNames/classNames";
import cls from './CommentCard.module.scss';
import { memo } from "react";
import { Comment } from "../../model/types/comment";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Text } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import AppLink from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className!])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%' />
                    <Skeleton width={100} height={16} className={cls.username} />
                </div>
                <Skeleton width={'100%'} height={50} className={cls.text} />
            </div>
        )
    }
    if (!comment) {
        return null;
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className!])}>
            <AppLink className={cls.header} to={`${RoutePath.profile}${comment.user.id}`}>
                {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
                <Text title={comment.user.username} className={cls.username} />
            </AppLink>
            <Text text={comment.text} className={cls.text} />
        </div>
    )
})
