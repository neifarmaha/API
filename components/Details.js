import React from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Details = ({ match }) => {
    const [user, setUser] = useState({})
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${match.param.id}`)
    .then(res=> setUser(res.data))
    .catch(err=> console.log(err))
  }, [match]);

  return (
    <Card border="success" style={{ width: "16rem", margin: "20px" }}>
      <span className="profiel">{user.name[0]}</span>

      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </Card.Text>
        <Link to="/"> 
        <Button className="detail">Go Back</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Details;
