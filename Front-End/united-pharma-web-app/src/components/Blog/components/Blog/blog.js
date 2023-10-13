import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import BannerLeaves from "../../../common/BannerLeaves";
import BlogPost from "./BlogPost";
import blogData from "./blogData";

function Blog() {
  return (
    <>
      <BannerLeaves />
      <div className="container mt-4">
        <div className="row">
          {blogData.map((post) => (
            <>
              <BlogPost
                key={post.id}
                title={post.title}
                image={post.image}
                content={post.content}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;

