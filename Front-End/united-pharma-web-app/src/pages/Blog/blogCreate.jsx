import React, { useState } from 'react';

const BlogCreationPage = () => {
  const [title, setTitle] = useState('');
  const [contents, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddPost = () => {
    fetch('http://localhost:3000/blog', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, contents, imageUrl }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        //reset the content of the form 
        setTitle('');
        setContent('');
        setImageUrl('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h1>Create a New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={image}
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            id="content"
            rows="8"
            value={contents}
            onChange={handleContentChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogCreationPage;