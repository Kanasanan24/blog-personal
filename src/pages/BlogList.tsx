import {
    BsChevronLeft,
    BsChevronRight,
} from "react-icons/bs";

import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { paginate } from "../services/pagination";
import BlogCard from "../components/blog/BlogCard";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { IFTheme } from "../services/interfaceGlobal";
import { useParams, useNavigate, Link } from "react-router";
import { parseCategory } from "../services/parseInformation";
import { explore_blogs, IFExporeBlog } from "../data/blog-card";
import { categorie_details, IFCategoryDetail } from "../data/categories";

import "../assets/css/blogs/blog-list.css";

export default function BlogList({ theme }:IFTheme) {
    const { category } = useParams();
    const navigate = useNavigate();

    // state
    const [page, setPage] = useState<number | string>(1);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [blogs, setBlogs] = useState<IFExporeBlog[]>([]);
    const [isRender, setIsRender] = useState<boolean>(false);

    // effect
    useEffect(() => {
        prepareBlog();
    }, [page]);

    // function
    const prepareBlog = async() => {
        if (category) {
            setIsRender(false);
            const newStrCategory = parseCategory(category);
            const filter_category = categorie_details.find((detail:IFCategoryDetail) => detail.category === newStrCategory);
            if (filter_category) {
                if (typeof page === "number") {
                    const filter_blogs = paginate(page, filter_category);
                    const current_blogs = explore_blogs.filter((blog) => filter_blogs.blogs.includes(blog.slug));
                    setTotalPage(filter_blogs.pagination.total_page);
                    setBlogs(current_blogs);
                }
                setIsRender(true);
            } else {
                navigate("/not-found");
            }
        } else {
            navigate("/not-found");
        }
    }
    const nextPage = () => {
        if (typeof page === "number") {
            if (page < totalPage) setPage((prev) => Number(prev) + 1);
        }
    }
    const prevPage = () => {
        if (typeof page === "number") {
            if (page > 1) setPage((prev) => Number(prev) - 1);
        }
    }

    return (
        <div className={"blog-list-container " + (theme === "Light" ? "active-light" : (theme === "Dark" ? "active-dark" : ""))}>
            {isRender && (
                <div className="blog-list-content">
                    <Breadcrumb>
                        <Breadcrumb.Item active><Link to="/blogs" >Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>{category ? parseCategory(category) : ""}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="blog-list-card">
                        {blogs.map((blog) => (
                            <BlogCard {...blog} key={uuidv4()} />
                        ))}
                    </div>
                    <div className="pagination-container">
                        <i onClick={prevPage}><BsChevronLeft size={16} /></i>
                        <input
                            type="number"
                            min={1}
                            max={totalPage}
                            value={page}
                            onChange={(event) => setPage(event.target.value === "" ? "" : Number(event.target.value))}
                        />
                        <p>Total Page : {totalPage}</p>
                        <i onClick={nextPage}><BsChevronRight size={16} /></i>
                    </div>
                </div>
            )}
        </div>
    );
}