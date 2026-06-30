import BlogCard from "./BlogCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { blogPosts } from "@/data/BlogPost";

const categories = ["Highlight", "Cat", "Inspiration", "General"];

function ArticleSection() {
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
        />
      
      {/* Search Icon */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      {/* Category Selector Dropdown */}
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Highlight" />
        </SelectTrigger>
        <SelectContent>
          {/* dynamic dropdown list with array.map */}
          {
            categories.map((category, index) => 
              <SelectItem value={category}>{category}</SelectItem>
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
        categories.map((category, index) =>{
          return(
          <button className={`px-4 py-3 transition-colors rounded-sm text-sm font-medium ${index === 0 ? 'bg-gray-100' : 'bg-[muted]'}`}>
            {category}
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
        />
      {/* Search Icon */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

    </div>
  </div>



  {/* Grid Container: Forces 1 column on mobile, scales to 2 columns on medium screens and up */}
  {/* why picture link work only the first one */}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-10">
  {
    blogPosts.map((item,index)=>{
      return(
        <BlogCard 
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


</div> 
)
};

export default ArticleSection;
