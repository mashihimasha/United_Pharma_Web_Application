import React, { Component } from 'react';
import ProfileForm from '../components/user/ProfileForm';

class UserProfile extends Component {
  render() {
    return (
      <div id="page-content-wrapper">
        {/* nav-tab */}
        <nav className="navbar navbar-expand-lg navbar-black bg-black justify-content-center">
          <ul className="nav flex-column nav-pills tab mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link text-light" data-toggle="tab" href="#profile">
                Profile <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" data-toggle="tab" href="#settings">
                Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" data-toggle="tab" href="#payments">
                Payments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" data-toggle="tab" href="#billing">
                Billing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" data-toggle="tab" href="#preferences">
                Preferences
              </a>
            </li>
          </ul>
        </nav>
        <div className="tab-content py-3 mb-5">
          {/* Profile Section */}
          <div className="container-fluid tab-pane active" id="profile">
            {/* ... (Profile content) */}
            <ProfileForm/>
          </div>

          {/* Settings Section */}
          <div className="container-fluid tab-pane fade" id="settings">
            {/* ... (Settings content) */}
          </div>

          {/* Payments Section */}
          <div className="container-fluid tab-pane fade" id="payments">
            {/* ... (Payments content) */}
          </div>

          {/* Billing Section */}
          <div className="container-fluid tab-pane fade" id="billing">
            {/* ... (Billing content) */}
          </div>

          {/* Preferences Section */}
          <div className="container-fluid tab-pane fade" id="preferences">
            {/* ... (Preferences content) */}
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
