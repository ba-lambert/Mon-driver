 // src/components/SingleBlog.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Blog, blogs as blogData } from '../Main/Blogdata';

const SingleBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
 
const blog: Blog | undefined = blogData.find((blog) => blog.id === id);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className={` p-10 max-w-screen-lg mx-auto ${blog.style || ""}`}>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-96 max- h-full object-cover rounded-lg mb-4"
      />
      <p className="text-green-700 font-bold text-xl mb-4">
        {blog.description}
      </p>
      <div className="prose pb-16">
        <p>{blog.content}</p>
      </div>
      <div className=" flex flex-wrap sm:grid sm:grid-cols-3 gap-3">

        <img
          src={blog.secondaryImage}
          alt={blog.title}
          className="w-96 max- h-full object-cover rounded-lg mb-4"
        />
        <img
          src={blog.tertiaryImage}
          alt={blog.title}
          className="w-96 max- h-full object-contain rounded-lg mb-4"
        />
        <img
          src={blog.image}
          alt={blog.title}
          className="w-96 max- h-full  object-cover rounded-lg mb-4"
        />
      </div>
      <div className="prose pb-16">
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
