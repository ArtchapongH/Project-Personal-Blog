import { Link } from "react-router-dom";
import formatDate from "@/utils/FormatDate";

function BlogCard(props) {
  const postLink = props.postLink ?? `/post/${props.id}`;


  // Helper function to format the date
  /*
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  */

  return (
    <div className="flex flex-col gap-4">
      <Link to={postLink} className="relative h-[212px] sm:h-[360px]">
        <img className="w-full h-full object-cover rounded-md" src={props.image} alt={props.title} />
      </Link>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">{props.category}</span>
        </div>
        <Link to={postLink}>
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {props.title}
          </h2>
        </Link>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {props.description}
        </p>
        <div className="flex items-center text-sm">
          <img className="w-8 h-8 rounded-full mr-2" src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" alt={props.author} />
          <span>{props.author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{formatDate(props.date)}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
