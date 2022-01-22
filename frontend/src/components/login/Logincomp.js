import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Logincomp = ({ handlereg }) => {
  const [user, setUser] = useState({ email: "", pass: "" });

  const [err, setErr] = useState("");

  const history = useNavigate();

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/v1/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        username: user.email,
        password: user.pass,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if(json.status === 'success'){
          localStorage.setItem('pubtoken',json.token)
          history('/')
          alert(json.message)
        }
        else{
          setErr("Invalid Credentials...")
          setUser({ email: "", pass: "" })
        }
      });
  };

  return (
    <div>
      <Row style={{}}>
        <h1>Login</h1>
      </Row>
      <Row>
        <Col lg={4} md={5} sm={8} xs={12}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                autoComplete="off"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                autoComplete="off"
                name="pass"
                value={user.pass}
                onChange={handleChange}
                required
              />
            </div>
            <div
              style={{
                color: "gainsboro",
                marginTop: "1vh",
                fontSize: "14px",
                marginBottom: "2rem",
              }}
            >
              {err}
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>{" "}
        </Col>
      </Row>
      <Row style={{ margin: "1vh 0" }}>
        <Button
          onClick={handlereg}
          variant="danger"
          style={{ width: "4.8rem" }}
        >
          Register
        </Button>
      </Row>
    </div>
  );
};

export default Logincomp;
