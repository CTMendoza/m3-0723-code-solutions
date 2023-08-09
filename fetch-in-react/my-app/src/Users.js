/* eslint-disable no-unused-vars -- Remove me */
import React, { useEffect, useState } from 'react';
import UserDetails from './UserDetails';
import User from './User'
import UserCard from './UserCard';
import './Users.css';

export default function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    if(isLoading) {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then((usersData) => {
        setUsers(usersData)
        setIsLoading(false)
      })
      .catch(err=> {
        setError(err)
        setIsLoading(false)
      })
    }
  },[isLoading])

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }
  return (
    <div className="container">
      <UserList users={users} onClick={(user) => setUser(user)} />
      {user && (
        <User userId={user.id} onCancel={() => setUser(undefined)} />
      )}
    </div>
  );
}

function UserList({ users, onClick }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
