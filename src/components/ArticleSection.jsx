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
    <div className="flex flex-col gap-4 sm:hidden">
      {/* Search Input */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full px-4 py-3 pr-10 text-[15px] text-neutral-700 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-400 placeholder-neutral-500 shadow-sm"
        />
        {/* Search Icon */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      {/* Category Selector Dropdown */}
      <div>
        <label className="block text-sm font-medium text-neutral-500 mb-1.5 pl-0.5">Category</label>
        <div className="relative">
          <select className="w-full appearance-none px-4 py-3 pr-10 text-[15px] font-medium text-neutral-700 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-400 shadow-sm">
            <option>Highlight</option>
            <option>Cat</option>
            <option>Inspiration</option>
            <option>General</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
            <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    {/* DESKTOP VIEW: Inline Row Layout (Hidden on Mobile) */}
    <div className="hidden sm:flex flex-row items-center justify-between gap-4">
      {/* Category Tabs */}
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
      <div className="relative w-72">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-full px-4 py-2.5 pr-10 text-sm text-neutral-700 bg-white border border-transparent rounded-xl focus:outline-none focus:border-neutral-300 placeholder-neutral-400 shadow-sm"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>
    </div>

  </div>
</div> )
};

export default ArticleSection;
