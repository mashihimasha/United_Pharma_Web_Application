import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";


const BlogPost = ({ title, image, content }) => {
  const [showFullContent, setShowFullContent] = React.useState(false);

  const toggleContentVisibility = () => {
    setShowFullContent(!showFullContent);
  };

  const displayContent = showFullContent ? content : content.split(" ").slice(0, 20).join(" ");

  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{displayContent}</p>
          {content.split(" ").length > 20 && (
            <button className="btn btn-primary mr-2" onClick={toggleContentVisibility}>
              {showFullContent ? "Hide" : "Read More"}
            </button>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default BlogPost;