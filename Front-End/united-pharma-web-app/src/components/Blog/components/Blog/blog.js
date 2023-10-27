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
          {blogData.map((props) => (
            <>
              <BlogPost
                key={props.id}
                title={props.title}
                image={props.image}
                content={props.content}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog;

