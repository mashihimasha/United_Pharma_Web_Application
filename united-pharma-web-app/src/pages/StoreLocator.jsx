import React from 'react';
import MapLocations from '../components/user/CompanyDetails/MapLocations';

const StoreLocator = ({  }) => {
  const addresses = [
    { address: '1055/3 Maradana Rd, Colombo 08', location: 'Borella' },
    { address: '1055/3 Maradana Rd, Colombo 08', location: 'Panadura' },
    { address: '1055/3 Maradana Rd, Colombo 08', location: 'Kalutara' },
    { address: '1055/3 Maradana Rd, Colombo 08', location: 'Hambantota' },
    { address: '1055/3 Maradana Rd, Colombo 08', location: 'Matara' },
    { address: '1055/3 Maradana Rd, Colombo 08', location: 'Karapitiya' },
    { address: '1055/3 Maradana Rd, Colombo 08', location: 'Galle' },
    { address: '1055/3 Maradana Rd, Colombo 08', location: 'Galle' },
    { address: '1055/3 Maradana Rd, Colombo 08', location: 'Galle' },
    { address: '1055/3 Maradana Rd, Colombo 08', location: 'United Health Mate' },
  ];
  return (
    <div className="container">
      <div className="d-flex flex-column flex-wrap">
        <div>
          {/* Map Section */}
          <MapLocations />
        </div>
        <div className="d-flex align-self-end">
          {/* Address List Section */}
          <div className="mt-1">
            <div className='flex-row flex-wrap w-100 '>
              {addresses.map((addresses, index) => (
                <div key={index} className="card mb-4 mx-1 border-0 shadow-lg h-25">
                  <div className="card-body text-black fw-bold">
                    <h5 className="card-title small">{addresses.location}</h5>
                    <p className="card-text text-dark small"><i class="text-success fa fa-map-marker" aria-hidden="true"></i> {addresses.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StoreLocator;