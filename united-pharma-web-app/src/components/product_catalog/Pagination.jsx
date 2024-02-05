import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return (
      <>
      <ul className="list-wrap">
                      <li className="prv-next">
                        <a href="blog.html"><i className="fa fa-angle-double-left"></i></a>
                      </li>
                      <li><a href="blog.html">1</a></li>
                      <li><a href="blog.html">2</a></li>
                      <li><a href="blog.html">3</a></li>
                      <li><a href="blog.html" className="current">4</a></li>
                      <li><a href="blog.html">...</a></li>
                      <li><a href="blog.html">8</a></li>
                      <li><a href="blog.html">9</a></li>
                      <li><a href="blog.html">10</a></li>
                      <li className="prv-right">
                        <a href="blog.html"><i className="fa fa-angle-double-right"></i></a>
                      </li>
                    </ul>
        </>
    );
  }
}

export default Pagination;
