import {useState , useEffect} from 'react'
import { Carousel } from 'react-carousel-minimal';

const Gallery = ({pid})=> {

  const [images, setImages] = useState([{}]);

  useEffect(() => {
    fetch(`/api/v1/images/${pid}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.status === "success") setImages(json.data);
      })
      .catch((e) => console.log(e));

      return () => {
        setImages([{}]); 
      };

  }, [pid]);
  
  const captionStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
  }
  return (
    <div style={{marginBottom:'6rem'}}>
      <div style={{ textAlign: "center" }}>
        <h2>Image Gallery</h2>
        <div style={{
            display:'flex',
            justifyContent:'center',
          padding: "0 20px"
        }}>
          <Carousel
            data={images}
            time={6000}
            width="80vw"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="gainsboro"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100vw",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;