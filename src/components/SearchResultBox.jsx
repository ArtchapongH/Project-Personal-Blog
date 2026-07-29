import { useNavigate } from "react-router-dom";

function SearchResultBox({ suggestion, getNavigatePath }) {
    const navigate = useNavigate();
    
    return (
        <div className="absolute top-full left-0 right-0 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 max-h-80 overflow-y-auto">
            {suggestion && suggestion.length > 0 ? (
                suggestion.map((item) => {
                    const postId = item.id ?? item._id;
                    const navigatePath = getNavigatePath ? getNavigatePath(item) : `/post/${postId}`;
                    return (
                        <button
                            key={postId}
                            className="w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-100 transition text-sm"
                            type="button"
                            onClick={() => navigate(navigatePath)}
                        >
                            {item.title}
                        </button>
                    );
                })
            ) : (
                <div className="px-4 py-3 text-gray-500 text-sm">
                    No results found
                </div>
            )}
        </div>
    );
}

export default SearchResultBox;