import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BannerLeaves from "../../../../components/common/BannerLeaves.js";
import BlogPost from "../../../../pages/Blog/components/Blog/BlogPost.js";
import blogData from "../../../../pages/Blog/components/Blog/blogData.js";
import BlogCreationPage from "../../blogCreate.jsx";

function Blog() {
  return (
    <>
      <BannerLeaves />
      <div className="container mt-4">
        <div className="row">
          {blogData.map((props) => (
            <BlogPostContainer key={props.id} {...props} />
          ))}
        </div>
      </div>
    </>
  );
}

const BlogPostContainer = ({ id, title, image, content }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContentVisibility = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <BlogPost
      key={id}
      title={title}
      image={image}
      content={content}
      showFullContent={showFullContent}
      toggleContentVisibility={toggleContentVisibility}
    />
  );
};

export default Blog;
