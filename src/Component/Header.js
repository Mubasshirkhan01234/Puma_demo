import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import axios from 'axios';

const Header = () => {

  useEffect(() => {

    geolocation();

}, []);

  // Geolocation
  const geolocation = () => {
    let x = document.getElementById('temperature');
    let y = document.getElementById('location');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerText = "Location Not Found";
    }

    function showPosition(data) {
      console.log(data);
      let lat = data.coords.latitude;
      let lon = data.coords.longitude;

      const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
      fetch(url, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let cityName = data.city.name;
          let temp = data.list[0].temp.day + "°C";
          x.innerText = `${temp}`;
          y.innerText = `${cityName}`;
        });
    }
  };

  // Dark-light mode
  const toggleDarkMode = () => {
    const toggler = document.getElementById("darkModeToggle");
    document.body.classList.toggle("dark");
    toggler.classList.toggle("dark");
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light pb-0 pt-0 darknav mt-3">
          <div className="container-fluid darknav">
          <Link to="/" className='navbar-brand'>
            <img src="https://i.ibb.co/48YStr7/coupon-icon.webp" alt="" />
          </Link>
            <button className="navbar-toggler dark_collapse" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon dark_collapse"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav gap-5">

                {/* Geolocation and weather */}
                <i className="bi bi-geo-alt-fill m-auto location_icon"></i>
                <li className="nav-item">
                  <div className="container-fluid m-auto text-center" onLoad={geolocation} id="weather">
                    <p id="temperature" className="mb-0 pb-0"></p>
                    <p id="location" className="mt-0 pt-0"></p>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link to = {`./ListingAccessories/accessories`} className='nav-link fw-bold' >
                    Accessories
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link to = {`./ListingWomen/Women`} className='nav-link fw-bold' >
                    Women
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link to = {`./ListingMen/Men`} className='nav-link fw-bold' >
                    Men
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link to = {`./ListingKids/Kids`} className='nav-link fw-bold' >
                    Kids
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link to = {`./ListingSports/Sports`} className='nav-link fw-bold' >
                    Sports
                  </Link>
                </li>

                <form className="d-flex all_button" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button className="btn btn-secondary fw-bold" type="submit">Search</button>
                </form>

                <li className="nav-item laricon">
                  <a className="nav-link fw-bold" href="#"><i className="bi bi-bag-heart"></i></a>
                </li>
                <li className="nav-item laricon">
                  <a className="nav-link fw-bold" href="#"><i className="bi bi-cart2"></i></a>
                </li>
                <li className="nav-item laricon">
                  <a className="nav-link fw-bold" href="#" data-bs-toggle="modal" data-bs-target="#loginModal"><i className="bi bi-person"></i></a>
                </li>

                {/* Dark-light mode toggler */}
                <li className="nav-item m-auto">
                  <div id="darkModeToggle" className="toggler" onClick={toggleDarkMode}></div>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        <hr className="custom_hr"></hr>

        {/* Login Modal */}
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginModalLabel">Login</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* Login form */}
                <form className="all_button">
                  <div className="mb-3 ">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email"></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password"></input>
                  </div>
                  <button type="submit" className="btn btn-secondary">Login</button>
                </form>
              </div>
              <div className="modal-footer">
                <p>Don't have an account? <a href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#signupModal">Sign up</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Signup Modal */}
        <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signupModalLabel">Sign up</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {/* Signup form */}
                <form className="all_button">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your full name"></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email"></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password"></input>
                  </div>
                  <button type="submit" className="btn btn-secondary">Sign up</button>
                </form>
              </div>
              <div className="modal-footer">
                <p>Already have an account? <a href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a></p>
              </div>
            </div>
          </div>
        </div>
      </header>

       {/* Top section */}
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <img src="https://i.ibb.co/y6JbT60/top.png" alt="Top Image" class="img-fluid"></img>
            </div>
            <div class="col-lg-6 d-flex align-items-center">
              <div class="text-center large_button">
                <h1 class="display-4 custom_white">Welcome to Our Website</h1>
                <p class="lead custom_white">You can choose and fill your shopping cart with your favourite and new merchandise at great offers.</p>
                <a href="#" class="btn btn-secondary btn-lg">Learn More</a>
              </div>
            </div>
          </div>
        </div>  
        <hr class="custom_hr"></hr>
    </>
  );
}

export default Header;
