import React from 'react';
import Blog from './components/Blog/blog';
import CreateBlogModal from './components/CreateBlogModal';

const  blogPage =  () => (
  <>
    <h1 className="text-center items-center mb-4 pt-3 ">United Pharma</h1>
    <CreateBlogModal/>
    <Blog/>
  </>
)

export default blogPage;