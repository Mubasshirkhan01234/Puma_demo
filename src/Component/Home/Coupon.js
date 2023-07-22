import React, { useEffect } from 'react';
import './Coupon.css';

const closeCoupon = () => {
  const cpnBtn = document.getElementById("cpnBtn");
  const cpnCode = document.getElementById("cpnCode");
  
  cpnBtn.onclick = function () {
    navigator.clipboard.writeText(cpnCode.innerHTML);
    cpnBtn.innerHTML = "COPIED !";
    setTimeout(function () {
      cpnBtn.innerHTML = "COPY CODE";
    }, 5000);
  };

  window.onload = loadCoupon;

  function loadCoupon() {
    document.getElementById('coupon_container').style.visibility = 'visible';
    document.getElementById('main').style.opacity = '0.3';
  }

  function closeCoupon() {
    document.getElementById('coupon_container').style.visibility = 'hidden';
    document.getElementById('main').style.opacity = '1';
  }
};

const Coupon = () => {
  useEffect(() => {
    closeCoupon(); 
  }, []);

  return (
    <>
      {/* COUPON CODE */}
      <div id="coupon_container">
        <div onClick={closeCoupon} className="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <img id="coupon_icon" src="https://i.ibb.co/48YStr7/coupon-icon.webp" alt="coupon-icon" />
        <h4>
          <button id="off">40% off</button> on Puma Shoes
        </h4>
        <h4>Using HDFC and SBI Credit Card</h4>
        <div className="coupon_row">
          <span id="cpnCode">SHOES2023</span>
          <span id="cpnBtn">COPY CODE</span>
        </div>
        <p>Valid Till: 10 August, 2023</p>
      </div>
    </>
  );
};

export default Coupon;
