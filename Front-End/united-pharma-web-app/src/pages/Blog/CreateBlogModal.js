import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreatePostForm = ({ closeModal, postToUpdate }) => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });

  //return data to update  
  useEffect(() => {
    if (postToUpdate) {
      setPostData({
        title: postToUpdate.title || '',
        content: postToUpdate.content || '',
        imageUrl: postToUpdate.imageUrl || '',
      });
    }
  }, [postToUpdate]);

  //handle the change in update 
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  //handle the error when submitting 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (postToUpdate) {
       // update the post if exists
        await axios.put(`http://localhost:3000/blog/${postToUpdate.post_id}`, postData);
      } else {
        // create a new post
        await axios.post('http://localhost:3000/blog', postData);
      }

      closeModal();
    } catch (error) {
      console.error('Error creating/updating blog:', error);
    }
  };

  return (
    
    <div className="container mt-4 mb-4  w-50 border border-2  border-success ">
      <h2 className='d-flex mt-3 text-dark  justify-content-center'>{postToUpdate ? 'Update Post' : 'Create Post'}</h2>
      <form className='m-5 ' onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control  rounded-5"
            id="title"
            name="title"
            value={postData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control rounded-5"
            id="content"
            name="content"
            value={postData.content}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control rounded-5"
            id="imageUrl"
            name="imageUrl"
            value={postData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-25 p-3 d-flex justify-content-center">
          {postToUpdate ? 'Update Post' : 'Create Post'}
        </button>
      </form>
    </div>

  );
};

export default CreatePostForm;