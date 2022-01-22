import {Link} from 'react-router-dom'
import {Card ,Col} from 'react-bootstrap'

const Cardcomp = ({trip}) => {
    return (
            <Col xl={3} lg={3} sm={6} xs={12} style={{ padding: "1rem 1rem"}}>
            <Link to={`/tour/${trip.TRIP_ID}`} style={{textDecoration:"none",color:'black'}}>
              <Card>
                <Card.Img
                  style={{height:"10rem"}}
                  variant="top"
                  src={trip && trip.IMG}
                />
                <Card.Body>
                  <Card.Title>{trip && trip.TRIP_NAME}</Card.Title>
                  <Card.Text>
                    {trip && trip.TIME} Days
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
    )
}

export default Cardcomp
