import {Row,Col} from 'react-bootstrap'

const Placeinfo = ({title,desc}) => {
    return (
        <div>
            <Row>
        <h3>{title}</h3>
      </Row>
      <Row>
        <Col>
          <p>
            {desc}
          </p>
        </Col>
      </Row>
        </div>
    )
}

export default Placeinfo
