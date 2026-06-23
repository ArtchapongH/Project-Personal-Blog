import BlogCard from "./BlogCard";


function ArticleSection() {
  return (

<div className="w-full max-w-5xl mx-auto p-4 sm:p-6 font-sans bg-white">
  {/* Section Title */}
  <h2 className="text-2xl font-bold text-neutral-800 mb-4 tracking-tight">
    Latest articles
  </h2>

  {/* Container Box */}
  <div className="bg-white border border-neutral-200 p-4 sm:p-2 rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md">
    
    {/* MOBILE VIEW: Stacks Search on top, Dropdown below */}
   

      {/* Category Selector Dropdown */}
     

    {/* DESKTOP VIEW: Inline Row Layout (Hidden on Mobile) */}
   
      {/* Search Input Box */}
      
  </div>


</div> )
};

export default ArticleSection;
