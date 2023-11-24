import React from 'react';

const Preferences = () => {
  return (
    <div className="container mt-4">
      <h2 className='text-black'>Preferences</h2>
      <hr />

      <form>
        <div className="form-group p-2">
          <label htmlFor="promotionalEmails">Notification Preferences</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="promotionalEmails"
            />
            <label className="form-check-label" htmlFor="promotionalEmails">
              Receive promotional emails
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="orderUpdates"
            />
            <label className="form-check-label" htmlFor="orderUpdates">
              Receive order updates
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="defaultShippingAddress">Address Preferences</label>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="defaultShippingAddress"
            />
            <label
              className="form-check-label"
              htmlFor="defaultShippingAddress"
            >
              Use default shipping address
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Save Preferences
        </button>
      </form>
    </div>
  );
};

export default Preferences;
