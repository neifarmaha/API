import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserCard = ({user}) => {
  console.log(user);
  return (
    <Card border="success" style={{ width: "16rem", margin:"20px" }}>
     
          <span className="profiel">{user.name[0]}</span>
     
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
           <p>{user.username}</p>
           <p>{user.email}</p>
           <p>{user.phone}</p>
        </Card.Text>
        <Link to={`/profiel/${user.id}`}> 
        <Button className="detail">Details</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
