import React,{useEffect,useState} from 'react'
import UserCard from './UserCard';

export const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
       
        fetch("https://jsonplaceholder.typicode.com/users/")
  .then(response => response.json())
  .then(json => setUsers(json))
  .catch((err) => console.log(err));     
    }, [ ])
    return (
        <div className="d-flex justify-content-around flex-wrap">
           {
users.map(user => <UserCard user={user}/>)
           } 
        </div>
    )
}
