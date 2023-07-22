import React, { useEffect } from 'react';
import $ from 'jquery';
// import OwlCarousel from 'react-owl-carousel';
import { fn } from 'jquery';
import 'owl.carousel/dist/owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Recommendation.css';

const Recommendation = () => {

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

    return(
        <>
            {/* Recommendation section */}
            <h4 className="container-fluid custom_white">RECOMMENDED FOR YOU</h4>
            <div className="owl-carousel owl-theme container-fluid mt-4">
                <div className="item">
                <img src="https://i.ibb.co/LnChCNf/rec1.webp" alt="shoes" className="rounded" />
                <span className="custom_white">AMG Pentrodes Unisex Sneakers</span><br /><span className="price2" style={{ color: '#ba2b20' }}>₹8,999</span>
                <del className="custom_white">₹9,999</del>
                </div>
                <div className="item">
                <img src="https://i.ibb.co/tX91jqJ/Mercedes-AMG-Petronas-F1-Maco-SL-Unisex-Sneakers.webp" alt="tshirt" className="rounded" />
                <span className="custom_white">Puma x RCB Men's Jersey 2022-</span><br /><span className="price2" style={{ color: '#ba2b20' }}>₹1,999</span>
                <del className="custom_white">₹2,999</del>
                </div>
                <div className="item">
                <img src="https://i.ibb.co/pXNZGwn/Jada-Women-s-Sneakers.webp" alt="shoes" className="rounded" />
                <span className="custom_white">Trinity- Sneakers- Puma- 2022</span><br /><span className="price2" style={{ color: '#ba2b20' }}>₹7,999</span>
                <del className="custom_white">₹8,999</del>
                </div>
                <div className="item">
                <img src="https://i.ibb.co/gWy7dLY/Smashic-Unisex-Sneakers.webp" alt="shoes" className="rounded" />
                <span className="custom_white">F1 X-RaySpeed Unisex Sneakers</span><br /><span className="price2" style={{ color: '#ba2b20' }}>₹8,999</span>
                <del className="custom_white">₹9,999</del>
                </div>
                <div className="item">
                <img src="https://i.ibb.co/cY2GtRN/Wild-Rider-Layers-Unisex-Sneakers.webp" alt="shoes" className="rounded" />
                <span className="custom_white">RS-X- Efekt- Unisex- Sneakers</span><br /><span className="price2" style={{ color: '#ba2b20'}}>₹11,999</span>
                <del className="custom_white">₹12,999</del>
                </div>
                <div className="item">
                <img src="https://i.ibb.co/Tmz90R0/n.webp" alt="shoes" className="rounded" />
                <span className="custom_white">Smash- Ace- Unisex- Sneakers</span><br /><span className="price2" style={{ color: '#ba2b20' }}>₹4,999</span>
                <del className="custom_white">₹5,999</del>
                </div>
                <div className="item">
                <img src="https://i.ibb.co/C6Zsw1Q/n2.webp" alt="shoes" className="rounded" />
                <span className="custom_white">Smash- Ace- Unisex- Sneakers</span><br /><span className="price2" style={{ color: '#ba2b20' }}>₹5,999</span>
                <del className="custom_white">₹6,999</del>
                </div>
            </div>
        </>
    )
}

export default Recommendation;