import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa';
import CreatePostForm from './CreateBlogModal';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MDBIcon } from 'mdb-react-ui-kit';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [postToUpdate, setPostToUpdate] = useState(null);
  const createFormRef = useRef(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/blogs');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };
    fetchPosts();

  // can delete or update successfully the post
  }, [deleteSuccess, updateSuccess]);

  //create a new blog post
  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
    setPostToUpdate(null);
  };

  useEffect(() => {
    if (showCreateForm && createFormRef.current) {
      createFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showCreateForm]);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:3000/blog/${postId}`);
      setDeleteSuccess(true);
      setTimeout(() => setDeleteSuccess(false), 3000);
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  //get data of the selected post
  const handleUpdate = (post) => {
    setPostToUpdate(post);
    setShowCreateForm(true);
  };

  return (
    <div className=" p-4 blog-background ">
      <div className="d-flex justify-content-between align-items-center mb-4 mt-3 ">
        <Link to='/' type="button" className="btn  w-25 p-2" style={{ backgroundColor: '' }}>
          <MDBIcon icon="home"/>
          Home
        </Link>
      </div>

      <div className=" justify-content-between mb-3 mt-2">
        <h2 className='w-100 justify-content-center text-black d-flex '>
          Welcome to the Blog page of United Pharma
        </h2>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {posts.map((post) => (
          <div key={post.post_id} className="col">
            <div className="card h-100 border rounded-3">
              <img src={post.imageUrl} className="card-img-top" alt={post.title} />
              
              <div className="card-body">

                <h5 className="card-title font-bold">{post.title}</h5>
                <p className="card-text" style={{ textAlign: 'justify' }}>{post.content}</p>
                <div className="d-flex justify-content-between">

                  {/* delete */}
                  <button
                    className="btn  btn-success btn-sm w-25 p-2 "
                    style={{ backgroundColor: 'red' }}
                    onClick={() => handleDelete(post.post_id)}
                  >
                    <FaTrash />
                  </button>

                   {/* update */}
                  <button
                    className="btn btn-primary  btn-sm w-25 p-2 "
                    style={{ backgroundColor: 'blue' }}
                    onClick={() => handleUpdate(post)}
                  >
                    <FaEdit />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
            
      <div ref={createFormRef} className='w-100 d-flex justify-content-center'>

        {/* create blog button */}
        <button className="btn btn-success w-25 p-2 m-4" 
        style={{ backgroundColor: 'green' }}
         onClick={toggleCreateForm}>
          <MDBIcon icon="plus" className="m-2" />
          Create Blog
        </button>
      
      </div>
      {showCreateForm && <CreatePostForm ref={createFormRef} closeModal={toggleCreateForm} postToUpdate={postToUpdate} />}

      <Modal show={deleteSuccess || updateSuccess} onHide={() => { setDeleteSuccess(false); setUpdateSuccess(false); }}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {deleteSuccess && 'Post deleted successfully!'}
          {updateSuccess && 'Post updated successfully!'}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { setDeleteSuccess(false); setUpdateSuccess(false); }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
      {/* FAQ button */}
      <div className='w-100 d-flex justify-content-center ' >
        <Link to="/faq" className="btn btn-success w-25 p-2 m-4"  style={{ backgroundColor: 'green' }}>
          Go to FAQ
          <MDBIcon className='m-2 p-0' icon='question-circle'/>
        </Link>
      </div>

       {/* chat with us button */}
      <Link to='/chat' style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <button className="btn w-100 p-3 btn-primary rounded-8" style={{ backgroundColor: '' }} >
          <MDBIcon icon="comments" className="m-2 p-0" />
          Chat with US
        </button>
      </Link>
    </div>
  );
};

export default BlogList;
