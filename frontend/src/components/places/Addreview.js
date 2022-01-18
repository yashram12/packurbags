import {Modal ,Button} from 'react-bootstrap'
import {useState} from 'react'

const Addreview = (props) => {
    const [newReview,setNewReview] = useState({title:"",desc:"",star:0})

    const handleSubmit =(e) =>{
        e.preventDefault();
        //code on submit
        props.onHide();
        setNewReview({title:"",desc:"",star:0})
    }

    const handleChange =({name,value})=>{   
        setNewReview({...newReview,[name]:value})
    }

    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add REVIEW
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={(e)=>handleSubmit(e)}> 
          <Modal.Body>
            <div className="form-group m-2">
              <label htmlFor="title">Title</label>
              <input
                name="title"
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter Title of the REVIEW"
                value={newReview.title}
                autoComplete='off'
                onChange={(e)=>handleChange(e.target)}
                required
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="desc">Description</label>
              <textarea
                name='desc'
                type="text"
                className="form-control"
                id="desc"
                placeholder="Enter the Description of the REVIEW"
                value={newReview.desc}
                autoComplete='off'
                onChange={(e)=>handleChange(e.target)}
                required
              />
            </div>
            <div className="m-2">
              <label htmlFor="rating">Rating : {newReview.star} star</label><br/>
              <input
                name='star'
                type="range"
                className="custom-range"
                min="0"
                max="5"
                id="rating"
                value={newReview.star}
                onChange={(e)=>handleChange(e.target)}
                required
                style={{backgroundColor:"#198754"}}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <Button className='btn-success' onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </form>
      </Modal>
    )
}

export default Addreview
