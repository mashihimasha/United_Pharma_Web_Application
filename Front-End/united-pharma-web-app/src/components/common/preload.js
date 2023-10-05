import React, { Component } from 'react';

class Preloader extends Component {
  render() {
    return (
      <div id="preloader" style={{ display: 'none' }}>
        <div className="tg-cube-grid">
          {Array.from({ length: 9 }, (_, index) => (
            <div key={`cube${index + 1}`} className={`tg-cube tg-cube${index + 1}`}></div>
          ))}
        </div>
      </div>
    );
  }
}

export default Preloader;
