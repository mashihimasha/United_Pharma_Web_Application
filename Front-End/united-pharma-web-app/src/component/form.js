import React, { Component } from 'react';
import '../assets/css/form.css'

class MyForm extends Component {
  render() {
    return (
      <div className="mb-3 col-lg-8 col-md-2 col-sm-4">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        <img src={require('../assets/IMG-20230928-WA0031.jpg')} alt='logo'/>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className='login'></button>
      </div>
    );
  }
}

export default MyForm;
