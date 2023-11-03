import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/assets/css/UserAccount.css';

function UserAccountPage() {
    return (
        <div className="user-account container-fluid py-5 mh-100">
            <div className="row">
                <div className="col-md-3">
                    <ul className="nav flex-column nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" id="user-info-tab" data-toggle="pill" href="#user-info">Settings</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="order-history-tab" data-toggle="pill" href="#order-history">Order History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="account-settings-tab" data-toggle="pill" href="#account-settings">Account Settings</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <div className="tab-content p-2 m-2">
                        <div className="tab-pane fade show active" id="user-info">
                            <div className='row p-1'>
                                <div className="profile-container col-md-6 m-2">
                                    <div className="profile-picture">
                                        <img src={require('../components/assets/img/banner/banner_shape01.png')} alt="User Profile" />
                                    </div>
                                </div>
                                <div className='col-md-6 align-middle'><h2>Himashya Minoli</h2></div>
                            </div>
                            <p>Email: john.doe@example.com</p>
                            <p>Address: 123 Main St, City, Country</p>
                        </div>
                        <div className="tab-pane fade" id="order-history">
                            <h2>Order History</h2>
                            <ul>
                                <li>
                                    <p>Order #001</p>
                                    <p>Date: Jan 1, 2023</p>
                                    <p>Total: $100.00</p>
                                </li>
                                <li>
                                    <p>Order #002</p>
                                    <p>Date: Feb 15, 2023</p>
                                    <p>Total: $75.50</p>
                                </li>
                                {/* More order history items here */}
                            </ul>
                        </div>
                        <div className="tab-pane fade" id="account-settings">
                            <h2>Account Settings</h2>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" value="John Doe" />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" value="john.doe@example.com" />
                            <label htmlFor="address">Address:</label>
                            <textarea id="address">123 Main St, City, Country</textarea>
                            <button className="btn btn-primary update-button">Update Information</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAccountPage;
