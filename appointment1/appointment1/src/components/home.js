import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Info1 from './info1';
import Info2 from './info2';
import Info3 from './info3';
import Info4 from './info4';
import Info5 from './info5';


import {Route, Link, Router} from 'react-router-dom';
import './homeStyle.css';

function Home(params) {
    const [userName,setUserName]=useState("");
const [reason,setReason]=useState("");
const add = () =>{
  console.log(userName)
  Axios.post("http://localhost:3001/add", {
    userName : userName,
    reason : reason
  });
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
        <div className = "Menu">
      
      
      <h1 id = "text2">Book Slots</h1>
      <Link to = "/info1"><button type="button" className="btn btn-danger" id="button1">{">"}</button></Link>
      <Link to = "/info2"> <button type="button" className="btn btn-danger" id="button2">{">"}</button></Link>
      <Link to = "/info3"><button type="button" className="btn btn-danger" id="button3">{">"}</button></Link>
      <Link to = "/info4"><button type="button" className="btn btn-danger" id="button4">{">"}</button></Link>
      <Link to = "/info5"><button type="button" className="btn btn-danger" id="button5">{">"}</button></Link>
        <div className = "slot1">
          <h5 id ="text1">9am to 10am</h5>

        </div>
        <div className = "slot2">
          <h5 id ="text1">10am to 11am</h5>
        </div>
        <div className = "slot3">
          <h5 id ="text1">12pm to 1pm</h5>
        </div>
        <div className = "slot4">
          <h5 id ="text1">2pm to 3pm</h5>
        </div>
        <div className = "slot5">
          <h5 id ="text1">4pm to 5pm</h5>
        </div>
        <h4 id = "text3">Check Appointment' Status</h4>
        <Link to = "/status"><button type="button" className="btn btn-danger" id="button6">{">"}</button></Link>
       
      
      </div>
      <div className="footer_custom">
        <h6 id="footer_text">This website is created for 
        official purpose only
        </h6>
      </div>
      </>
    );
}

export default Home;