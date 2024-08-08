 // src/components/MyBlog.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from './Blogdata';

interface MyBlogProps {
  blogs: Blog[];
}

const MyBlog: React.FC<MyBlogProps> = ({ blogs }) => {
  return (
    <div className=" p-10 max-w-screen-lg mx-auto">
      <h3 className="text-green-500 font-extrabold text-5xl pl-20">
        Mon-chauffeur journey{" "}
      </h3>
      <div className=" pb-10 pt-10 flex flex-wrap sm:grid sm:grid-cols-3  gap-8  ">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={` pb-4 border rounded ${blog.style || ""}`}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover bg-white mb-2 rounded-lg"
            />
            <h2 className="text-xl font-bold p-3 ">{blog.title}</h2>
            <p className="text-gray-700 p-3">{blog.description}</p>
            <Link
              to={`/blog/${blog.id}`}
              className="text-green-500 font-extrabold p-2 mt-3 hover:bg-customGreen hover:text-white  ml-4 bg-white border border-customGreen hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
