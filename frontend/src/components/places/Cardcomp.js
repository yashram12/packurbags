import { Card, Col , Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import Star from '../Star'


const Cardcomp = ({place}) => {

  return (
    <Col
      xl={3}
      lg={3}
      sm={6}
      xs={12}
      style={{ padding: "1rem 1rem" }}
    >
      <Link to={`/place/${place.PLACE_ID}`} style={{textDecoration:"none",color:"black"}}>
        <Card>
          <Card.Img
          style={{height:'10rem '}}
            variant="top"
            src={place && place.IMG}
          />
          <Card.Body>
            <Card.Title style={{display:'flex',justifyContent:'flex-start'}}>{place && place.PLACE_NAME}</Card.Title>
            <Card.Text>
            <Row>
              <Col style={{display:'flex',justifyContent:"flex-start"}}>
                <div >{place && place.LOCATION}</div>
              </Col>
              <Col style={{display:'flex',justifyContent:"flex-end"}}>
                <Star n={place && place.RATING}/>
              </Col>
            </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Cardcomp;
