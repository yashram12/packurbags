import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

const Tripcard = () => {
    return (
        <div>
            <Link to="/tour" style={{textDecoration:"none",color:"black"}}>
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
            </Link>
        </div>
    )
}

export default Tripcard
