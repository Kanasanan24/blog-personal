import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import parse from "html-react-parser";
import { explore_blogs } from "../data/blog-card";
import { blog_details } from "../data/blog-detail";
import { IFTheme } from "../services/interfaceGlobal";
import { useParams, Link, useNavigate } from "react-router";
import { HTMLsanitization } from "../services/sanitization";
import { reverseCategory } from "../services/parseInformation";

import {
    BsArrowLeftCircle
} from "react-icons/bs";

import "../assets/css/blogs/blog-detail.css";

export default function BlogDetail({ theme }:IFTheme) {
    const { slug } = useParams();
    const navigate = useNavigate();
    const blog_detail = blog_details.filter(detail => detail.slug === slug);
    const filter_explore = explore_blogs.filter(card_blog => card_blog.slug === slug);

    useEffect(() => {
        window.scrollTo(0,0);
        document.title = filter_explore[0].title + " - Personal Blog";
        if (blog_detail.length === 0 || !blog_detail[0].code) navigate("not-found");
    }, []);

    // render
    return (
        <div className={"blog-detail-container " + (theme === "Light" ? "active-light" : (theme === "Dark" ? "active-dark" : ""))}>
            {blog_detail.length > 0 && blog_detail[0].code && (
                <div className="detail-content">
                    <Link className="back-blogpage" to={"/categories/" + reverseCategory(filter_explore[0].categories[0])}>
                        <i><BsArrowLeftCircle size={30} /></i>
                        Back to Category
                    </Link>
                    <div className="header-paragraph">
                        <div className="category-detail">
                            {filter_explore[0].categories.map((category) => (
                                <div key={uuidv4()} className="category-detail-list">{category}</div>
                            ))}
                        </div>
                        <p className="blog-detail-title">{filter_explore[0].title}</p>
                        <span>{filter_explore[0].description}</span>
                        <div className="detail-author">
                            <img src={filter_explore[0].author_image} alt={filter_explore[0].author_name} />
                            <div className="author-info">
                                <span className="author-name">{filter_explore[0].author_name}</span>
                                <span className="created-at">Created : {filter_explore[0].created_at}</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* Start Blog */}
                    <div className="main-paragraph-content">
                        {blog_detail[0].code ? parse(HTMLsanitization(blog_detail[0].code)) : ""}
                    </div>
                    {/* End Blog */}
                </div>
            )}
        </div>
    );
}