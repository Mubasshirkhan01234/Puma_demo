import React, { useEffect, useState } from "react";
import './details.css';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const base_url = "https://puma-i1u3.onrender.com";

const DetailsDisplay = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const merchandiseId = searchParams.get('merchandise_id');
    const subcategoryId = searchParams.get('sub_category_id');
    const [goalDetails, setGoalDetails] = useState([]);
    const [goalid] = useState(sessionStorage.getItem('goalid'));

    const getExpectedDeliveryDate = () => {
        const today = new Date();
        const expectedDeliveryDate = new Date(today);
        expectedDeliveryDate.setDate(today.getDate() + 5);
        return expectedDeliveryDate.toDateString();
    };


    useEffect(() => {
     
        axios
        .get(`${base_url}/sports_wear_details?sub_category_id=${subcategoryId}&&merchandise_id=${merchandiseId}`)
        .then((res) => {
          setGoalDetails(res.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    
      }, [subcategoryId, merchandiseId]);

    const proceed = () => {
        navigate(`/placeOrder/${goalDetails.merchandise_name}`)
    }

    return (
        <>
            {goalDetails ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={goalDetails.image} alt={goalDetails.merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{goalDetails.merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{goalDetails.price}</p>
                                <p className="lead custom_white text">Price includes GST</p>
                                <hr className="custom_hr" />
                                <a href="" className="btn btn-secondary" onClick={proceed}>PROCEED TO BUY</a>
                                <hr className="custom_hr" />
                                <h5 className="custom_white">Shipping and Returns</h5>
                                <p className="custom_white">Free standard delivery on all orders and free return for all qualifying orders within 14 days of your order delivery date. Visit our Return Policy for more information.
                                    <br />
                                    For any queries, please contact Customer Service at 080-35353535 or via customercareindia@puma.com .</p>
                                <h5 className="custom_white">Expected Delivery</h5>
                                <p className="custom_white"> Expected delivery date: {getExpectedDeliveryDate()}</p> 
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container-fluid loading_img">
                    <img src="/images/loading_gif.gif" alt="loader" />
                </div>
            )}

        </>
    );
}

export default DetailsDisplay;
