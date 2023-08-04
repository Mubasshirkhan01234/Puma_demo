import React, { useEffect, useState } from "react";
import './details.css';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const base_url = "https://puma-i1u3.onrender.com";

const MenDetailsDisplay = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const merchandiseId = searchParams.get('merchandise_id');
    const subcategoryId = searchParams.get('sub_category_id');
    const [menDetails, setMenDetails] = useState([]);
    const [menDetails1, setMenDetails1] = useState([]);
    const [menid] = useState(sessionStorage.getItem('menid'));

    const getExpectedDeliveryDate = () => {
        const today = new Date();
        const expectedDeliveryDate = new Date(today);
        expectedDeliveryDate.setDate(today.getDate() + 5);
        return expectedDeliveryDate.toDateString();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get(`${base_url}/men_wear_details?sub_category_id=7&&merchandise_id=${merchandiseId}`);
                if (response1.data && response1.data.length > 0) {
                    setMenDetails(response1.data);
                }

                const response2 = await axios.get(`${base_url}/men_wear_details?sub_category_id=8&&merchandise_id=${merchandiseId}`);
                if (response2.data && response2.data.length > 0) {
                    setMenDetails1(response2.data);
                }

            } catch (error) {
                console.log(error);
            }
        };
        
        fetchData();
    }, [merchandiseId]);

    const proceed = () => {

        let selectedMen = null;

        if (menDetails && menDetails.length > 0) {
            selectedMen = menDetails[0];
        } else if (menDetails1 && menDetails1.length > 0) {
            selectedMen = menDetails1[0];
        }

        if (selectedMen) {
            navigate(`/placeOrder_men/${selectedMen.merchandise_name}`);
        } else {
            console.log("No men merchandise details found!");
        }

        console.log("menDetails:", menDetails);
        console.log("menDetails1:", menDetails1);

    };

    return (
        <>
            {menDetails && menDetails.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={menDetails[0].image} alt={menDetails[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{menDetails[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{menDetails[0].price}</p>
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
            ) : menDetails1 && menDetails1.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={menDetails1[0].image} alt={menDetails1[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{menDetails1[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{menDetails1[0].price}</p>
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

export default MenDetailsDisplay;
