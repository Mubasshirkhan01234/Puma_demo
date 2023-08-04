import React, { useEffect, useState } from "react";
import './details.css';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const base_url = "https://puma-i1u3.onrender.com";

const SportsDetailsDisplay = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const merchandiseId = searchParams.get('merchandise_id');
    const subcategoryId = searchParams.get('sub_category_id');
    const [sportsDetails, setSportsDetails] = useState([]);
    const [sportsDetails1, setSportsDetails1] = useState([]);
    const [sportsDetails2, setSportsDetails2] = useState([]);
    const [sportsDetails3, setSportsDetails3] = useState([]);
    const [sportsid] = useState(sessionStorage.getItem('sportsid'));

    const getExpectedDeliveryDate = () => {
        const today = new Date();
        const expectedDeliveryDate = new Date(today);
        expectedDeliveryDate.setDate(today.getDate() + 5);
        return expectedDeliveryDate.toDateString();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get(`${base_url}/sports_wear_details?sub_category_id=11&&merchandise_id=${merchandiseId}`);
                if (response1.data && response1.data.length > 0) {
                    setSportsDetails(response1.data);
                }

                const response2 = await axios.get(`${base_url}/sports_wear_details?sub_category_id=12&&merchandise_id=${merchandiseId}`);
                if (response2.data && response2.data.length > 0) {
                    setSportsDetails1(response2.data);
                }

                const response3 = await axios.get(`${base_url}/sports_wear_details?sub_category_id=13&&merchandise_id=${merchandiseId}`);
                if (response3.data && response3.data.length > 0) {
                    setSportsDetails2(response3.data);
                }

                const response4 = await axios.get(`${base_url}/sports_wear_details?sub_category_id=14&&merchandise_id=${merchandiseId}`);
                if (response4.data && response4.data.length > 0) {
                    setSportsDetails3(response4.data);
                }

            } catch (error) {
                console.log(error);
            }
        };
        
        fetchData();
    }, [merchandiseId]);

    const proceed = () => {

        let selectedSports = null;

        if (sportsDetails && sportsDetails.length > 0) {
            selectedSports = sportsDetails[0];
        } else if (sportsDetails1 && sportsDetails1.length > 0) {
            selectedSports = sportsDetails1[0];
        } else if (sportsDetails2 && sportsDetails2.length > 0) {
            selectedSports = sportsDetails2[0]; 
        } else if (sportsDetails3 && sportsDetails3.length > 0) {
            selectedSports = sportsDetails3[0];
        }
        if (selectedSports) {
            navigate(`/placeOrder_sports/${selectedSports.merchandise_name}`);
        } else {
            console.log("No accessory details found!");
        }

        console.log("sportsDetails:", sportsDetails);
        console.log("sportsDetails1:", sportsDetails1);
        console.log("sportsDetails2:", sportsDetails2);
        console.log("sportsDetails3:", sportsDetails3);

    };

    return (
        <>
            {sportsDetails && sportsDetails.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={sportsDetails[0].image} alt={sportsDetails[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{sportsDetails[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{sportsDetails[0].price}</p>
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
            ) : sportsDetails1 && sportsDetails1.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={sportsDetails1[0].image} alt={sportsDetails1[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{sportsDetails1[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{sportsDetails1[0].price}</p>
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
            ) : sportsDetails2 && sportsDetails2.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={sportsDetails2[0].image} alt={sportsDetails2[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{sportsDetails2[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{sportsDetails2[0].price}</p>
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
            )  : sportsDetails3 && sportsDetails3.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={sportsDetails3[0].image} alt={sportsDetails3[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{sportsDetails3[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{sportsDetails3[0].price}</p>
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
            )
             : (
                <div className="container-fluid loading_img">
                    <img src="/images/loading_gif.gif" alt="loader" />
                </div>
            )}
            
        </>
    );
}

export default SportsDetailsDisplay;
