import React, { useEffect } from 'react';
import $ from 'jquery';
import { fn } from 'jquery';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Trending.css';

const Trending = () => {
  useEffect(() => {
    $(document).ready(() => {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
  });
  }, []);

  return (
    <>
      {/* Top and trending section */}
      <h4 className="container-fluid custom_white">TOP AND TRENDING</h4>
      <div className="owl-carousel owl-theme container-fluid mt-4">
        <div className="item" data-index="1">
          <img src="https://i.ibb.co/RTChSCP/trending1.jpg" alt="" className="rounded" />
          <span className="custom_white">AMG Pentrodes Unisex Sneakers</span><br />
          <span className="price custom_white">₹8,999</span>
        </div>
        <div className="item" data-index="2">
          <img src="https://i.ibb.co/Mctw86Q/trending2.webp" alt="" className="rounded" />
          <span className="custom_white">Puma x RCB Men's Jersey 2022</span><br />
          <span className="price custom_white">₹1,999</span>
        </div>
        <div className="item" data-index="3">
          <img src="https://i.ibb.co/ngy79NY/trending3.webp" alt="" className="rounded" />
          <span className="custom_white">Trinity Men's Sneakers (white)</span><br />
          <span className="price custom_white">₹7,999</span>
        </div>
        <div className="item" data-index="4">
          <img src="https://i.ibb.co/T0zhS0c/trending4.webp" alt="" className="rounded" />
          <span className="custom_white">F1 X-Ray Unisex Sneakers</span><br />
          <span className="price custom_white">₹8,999</span>
        </div>
        <div className="item" data-index="5">
          <img src="https://i.ibb.co/B4kH35P/trending5.webp" alt="" className="rounded" />
          <span className="custom_white">RS-X Efekt Unisex Sneakers</span><br />
          <span className="price custom_white">₹11,999</span>
        </div>
        <div className="item" data-index="6">
          <img src="https://i.ibb.co/nzvyW1Y/trending6.webp" alt="" className="rounded" />
          <span className="custom_white">Smash Ace Unisex Sneakers</span><br />
          <span className="price custom_white">₹4,499</span>
        </div>
        <div className="item" data-index="7">
          <img src="https://i.ibb.co/Msb5nXm/trending7.webp" alt="" className="rounded" />
          <span className="custom_white">Smash Ace Unisex Sneakers</span><br />
          <span className="price custom_white">₹4,499</span>
        </div>
      </div>
      <hr className="custom_hr" />
    </>
  );
};

export default Trending;
