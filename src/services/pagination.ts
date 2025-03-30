import { IFCategoryDetail } from "../data/categories";

export const paginate = (page:number, category_detail:IFCategoryDetail) => {
    const start_blog = (page - 1) * 6;
    const end_blog = start_blog + 6
    return {
        blogs: category_detail.slugs.slice(start_blog, end_blog),
        pagination: {
            current_page: page,
            page_size: 6,
            total_page: Math.ceil(category_detail.slugs.length / 6)
        }
    }
}