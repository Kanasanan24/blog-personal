import { Link } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { IFBlog } from "../../services/interfaceGlobal";

import "../../assets/css/blogs/blog-card.css";

export default function BlogCard({ blog_image, title, description, author_image, author_name, created_at, slug, categories }:IFBlog) {
    return (
        <Link className="blog-card" to={"/blogs/" + slug}>
            <img src={blog_image} alt={title} draggable={false} />
            <p>{title}</p>
            <span>{description.length > 130 ? description.substring(0, 130) + "..." : description}</span>
            <div className="blog-category">
                {categories.map((category) => (
                    <div className="blog-category-list" key={uuidv4()}>{category}</div>
                ))}
            </div>
            <div className="footer-blog">
                <div className="author">
                    <img src={author_image} alt={author_name} draggable={false} />
                    <span>{author_name}</span>
                </div>
                <div className="created">
                    <span>{created_at}</span>
                </div>
            </div>
        </Link>
    );
}