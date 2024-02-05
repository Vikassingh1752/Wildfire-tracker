import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ event, center, zoom, }) => {
  const [locationinfo, setLocationInfo] = useState(null);
  const makers = event.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({id:ev.id, title:ev.title})}
        />
      );
    }
    

    return null;
  });
  console.log(makers, "makers data");
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDTUz6y-wSZ4V5EcJKdadinrla2uwkkfSA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {makers}
      </GoogleMapReact>
      {locationinfo && <LocationInfoBox info={locationinfo}
      
      />
      }
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3656,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
