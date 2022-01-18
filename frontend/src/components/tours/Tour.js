import { Carousel, Container ,Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import Mapcontainer from "./Mapcontainer";

const Tour = () => {
    const list = [
        {placeId:0,name:"Nandi Hills",coordinates:{lat:13.3702,
        lng:77.6835}},
        {placeId:1,name:"devanahalli palace",coordinates:{lat:13.243787,lng:77.7172987},star:4},
        {placeId:2,name:"bangalore palcae",coordinates:{lat:12.9988,lng:77.5921},star:3},
        {placeId:3,name:"lalbagh botnical garden",coordinates:{lat:12.9507,lng:77.5848},star:2},
        {placeId:4,name:"bannerughatta botnical park",coordinates:{lat:12.7986,lng:77.5678},star:1},
        {placeId:5,name:"sivagange falls",coordinates:{lat:13.1681,lng:77.2222},star:5},
        {placeId:6,name:"White Rocks",coordinates:{lat:13.1510,lng:77.6100},star:4},
    ]

    navigator.geolocation && navigator.geolocation.getCurrentPosition((pos)=>{
      list.push({placeId:-1,name:"My Location",coordinates:{lat:pos.coords.latitude,lng:pos.coords.longitude},star:-1})
      console.log(list)

    })

  return (
    <div style={{minHeight:'70vh'}}>
      <Link
        to="/tours"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          margin: "1vw",
          textDecoration: "none",
          color: "black",
        }}
      >
        <h6>{"< Back"}</h6>
      </Link>
      <Container>
        <Row>
          <Col xl={6} s={12}>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.s3waas.gov.in/s35751ec3e9a4feab575962e78e006250d/uploads/bfi_thumb/2018071957-olw8m1n2y51kg48fafq5enxd3k9pfk0tjdc0itk422.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>First slide label</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.s3waas.gov.in/s35751ec3e9a4feab575962e78e006250d/uploads/bfi_thumb/2018071957-olw8m1n2y51kg48fafq5enxd3k9pfk0tjdc0itk422.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.s3waas.gov.in/s35751ec3e9a4feab575962e78e006250d/uploads/bfi_thumb/2018071957-olw8m1n2y51kg48fafq5enxd3k9pfk0tjdc0itk422.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col className='' xl={6} sm={12}>
              <div className="m-5">
                <h1 >Place Name</h1>
                <div><i className="fa fa-sun-o"></i><span>{" "}3 Days</span><span>{" | "}</span><i className="fa fa-moon-o"></i><span>{" "}3 Nights</span></div>

              </div>
          </Col>
        </Row>
      </Container>
                <div className="m-5 "><h2>Places you have in this Tour</h2></div>
     <Container style={{maxWidth:'100vw'}}>
             <Row >
             <Col xl={4} lg={5} sm={12}>
                {
                    list.map((el,i)=>{
                        return <Row className="text-center" key={el.placeId}>
                                <h4>{el.name}</h4>
                                {(list.length-1) !== i && <div className='text-center'><div style={{fontWidth:"10%",fontWeight:'100',fontSize:'30px'}}>V</div></div>}
                            </Row>
                    })
                }
             </Col>
             <Col >
               <Mapcontainer list={list} />  
             </Col>
             </Row>
     </Container>
    
    </div>
  );
};

export default Tour;
