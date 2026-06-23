import BlogCard from "./BlogCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


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
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="javascript">JavaScript</SelectItem>
          <SelectItem value="css">CSS</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* DESKTOP VIEW: Inline Row Layout (Hidden on Mobile) */}
    <div className="hidden sm:flex flex-row items-center justify-between gap-4">
      
      {/* Category Dropdown */}
      <div className="flex items-center gap-1">
        <button className="px-5 py-2 text-sm font-medium text-neutral-800 bg-neutral-200/80 rounded-xl transition-colors">
          Highlight
        </button>
        <button className="px-5 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-800 rounded-xl transition-colors">
          Cat
        </button>
        <button className="px-5 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-800 rounded-xl transition-colors">
          Inspiration
        </button>
        <button className="px-5 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-800 rounded-xl transition-colors">
          General
        </button>
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
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-10">
  
  {/* card 1 */}
  <BlogCard 
    image="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/e739huvlalbfz9eynysc.jpg"
    category="Cat"
    title="Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do"
    description="Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines."
    author="Thompson P."
    date="11 September 2024"
  />
  
  {/* card 2 */} 
   <BlogCard 
    image="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449771/my-blog-post/e739huvlalbfz9eynysc.jpg"
    category="Cat"
    title="Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do"
    description="Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines."
    author="Thompson P."
    date="11 September 2024"
  />
  </div>


</div> 
)
};

export default ArticleSection;
