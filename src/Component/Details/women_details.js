import React, { useEffect, useState } from "react";
import './details.css';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const base_url = "https://puma-i1u3.onrender.com";

const WomenDetailsDisplay = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const merchandiseId = searchParams.get('merchandise_id');
    const subcategoryId = searchParams.get('sub_category_id');
    const [womenDetails, setWomenDetails] = useState([]);
    const [womenDetails1, setWomenDetails1] = useState([]);
    const [womenid] = useState(sessionStorage.getItem('womenid'))

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get(`${base_url}/women_wear_details?sub_category_id=5&&merchandise_id=${merchandiseId}`);
                if (response1.data && response1.data.length > 0) {
                    setWomenDetails(response1.data);
                }

                const response2 = await axios.get(`${base_url}/women_wear_details?sub_category_id=6&&merchandise_id=${merchandiseId}`);
                if (response2.data && response2.data.length > 0) {
                    setWomenDetails1(response2.data);
                }

            } catch (error) {
                console.log(error);
            }
        };
        
        fetchData();
    }, [merchandiseId]);

    const proceed = () => {

        let selectedWomen = null;

        if (womenDetails && womenDetails.length > 0) {
            selectedWomen = womenDetails[0];
        } else if (womenDetails1 && womenDetails1.length > 0) {
            selectedWomen = womenDetails1[0];
        }

        if (selectedWomen) {
            navigate(`/placeOrder_Women/${selectedWomen.merchandise_name}`);
        } else {
            console.log("No women merchandise details found!");
        }

        console.log("womenDetails:", womenDetails);
        console.log("womenDetails1:", womenDetails1);

    };

    return (
        <>
            {womenDetails && womenDetails.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={womenDetails[0].image} alt={womenDetails[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{womenDetails[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{womenDetails[0].price}</p>
                                <p className="lead custom_white text">Price includes GST</p>
                                <hr className="custom_hr" />
                                <i className="bi bi-cart2 custom_white"></i>&nbsp;
                                <a href="" className="btn btn-secondary" onClick={proceed}>ADD TO CART</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i className="bi bi-bag-heart custom_white"></i>&nbsp;
                                <a href="" className="btn btn-secondary">ADD TO WISHLIST</a>
                                <hr className="custom_hr" />
                                <h5 className="custom_white">Shipping and Returns</h5>
                                <p className="custom_white">Free standard delivery on all orders and free return for all qualifying orders within 14 days of your order delivery date. Visit our Return Policy for more information.
                                    <br />
                                    For any queries, please contact Customer Service at 080-35353535 or via customercareindia@puma.com .</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : womenDetails1 && womenDetails1.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={womenDetails1[0].image} alt={womenDetails1[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{womenDetails1[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{womenDetails1[0].price}</p>
                                <p className="lead custom_white text">Price includes GST</p>
                                <hr className="custom_hr" />
                                <i className="bi bi-cart2 custom_white"></i>&nbsp;
                                <a href="" className="btn btn-secondary" onClick={proceed}>ADD TO CART</a>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i className="bi bi-bag-heart custom_white"></i>&nbsp;
                                <a href="" className="btn btn-secondary">ADD TO WISHLIST</a>
                                <hr className="custom_hr" />
                                <h5 className="custom_white">Shipping and Returns</h5>
                                <p className="custom_white">Free standard delivery on all orders and free return for all qualifying orders within 14 days of your order delivery date. Visit our Return Policy for more information.
                                    <br />
                                    For any queries, please contact Customer Service at 080-35353535 or via customercareindia@puma.com .</p>
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

export default WomenDetailsDisplay;
