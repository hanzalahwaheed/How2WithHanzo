import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import Appbar from "../components/Appbar";

const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  if (loading) return <>loading...</>;
  return (
    <>
      <Appbar />
      <div className="flex flex-col lg:flex-row p-6 gap-2">
        <div className="w-full lg:w-3/4 flex flex-col gap-1">
          <h1 className="text-2xl lg:text-5xl font-bold">{blog?.title}</h1>
          <p className="text-xs">Published Date: {blog?.publishedDate}</p>
          <p>{blog?.content}</p>
        </div>
        <div className=" flex flex-col w-full lg:w-1/4 border-t-2 border-slate-300">
          <p className="text-xs">Author</p>
          <p className="font-bold text-lg">{blog?.author.name}</p>
        </div>
      </div>
    </>
  );
};

export default Blog;
