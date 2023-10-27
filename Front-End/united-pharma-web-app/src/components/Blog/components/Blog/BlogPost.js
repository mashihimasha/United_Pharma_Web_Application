import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import BlogModal from "./BlogModal";

export default function BlogPost({ id, title, image, content}) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <img src={image} />
          <p className="card-text">{content}</p>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Read More
          </button>
          {/*Send data to blog modal(POP up window) */}
          <BlogModal 
            //id="myModal"
            key={id}
            title={title}
            image={image}
            content={content}
          />
        </div>
      </div>
    </div>
  );
}
