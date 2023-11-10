import React from 'react';
import Blog from './components/Blog/blog';
import StickyHeader from '../common/Header';

const  blogPage =  () => (
  <>
  <StickyHeader/>
    <h1 className="text-center items-center mb-4 pt-3 ">United Pharma</h1>
    <Blog/>
  </>
)

export default blogPage;