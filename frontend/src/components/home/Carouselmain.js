import React from "react";
import { Carousel } from "react-bootstrap";

const Carouselmain = () => {
  return (
    <div>
      <Carousel style={{ zIndex: "10"}}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images.thrillophilia.com/image/upload/s--JpznBEvR--/c_fill,g_center,h_642,q_auto,w_1280/f_auto,fl_strip_profile/v1/images/photos/000/198/844/original/1584962791_shutterstock_1302976795.jpg.jpg"
            alt="First slide"
            height="300vh"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://images.thrillophilia.com/image/upload/s--G1eoWmim--/c_fill,h_775,q_auto,w_1600/f_auto,fl_strip_profile/v1/images/photos/000/106/844/original/1602054982_shutterstock_1126257356.jpg.jpg?1602054982"
            alt="Second slide"
            height="300vh"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://img.traveltriangle.com/attachments/pictures/874340/original/India_Cover.jpg?tr=w-1291,h-332"
            alt="Third slide"
            height="300vh"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carouselmain;
