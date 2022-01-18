import { useState} from "react";
import Star from '../Star';
import {Container,Row} from 'react-bootstrap'
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";


const Mapcontainer = ({ list }) => {
  const mapStyles = {
    height: "70vh",
    width: "95%",
    margin:"1rem"
  };
  
const [hovered, setHovered] = useState({});


  
  return (
    <LoadScript googleMapsApiKey="AIzaSyCJvaBJZXo3I8tvsLAC6lxANy536KuGtS8">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={list[Math.floor(list.length / 2)].coordinates}
      >
        
        {list.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.coordinates}
              onMouseOver={()=>setHovered(item)}
              onMouseDown={()=>setHovered({})}
            />
          );
        })}
        
        {hovered.coordinates && (
          <InfoWindow position={hovered.coordinates} clickable={true} onCloseClick={()=>{setHovered({})}}>
            <Container>
            <Row><h6>{hovered.name}</h6></Row>
            <Row><Star n={hovered.star} /></Row>
            </Container>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Mapcontainer;
