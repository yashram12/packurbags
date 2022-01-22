import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const Mapcontainer = ({ name, coords }) => {
  const [hovered, setHovered] = useState(false);

  
  const mapStyles = {
    height: "80vh",
    width: "90%",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCJvaBJZXo3I8tvsLAC6lxANy536KuGtS8">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={coords && coords}
        onMouseDown={()=>setHovered(false)}
      >
        <Marker
          key={name && name}
          position={coords && coords}
          onMouseOver={() => setHovered(true)}
          onMouseDown={() => setHovered(false)}
        />
        {hovered && (
          <InfoWindow
            position={coords && coords}
            clickable={true}
            onCloseClick={() => {
              setHovered(false);
            }}
          >
            <h6>{name && name}</h6>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapcontainer;
