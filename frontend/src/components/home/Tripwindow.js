import React from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Tripwindow = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      className="tripContainer"
      style={{ position: "relative", top: "-25vh" }}
    >
      <h2 style={{ margin: "2rem 3rem" }}>Popular Trips</h2>

      <Carousel
        responsive={responsive}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Card style={{ margin: "auto 2vw" }}>
            <Card.Img
              variant="top"
              src="https://www.honeymoonbug.com/blog/wp-content/uploads/2019/01/golden-triangle-tour-banner.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ margin: "auto 2vw" }}>
            <Card.Img
              variant="top"
              src="https://www.honeymoonbug.com/blog/wp-content/uploads/2019/01/golden-triangle-tour-banner.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ margin: "auto 2vw" }}>
            <Card.Img
              variant="top"
              src="https://www.honeymoonbug.com/blog/wp-content/uploads/2019/01/golden-triangle-tour-banner.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ margin: "auto 2vw" }}>
            <Card.Img
              variant="top"
              src="https://www.honeymoonbug.com/blog/wp-content/uploads/2019/01/golden-triangle-tour-banner.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ margin: "auto 2vw" }}>
            <Card.Img
              variant="top"
              src="https://www.honeymoonbug.com/blog/wp-content/uploads/2019/01/golden-triangle-tour-banner.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div
          style={{
            height: "16rem",
            width: "18rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/tours" style={{textDecoration:"none"}}>
            <div
              style={{
                backgroundColor: "#198754",
                borderRadius: "50%",
                width: "3rem",
                height: "3rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <h1
                style={{
                  color: "white",
                  diaplay: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {"+"}
              </h1>
            </div>
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default Tripwindow;
