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
        //set the data from the backend to the posts array
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, [deleteSuccess, updateSuccess]);

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

  const handleUpdate = (post) => {
    setPostToUpdate(post);
    setShowCreateForm(true);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4 mt-3">
        <Link to='/' type="button" className="btn btn-success w-25 p-1">
          <MDBIcon icon="home"/>
          Home
        </Link>
      </div>

      <div className=" justify-content-between mb-3">
        <h2 className='w-100 justify-content-center d-flex text-dark'>
          Welcome to the Blog page of United Pharma
        </h2>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {posts.map((post) => (
          //key value
          <div key={post.post_id} className="col">
            <div className="card h-100 border rounded">
              <img src={post.imageUrl} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <div className="d-flex justify-content-between">
                  {/* delete button  */}
                  <button
                    className="btn  btn-success btn-sm w-25 p-2 "

                    style={{position:'fixed-bottom', backgroundColor: 'red' }}
                    onClick={() => handleDelete(post.post_id)}
                  >
                    <FaTrash />
                  </button>
                  {/* edit button */}
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
            
          {/* create blog button   */}

      <div ref={createFormRef} className='w-100 d-flex justify-content-center'>
        <button className="btn btn-success w-25 p-2 m-4" onClick={toggleCreateForm}>
          <MDBIcon icon="plus" className="m-2" />
          Create Blog
        </button>
      </div>
      {showCreateForm && <CreatePostForm ref={createFormRef} closeModal={toggleCreateForm} postToUpdate={postToUpdate} />}



          {/* pop up model */}
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
{/* go to faq button */}
      <div className='w-100 d-flex justify-content-center ' >
        <Link to="/faq" className="btn btn-success w-25 p-2 m-4" variant="primary"
        style={{ backgroundColor: 'green' }}>
          Go to FAQ
        <MDBIcon className='m-2 p-0' icon='question-circle'/>
        </Link>
      </div>
    </div>
  );
};

export default BlogList;
