import { Image, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Review from "./Review";
import Placeinfo from "./Placeinfo";
import Addreview from "./Addreview";
import Gallery from "./Gallery";
import Mapcontainer from './Mapcontainer'

const Place = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container style={{ minHeight: "74vh", maxWidth: "95vw" }}>
      <Row>
        <Link
          to="/places"
          style={{ margin: "4vh 0", textDecoration: "none", color: "black" }}
        >
          <h6>{"< Back"}</h6>
        </Link>
      </Row>
      <Row>
        <Col lg={6} md={12} style={{ padding: "1rem" }}>
          <Image
            src="https://cdn.s3waas.gov.in/s35751ec3e9a4feab575962e78e006250d/uploads/bfi_thumb/2018071957-olw8m1n2y51kg48fafq5enxd3k9pfk0tjdc0itk422.jpg"
            style={{ width: "100%" }}
            fluid
          />
        </Col>
        <Col lg={6} md={12} style={{ padding: "2rem" }}>
          <h1 style={{ fontSize: "4rem" }}>Nandi Hills</h1>
          <i className="fa fa-map-marker" style={{ fontSize: "1.5rem" }}></i>
          <span style={{ fontSize: "1.5rem" }}>&nbsp;Bangalore</span>
        </Col>
      </Row>
      <Row>
      <Placeinfo
        title="overview"
        desc="Residents of Bangalore have discovered the picturesque natural
            beauty of a hill fortress that is located quite close to the main
            city. Nandi Hills, a small albeit beautiful town, is just 60 km away
            from the city of Bangalore and has emerged as the perfect weekend
            getaway for its people. Even though it is most well-known for its
            viewpoints and its greenery, Nandi Hills is also a popular
            historical fortress that is home to a number of temples, monuments
            and shrines."
      />
      </Row>
     <Row>
     <Placeinfo
        title=" "
        desc="The place was previously used by the famous ruler Tipu Sultan as a
          summer retreat, and several traces of the Sultan’s life and legacy can
          be found in the area. His summer residence can still be found in Nandi
          Hills. The house was called Tashk-e-Jannat, whose painted walls,
          intricate archways, high pillars and artfully crafted ceilings attract
          tourists and visitors even today. Nandi Hills is also home to some
          famous temples and shrines such as the Bhoga Nandeeshwara Temple,
          dedicated to Lord Shiva and his companions- Parvati and Nandi."
      />
     </Row>
      <Row>
      <Placeinfo
        title="point of interests"
        desc="paragliding emple,tippu point,cloudy view"
      />
      </Row>
      <Row className='text-center m-5' >
        <h2>Location</h2>
        <div style={{display:"flex",justifyContent:"center"}}><Mapcontainer/></div>
      
      </Row>
      
      <Row>
        <Gallery/>
      </Row>

      <Row>
        <Col>
          <h4>Review</h4>
        </Col>
        <Col>
          <span
            onClick={() => setModalShow(true)}
            style={{ float: "right", color: "blue", cursor: "pointer" }}
          >
            +Add
          </span>
        </Col>
        <Addreview show={modalShow} onHide={() => setModalShow(false)} />
      </Row>
      <Row>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </Row>
    </Container>
  );
};

export default Place;
