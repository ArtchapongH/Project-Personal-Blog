import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

function BlogPosts({ category }) {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    // ฟังก์ชันสำหรับโหลดข้อมูล
    const fetchPosts = async (pageNum, currentCategory) => {
        // ป้องกันการโหลดซ้ำถ้ายังโหลดไม่เสร็จ
        if (isLoading) return;

        setIsLoading(true);
        try {
            const categoryParam = currentCategory === "Highlight" ? "" : currentCategory;

            const response = await axios.get(
                "https://blog-post-project-api.vercel.app/posts",
                {
                    params: {
                        page: pageNum,
                        limit: 6,
                        category: categoryParam,
                    },
                }
            );

            // รวมโพสต์ใหม่กับโพสต์เดิม
            if (pageNum === 1) {
                // ถ้าเป็นหน้าแรก ให้เซ็ตใหม่เลย (ไม่รวมกับข้อมูลเก่า)
                setPosts(response.data.posts);
            } else {
                // ถ้าเป็นหน้าถัดไป ให้เพิ่มต่อท้าย
                setPosts((prevPosts) => [...prevPosts, ...response.data.posts]);
            }

            // ตรวจสอบว่าถึงหน้าสุดท้ายหรือยัง
            if (response.data.currentPage >= response.data.totalPages) {
                setHasMore(false);
            } else {
                setHasMore(true);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // รีเซ็ตและโหลดโพสต์ใหม่เมื่อเปลี่ยน category
    useEffect(() => {
        setPage(1);
        setHasMore(true);
        fetchPosts(1, category);
    }, [category]);

    // โหลดโพสต์เมื่อ page เปลี่ยน (และไม่ใช่หน้าแรก)
    useEffect(() => {
        if (page > 1) {
            fetchPosts(page, category);
        }
    }, [page]);

    // ฟังก์ชันเพิ่มหน้า
    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-10">
            {/* แสดงโพสต์ */}
            {/*
            {posts.map((post) => (
                <div key={post.id} className="border-b py-2">
                    <h3>{post.title}</h3>
                    <p>{post.category}</p>
                </div>
            ))}
            */}

            {
                posts.map((item, index) => {
                    const postId = item.id ?? item._id ?? index;
                    const postLink = `/post/${postId}`;

                    return (
                        <BlogCard
                            key={postId}
                            postLink={postLink}
                            image={item.image}
                            category={item.category}
                            title={item.title}
                            description={item.description}
                            author={item.author}
                            date={item.date}
                        />
                    )
                })
            }

            {/* ปุ่มโหลดเพิ่ม */}
            {hasMore && (
                <div className="col-span-full text-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="hover:text-muted-foreground font-medium underline"
                        disabled={isLoading}
                    >
                        {isLoading ? "Loading..." : "View more"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default BlogPosts;
