import React, { useEffect, useState } from "react";
import './details.css';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const base_url = "https://puma-i1u3.onrender.com";

const KidsDetailsDisplay = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const merchandiseId = searchParams.get('merchandise_id');
    const subcategoryId = searchParams.get('sub_category_id');
    const [kidsDetails, setKidsDetails] = useState([]);
    const [kidsDetails1, setkidsDetails1] = useState([]);
    const [kidsid] = useState(sessionStorage.getItem('kidsid'));

    const getExpectedDeliveryDate = () => {
        const today = new Date();
        const expectedDeliveryDate = new Date(today);
        expectedDeliveryDate.setDate(today.getDate() + 5);
        return expectedDeliveryDate.toDateString();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get(`${base_url}/kids_wear_details?sub_category_id=9&&merchandise_id=${merchandiseId}`);
                if (response1.data && response1.data.length > 0) {
                    setKidsDetails(response1.data);
                }

                const response2 = await axios.get(`${base_url}/kids_wear_details?sub_category_id=10&&merchandise_id=${merchandiseId}`);
                if (response2.data && response2.data.length > 0) {
                    setkidsDetails1(response2.data);
                }

            } catch (error) {
                console.log(error);
            }
        };
        
        fetchData();
    }, [merchandiseId]);

    const proceed = () => {

        let selectedKids = null;

        if (kidsDetails && kidsDetails.length > 0) {
            selectedKids = kidsDetails[0];
        } else if (kidsDetails1 && kidsDetails1.length > 0) {
            selectedKids = kidsDetails1[0];
        }

        if (selectedKids) {
            navigate(`/placeOrder_kids/${selectedKids.merchandise_name}`);
        } else {
            console.log("No kids merchandise details found!");
        }

        console.log("kidsDetails:", kidsDetails);
        console.log("kidsDetails1:", kidsDetails1);

    };

    return (
        <>
            {kidsDetails && kidsDetails.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={kidsDetails[0].image} alt={kidsDetails[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{kidsDetails[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{kidsDetails[0].price}</p>
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
            ) : kidsDetails1 && kidsDetails1.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={kidsDetails1[0].image} alt={kidsDetails1[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{kidsDetails1[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{kidsDetails1[0].price}</p>
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

export default KidsDetailsDisplay;
