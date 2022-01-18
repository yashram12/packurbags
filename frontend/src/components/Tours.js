import {useState} from "react";
import { Container, Row,Col} from "react-bootstrap";
import Cardcomp from "./tours/Cardcomp";
import Addtour from "./tours/Addtour";

const Tours = () => {

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div style={{justifyContent:"center",height:"25vh",backgroundColor:"#c6ecc6",display:"flex",alignItems:"center"}}>
        <h1>Special Tours for you</h1>
      </div>
      <Container
        className="text-center"
        style={{ maxWidth: "none", padding: "4vw" }}
      >
        <Row>
        <Col>
          <span
            onClick={() => setModalShow(true)}
            style={{ float: "right", color: "blue", cursor: "pointer" }}
          >
            +Add
          </span>
        </Col>
        <Addtour show={modalShow} onHide={() => setModalShow(false)}/>
        </Row>
        <Row>
          <Cardcomp/>
          <Cardcomp/>
          <Cardcomp/>
          <Cardcomp/>
          <Cardcomp/>
        </Row>
      </Container>
    </>
  );
};

export default Tours;
