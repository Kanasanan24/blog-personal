import slugify from "slugify";
import { useEffect } from "react";
import { Link } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { Pagination } from "swiper/modules";
import { categories } from "../data/categories";
import { explore_blogs } from "../data/blog-card";
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCard from "../components/blog/BlogCard";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { IFTheme } from "../services/interfaceGlobal";

import "swiper/swiper-bundle.css";
// import "swiper/css";
import "../assets/css/blogs/blogs.css";


export default function Blogs({ theme }:IFTheme) {
    useEffect(() => {
        document.title = "Blogs - Personal Website"
    }, []);

    // render
    return (
        <div className={"blogs-container " + (theme === "Light" ? "active-light" : (theme === "Dark" ? "active-dark" : ""))}>
            <div className="blogs-content">
                <Breadcrumb>
                    <Breadcrumb.Item active><Link to="/blogs" >Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
                </Breadcrumb>
                <p className="category-title">Categories</p>
                <div className="categories-container">
                    {categories.map((category) => (
                        <Link
                            key={uuidv4()}
                            className="category-list"
                            to={"/categories" + "/" + slugify(category.toLocaleLowerCase())}
                        >
                            {category}
                        </Link>
                    ))}
                </div>
                <p className="explore-title">Explore Blog</p>
                <div className="blog-lists">
                    <Swiper
                        pagination={{clickable:true}}
                        spaceBetween={130}
                        modules={[Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            350: { slidesPerView: 1 },
                            800: { slidesPerView: 2 },
                            1440: { slidesPerView: 3 },
                            1600: { slidesPerView: 4 },
                        }}
                    >
                        {explore_blogs.slice(0, 4).map((blog) => (
                            <SwiperSlide key={uuidv4()}>
                                <BlogCard {...blog} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}