import { ArticlesPageAsync } from "./ui/ArticlesPage/ArticlesPage.async";
import { ArticlesPageSchema } from "./model/types/articlesPageSchema";
import { ArticleSortField } from "entities/Article/model/types/article";
import { ArticleSortSelector } from "entities/Article/ui/ArticleSortSelector/ArticleSortSelector";

export {
    ArticlesPageAsync as ArticlePage,
    type ArticlesPageSchema,
    ArticleSortField,
    ArticleSortSelector
}