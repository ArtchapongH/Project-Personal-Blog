function SearchResultBox({ titles }) {
    return (
        <div className="absolute top-full left-0 right-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 max-h-80 overflow-y-auto">
            {titles && titles.length > 0 ? (
                titles.map((title, index) => (
                    <button
                        key={`search-result-${index}-${title.substring(0, 20)}`}
                        className="w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-100 transition text-sm"
                        type="button"
                    >
                        {title}
                    </button>
                ))
            ) : (
                <div className="px-4 py-3 text-gray-500 text-sm">
                    No results found
                </div>
            )}
        </div>
    );
}

export default SearchResultBox;