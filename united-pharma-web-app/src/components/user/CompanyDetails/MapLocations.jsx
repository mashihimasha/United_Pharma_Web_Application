import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const StoreLocator = ({ google }) => {

  const markers = [
    { lat: 6.91923225077734, lng: 79.87356559437637, location: 'Borella' },
    { lat: 6.788439780894895, lng: 79.88409657049078, location: 'Panadura' },
    { lat: 6.562643405650301, lng: 79.96875569251927, location: 'Kalutara' },
    { lat: 6.1328289100186, lng: 81.12729819251635, location: 'Hambantota' },
    { lat: 5.950495685661914, lng: 80.54963266367885, location: 'Matara' },
    { lat: 6.067320186560172, lng: 80.22247208093897, location: 'Karapitiya' },
    { lat: 6.058934099202252, lng: 80.19900775672166, location: 'Galle' },
    { lat: 6.054325113440889, lng: 80.19085384109685, location: 'Galle' },
    { lat: 6.036656970655649, lng: 80.21445728106339, location: 'Galle' },
    { lat: 6.72011025664788, lng: 79.9081978674848, location: 'United Health Mate' },
  ];

  return (
    <div className='container storelocator'>
      <Map
        google={google}
        zoom={8}
        initialCenter={{
            lat: 7.52852759950006, 
            lng: 80.3815729024584,
        }}
        className="position-static w-75 h-100 mt-5"
      >
        {markers.map((marker) => (
          <Marker
            position={{ lat: marker.lat, lng: marker.lng }}
            key={marker.id}
          />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyABhTIqW7yOVl4STlW3kbkthGcqbLFB9VU',
})(StoreLocator);
