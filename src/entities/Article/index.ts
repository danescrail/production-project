import { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";
import type { Article } from "./model/types/article";
import type { ArticleDetailsSchema } from "./model/types/articleDetailsSchema";
import { getArticleDetailsData } from "./model/selectors/articleDetails";

export {
    ArticleDetails,
    type ArticleDetailsSchema,
    type Article,
    getArticleDetailsData
}