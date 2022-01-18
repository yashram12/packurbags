import { Modal, Button, Container,Row,Col } from "react-bootstrap";
import { useState } from "react";

const Addplace = (props) => {
  const [newPlace, setNewPlace] = useState({
    imgSrc: "",
    name: "",
    location: "",
    coordinates: { lat: 0, lgn: 0 },
    data: [{ title0: "", desc0: "" }],
    star: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //code on submit
    props.onHide();
    setNewPlace({
      imgSrc: "",
      name: "",
      location: "",
      coordinates: { lat: 0, lgn: 0 },
      data: [{ title0: "", desc0: "" }],
      star: 0,
    });
  };

  let temp, tempnametitle, tempnamedesc;

  const handleChange = ({ name, value }) => {
    if (name.slice(0, 5) === "title" || name.slice(0, 4) === "desc") {
      temp = newPlace.data;
      temp[parseInt(name.slice(-1))][name] = value;
      setNewPlace({ ...newPlace, data: temp });
    } else if (name === "lat" || name === "lgn") {
      setNewPlace({
        ...newPlace,
        coordinates: { ...newPlace.coordinates, [name]: value },
      });
    } else {
      setNewPlace({ ...newPlace, [name]: value });
    }
  };

  const addcontent = () => {
    tempnametitle = `title${newPlace.data.length}`;
    tempnamedesc = `desc${newPlace.data.length}`;
    setNewPlace({
      ...newPlace,
      data: [...newPlace.data, { [tempnametitle]: "", [tempnamedesc]: "" }],
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Add PLACE</Modal.Title>
      </Modal.Header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Modal.Body>
          <Container>
            <div className="form-group m-2">
              <label htmlFor="imgSrc">imgSrc</label>
              <input
                name="imgSrc"
                type="text"
                className="form-control"
                id="imgSrc"
                placeholder="Image Source"
                value={newPlace.imgSrc}
                autoComplete="off"
                onChange={(e) => handleChange(e.target)}
                required
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Name of the place"
                value={newPlace.name}
                autoComplete="off"
                onChange={(e) => handleChange(e.target)}
                required
              />
            </div>

            <div className="form-group m-2">
              <label htmlFor="location">location</label>
              <input
                name="location"
                type="text"
                className="form-control"
                id="location"
                placeholder="Location"
                value={newPlace.location}
                autoComplete="off"
                onChange={(e) => handleChange(e.target)}
                required
              />
            </div>
          </Container>

          <Container>
            {newPlace.data.map((ele, i) => {
              return (
                <div className="mt-5" key={i}>
                  <div className="form-group m-2">
                    <input
                      className="form-control"
                      type="text"
                      name={`title${i}`}
                      placeholder="Title of Content"
                      autoComplete="off"
                      value={newPlace.data[i].title}
                      onChange={(e) => handleChange(e.target)}
                    />
                  </div>
                  <div className="form-group m-2">
                    <textarea
                      className="form-control"
                      type="text"
                      name={`desc${i}`}
                      placeholder="Content"
                      autoComplete="off"
                      value={newPlace.data[i].desc}
                      onChange={(e) => handleChange(e.target)}
                    />
                  </div>
                </div>
              );
            })}
          </Container>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <span className="me-4" style={{cursor:"pointer",color:"blue"}} onClick={() => addcontent()}>+ Add more Content</span>
          </div>

          <Container>
              <Row className="ms-3">
                  Co-Ordinates
              </Row>
            <Row>
              <Col>
                <div className="form-group m-2">
                    <label htmlFor='lat'>Latitude</label>
                  <input
                    name="lat"
                    type="number"
                    step="0.0000001"
                    id='lat'
                    className="form-control"
                    placeholder="Latitude"
                    value={newPlace.coordinates.lat}
                    autoComplete="off"
                    onChange={(e) => handleChange(e.target)}
                  />
                </div>
              </Col>
              <Col>
                <div className="form-group m-2">
                    <label htmlFor='lgn'>Longitude</label>
                  <input
                    name="lgn"
                    type="number"
                    id='lgn'
                    step="0.0000001"
                    className="form-control"
                    placeholder="Longitude"
                    value={newPlace.coordinates.lgn}
                    autoComplete="off"
                    onChange={(e) => handleChange(e.target)}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Button className="btn-success" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default Addplace;
