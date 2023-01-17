import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {

    const [first,setFirst] = useState('');
    const [last,setLast] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(first,last,email);
    }
  return (
    <>
        <div className="sign-up-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="firstName"
              onChange={(e)=>setFirst(e.target.value)} value={first} required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="lastName"
              onChange={(e)=>setLast(e.target.value)} value={last} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="email" 
              onChange={(e)=>setEmail(e.target.value)} value={email}required />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
    </div>
    </>
  )
}

export default Registration