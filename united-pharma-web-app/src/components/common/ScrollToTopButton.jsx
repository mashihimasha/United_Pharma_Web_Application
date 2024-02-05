import React, { Component } from 'react';


class ScrollToTopButton extends Component {
    
    scrollToTop = () => {
        // Logic to scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // For smooth scrolling, if supported
        });
      };
  render() {

    return (
      <>
        <button className="scroll-top scroll-to-target open" onClick={this.scrollToTop}>
        <i class="fa fa-angle-up" aria-hidden="true"></i>
      </button>
      </>
    );
  }
}

export default ScrollToTopButton;
