import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cardcomp = () => {
  const openPlace = () => {};

  return (
    <Col
      onClick={openPlace}
      xl={3}
      lg={3}
      sm={6}
      xs={12}
      style={{ padding: "1rem 1rem" }}
    >
      <Link to="/place" style={{textDecoration:"none",color:"black"}}>
        <Card>
          <Card.Img
            variant="top"
            src="https://www.honeymoonbug.com/blog/wp-content/uploads/2019/01/golden-triangle-tour-banner.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Cardcomp;
