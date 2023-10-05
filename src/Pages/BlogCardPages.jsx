import React from "react";
import BlogContents from "../Components/BlogContents";

const BlogCardPages = ({ blogs }) => {
  return (
    <div>
      <BlogContents blogs={blogs} />
    </div>
  );
};

export default BlogCardPages;
