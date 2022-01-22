import {Col,Card} from 'react-bootstrap'
import Star from '../Star'

const Review = ({data}) => {
    
    return (
        <Col lg={3} md={4} sm={6} xs={12} >
        <Card style={{margin:"1rem auto"}}>
          <Card.Body>
            <div>
              <div style={{display:'flex',alignItems:"center",justifyContent:"flex-start"}}>
                <div style={{backgroundColor:"gray",borderRadius:'50%',width:'1.5rem',height:'1.5rem',margin:"0 0.5rem"}} className='text-center'><i className="fa fa-user" style={{color:"white",padding:'0.2rem',fontSize:'1.2rem'}}/></div>   
                <h6>{data && data.FNAME}</h6>
              </div>
              <Star n={data && data.RATING} />
              <h6>{data && data.RTITLE}</h6>
              <p>{data && data.RDESC}</p>
            </div>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Review
