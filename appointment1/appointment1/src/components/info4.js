import React from 'react'
import './info1Style.css'
import { useState } from 'react';
import Axios from 'axios';
import {Route, Link, Router} from 'react-router-dom';
function Info4() {
  const [userName,setUserName]=useState("");
const [reason,setReason]=useState("");
const [email,setEmail]=useState("");
const [submitted,setSubmitted]=useState("Submit");
const add = () =>{
  console.log(userName)
  Axios.post("http://localhost:3001/add", {
    userName : userName,
    reason : reason,
    email : email,
    time : "2pm to 3pm",
  });
  setSubmitted("Submitted");
}
    return(
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">

  
      <div className="container-fluid">
        <a className="navbar-brand" href="#">PCCOE</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      </nav>
      <div className="infoStyle">
      <form> <h6 id ="time">Booking for : 2pm to 3pm</h6>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" id="name_text">Name</label>
        <input type="text" className="form-control" onChange={(event)=>{setUserName(event.target.value)}} id="name"  />
        
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label" id="email_text">Email address</label>
        <input type="text" className="form-control"onChange={(event)=>{setEmail(event.target.value)}} id="email"/>
        
      </div>
      
      <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" id="reason_text">Reason for appointment</label>
  <textarea class="form-control" id="reason" rows="3" onChange={(event)=>{setReason(event.target.value)}} ></textarea>
</div>
<div id="info_text" className="form-text">You will receive an email regarding confirmation.</div>
<Link to ="/"> <button type="button" className="btn btn-primary" id="back" >Back</button></Link>
 <button type="button" className="btn btn-primary" id="sub_btn" onClick={add}>{submitted}</button>   </form>
    </div>
    <div className="footer_custom">
        <h6 id="footer_text">This website is created for 
        official purpose only
        </h6>
      </div>
    </>
    );
}

export default Info4;