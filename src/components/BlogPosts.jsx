import { useState, useEffect } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";

function BlogPosts({ category }) {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    // ฟังก์ชันสำหรับโหลดข้อมูล
    const fetchPosts = async () => {
        // ป้องกันการโหลดซ้ำถ้ายังโหลดไม่เสร็จ
        if (isLoading) return;

        setIsLoading(true);
        try {
            const categoryParam = category === "Highlight" ? "" : category;

            const response = await axios.get(
                "https://blog-post-project-api.vercel.app/posts",
                {
                    params: {
                        page: page,
                        limit: 6,
                        category: categoryParam,
                    },
                }
            );

            // รวมโพสต์ใหม่กับโพสต์เดิม
            setPosts((prevPosts) => [...prevPosts, ...response.data.posts]);

            // ตรวจสอบว่าถึงหน้าสุดท้ายหรือยัง
            if (response.data.currentPage >= response.data.totalPages) {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // โหลดโพสต์ใหม่เมื่อ page หรือ category เปลี่ยน
    useEffect(() => {
        fetchPosts();
    }, [page, category]);

    // รีเซ็ตโพสต์เมื่อเปลี่ยน category
    useEffect(() => {
        setPosts([]);
        setPage(1);
        setHasMore(true);
    }, [category]);

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
