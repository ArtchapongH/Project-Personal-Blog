function DeleteArticle() {

    const param = useParams();

    async function deletePost() {
        await axios.delete(`https://blog-post-project-api.vercel.app/post/${param.productId}`);
    };

  return (
    <div className="fixed inset-0 bg-gray-500/70 flex items-center justify-center">
      <div className="relative w-[330px] rounded-xl bg-white shadow-xl px-8 py-7">
        <button className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
          ✕
        </button>

        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Delete article
          </h2>

          <p className="mt-4 text-sm text-gray-500">
            Do you want to delete this article?
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <button className="h-9 px-6 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100">
              Cancel
            </button>

            <button
                onClick={() => deletePost()}
                className="h-9 px-6 rounded-full bg-gray-900 text-sm font-medium text-white hover:bg-black">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteArticle;