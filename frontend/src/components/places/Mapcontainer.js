import React from 'react';
import { GoogleMap, LoadScript ,Marker} from '@react-google-maps/api';

const Mapcontainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "80%"};
  
  const item ={
      name:'Nandi Hills',
      location:{
          lat:13.3702,
          lng:77.6835
      }
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCJvaBJZXo3I8tvsLAC6lxANy536KuGtS8'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={item.location}>
            <Marker key={item.name} position={item.location}/>
     </GoogleMap>
     </LoadScript>
  )
}

export default Mapcontainer;