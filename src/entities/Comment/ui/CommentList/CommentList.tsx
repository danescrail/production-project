import { classNames } from "shared/lib/classNames/classNames";
import cls from './CommentList.module.scss';
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import { Comment } from "../../model/types/comment";

interface CommentListProps {
    className?: string;
    isLoading?: boolean;
    comments?: Comment[];
}

export const CommentList = memo(({ className, isLoading, comments }: CommentListProps) => {
    const { t } = useTranslation('comment');
    return (
        <div className={classNames(cls.CommentList, {}, [className!])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard isLoading={isLoading} comment={comment} className={cls.comment}/>
                ))
                : <Text text={t('Комментарии отсутсвуют')} />}
        </div>
    )
})
