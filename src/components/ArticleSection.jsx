import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState, useEffect } from "react";
import axios from "axios";
import BlogPosts from "./BlogPosts";
import SearchResultBox from "./SearchResultBox";

function ArticleSection() {

  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [category, setCategory] = useState("Highlight");
  const [search, setSearch] = useState("");
  const [titles, setTitles] = useState([]);
  
  {/*
  
    async function getPosts() {
    const response = await axios.get(`https://blog-post-project-api.vercel.app/posts?category=${category}&limit=2`);
    console.log(response.data.posts);
    setPosts(response.data.posts);
  };

  useEffect(() => {
    getPosts();
  }, [category]);

  */}

  useEffect(() => {
    async function getResults(search) {
      if (search.trim() === "") {
        setTitles([]);
        return;
      }

      try {
        const response = await axios.get(
          `https://blog-post-project-api.vercel.app/posts?keywords=${search}`
        );
        
        // Extract only titles from posts
        const postTitles = (response.data.posts || []).map((post) => post.title);
        setTitles(postTitles);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setTitles([]);
      }
    }

    // Debounce the search to avoid too many API calls
    const timeoutId = setTimeout(() => {
      getResults(search);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search]);


  return (

    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 font-sans bg-white">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-neutral-800 mb-4 tracking-tight">
        Latest articles
      </h2>

      {/* Container Box */}
      <div className="bg-white border border-neutral-200 p-4 sm:p-2 rounded-xl sm:rounded-xl">

        {/* MOBILE VIEW: Stacks Search on top, Dropdown below */}
        <div className="flex flex-col gap-3 sm:hidden">
          {/* Search Input Box */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="w-full"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />

            {/* Search Icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>

            {/* Search Results Dropdown */}
            {search && titles.length > 0 && (
              <SearchResultBox titles={titles} />
            )}
          </div>

          {/* Category Selector Dropdown */}
          <Select
            value={category}
            onValueChange={(value) => setCategory(value)}
          >
            <SelectTrigger className="w-full py-3 rounded-sm text-muted-foreground focus:right-0 focus:ring-offset-0 focus:border-muted-foreground">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {/* dynamic dropdown list with array.map */}
              {
                categories.map((cat) =>
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                )
              }

            </SelectContent>
          </Select>
        </div>

        {/* DESKTOP VIEW: Inline Row Layout (Hidden on Mobile) */}
        <div className="hidden sm:flex flex-row items-center justify-between gap-4">

          {/* Category Buttons */}

          <div className="flex items-center gap-1">
            {/* dynamic buttons with array.map [but how to adjust bg color of only first button]*/}
            {
              categories.map((cat) => {
                return (
                  <button
                    disabled={category === cat}
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 transition-colors rounded-sm text-sm font-medium ${category === cat ? 'bg-[#DAD6D1]' : 'hover:bg-muted'}`}
                  >
                    {cat}
                  </button>
                )
              })
            }

          </div>

          {/* Search Input Box */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="flex-1"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
            {/* Search Icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>

            {/* Search Results Dropdown */}
            {search && titles.length > 0 && (
              <SearchResultBox titles={titles} />
            )}
          </div>

        </div>
      </div>



      {/* Grid Container: Forces 1 column on mobile, scales to 2 columns on medium screens and up */}
      {/* why picture link work only the first one */}
      {/*
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-10">
        {
          posts.map((item, index) => {
            return (
              <BlogCard
                key={index}
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

    </div>
    
    */}

      <BlogPosts category={category} />

    </div >
  )
};

export default ArticleSection;
