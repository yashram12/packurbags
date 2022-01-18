import { useState } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";

const Addtour = (props) => {
  const [newTour, setNewTour] = useState({
    name: "",
    places: "",
  });

  const [selected, setSelected] = useState([]);

  const [err,setErr] = useState([])

  let list = [
    { placeId: '0', name: "Nandi Hills" },
    { placeId: '1', name: "sir Mvit" },
    { placeId: '2', name: "Bangalore Palace" },
    { placeId: '3', name: "Mvit Rocks" },
    { placeId: '4', name: "Cubbon Park" },
    { placeId: '5', name: "Lal Bhag" },
    { placeId: '6', name: "Iskon Temple" },
    { placeId: '7', name: "Doddaladamara" },
  ];

  const handleSubmit = (e) => {
      e.preventDefault();
      //code
      if(selected.length < 2){
        
        setErr(['min 2 places required'])
      }
      else{
        props.onHide();
        setNewTour({
          name: "",
          places: "",
        })
        setSelected([])
        setErr([])
      }
  };

  const handleChange = ({name,value}) => {
      if(name !== 'places')
        setNewTour({...newTour,[name]:value})
  }
  
  // useEffect(()=>{
  //   console.log(selected)
  // },[selected])

  const handleClick = ({id})=>{
    if(selected.includes(id)){
      setSelected(selected.filter(el=>el!==id).map(el=> el))
      setNewTour({...newTour,places:newTour.places.replace(list.filter(el=>el.placeId===id).map(el=>el.name),'').trim()})
    }
    else{
      setSelected([...selected,id])
      setNewTour({...newTour,places:newTour.places+`\t${list.filter(el=>el.placeId===id).map(el=>el.name)}`})
    }
  }

  const onClose = () =>{
    props.onHide();
    setNewTour({
      name: "",
      places: "",
    })
    setSelected([])
    setErr([])
  }

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
          <div>{err.map(el=><p style={{color:'red'}}>{el}</p>)}</div>
          <Container>
            <div className="form-group m-2">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Name of the Tour"
                value={newTour.name}
                autoComplete="off"
                onChange={(e) => handleChange(e.target)}
                required
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="places">Name</label>
              <textarea
                readOnly="readonly"
                name="places"
                type="text"
                className="form-control"
                id="places"
                placeholder="Places in this Tour"
                value={newTour.places}
                autoComplete="off"
                required
              />
            </div>
          </Container>

          <Container className='text-center'>
            {
                list.map((place,i)=>{
                    return(
                    <Row key={place.placeId}>
                        <Col>{place.name}</Col>
                        <Col><Button className='sm' id={place.placeId} onClick={(e)=>{handleClick(e.target)}}>{selected.includes(place.placeId)?'Remove':'Select'}</Button></Col>
                    </Row>
                    )
                })
            }
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          <Button className="btn-success" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default Addtour;
