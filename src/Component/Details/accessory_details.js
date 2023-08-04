import React, { useEffect, useState } from "react";
import './details.css';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const base_url = "https://puma-i1u3.onrender.com";

const AccessoriesDetailsDisplay = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const merchandiseId = searchParams.get('merchandise_id');
    const subcategoryId = searchParams.get('sub_category_id');
    const [accessoriesDetails, setAccessoriesDetails] = useState([]);
    const [accessoriesDetails1, setAccessoriesDetails1] = useState([]);
    const [accessoriesDetails2, setAccessoriesDetails2] = useState([]);
    const [accessoriesDetails3, setAccessoriesDetails3] = useState([]);
    const [accessoriesid] = useState(sessionStorage.getItem('accessoriesid'))

    const getExpectedDeliveryDate = () => {
        const today = new Date();
        const expectedDeliveryDate = new Date(today);
        expectedDeliveryDate.setDate(today.getDate() + 5);
        return expectedDeliveryDate.toDateString();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get(`${base_url}/accessory_details?sub_category_id=1&&merchandise_id=${merchandiseId}`);
                if (response1.data && response1.data.length > 0) {
                    setAccessoriesDetails(response1.data);
                }

                const response2 = await axios.get(`${base_url}/accessory_details?sub_category_id=2&&merchandise_id=${merchandiseId}`);
                if (response2.data && response2.data.length > 0) {
                    setAccessoriesDetails1(response2.data);
                }

                const response3 = await axios.get(`${base_url}/accessory_details?sub_category_id=3&&merchandise_id=${merchandiseId}`);
                if (response3.data && response3.data.length > 0) {
                    setAccessoriesDetails2(response3.data);
                }

                const response4 = await axios.get(`${base_url}/accessory_details?sub_category_id=4&&merchandise_id=${merchandiseId}`);
                if (response4.data && response4.data.length > 0) {
                    setAccessoriesDetails3(response4.data);
                }

            } catch (error) {
                console.log(error);
            }
        };
        
        fetchData();
    }, [merchandiseId]);

    const proceed = () => {

        let selectedAccessory = null;

        if (accessoriesDetails && accessoriesDetails.length > 0) {
            selectedAccessory = accessoriesDetails[0];
        } else if (accessoriesDetails1 && accessoriesDetails1.length > 0) {
            selectedAccessory = accessoriesDetails1[0];
        } else if (accessoriesDetails2 && accessoriesDetails2.length > 0) {
            selectedAccessory = accessoriesDetails2[0]; 
        } else if (accessoriesDetails3 && accessoriesDetails3.length > 0) {
            selectedAccessory = accessoriesDetails3[0];
        }
        if (selectedAccessory) {
            navigate(`/placeOrder_accessories/${selectedAccessory.merchandise_name}`);
        } else {
            console.log("No accessory details found!");
        }

        console.log("accessoriesDetails:", accessoriesDetails);
        console.log("accessoriesDetails1:", accessoriesDetails1);
        console.log("accessoriesDetails2:", accessoriesDetails2);
        console.log("accessoriesDetails3:", accessoriesDetails3);

    };

    return (
        <>
            {accessoriesDetails && accessoriesDetails.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={accessoriesDetails[0].image} alt={accessoriesDetails[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{accessoriesDetails[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{accessoriesDetails[0].price}</p>
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
            ) : accessoriesDetails1 && accessoriesDetails1.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={accessoriesDetails1[0].image} alt={accessoriesDetails1[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{accessoriesDetails1[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{accessoriesDetails1[0].price}</p>
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
            ) : accessoriesDetails2 && accessoriesDetails2.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={accessoriesDetails2[0].image} alt={accessoriesDetails2[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{accessoriesDetails2[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{accessoriesDetails2[0].price}</p>
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
            )  : accessoriesDetails3 && accessoriesDetails3.length > 0 ? (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={accessoriesDetails3[0].image} alt={accessoriesDetails3[0].merchandise_name} className="img-fluid rounded-3 merchandise_image" />
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <div className="large_button">
                                <h3 className="display-8 fw-bold custom_white">{accessoriesDetails3[0].merchandise_name}</h3>
                                <p className="lead fw-bold custom_white">₹{accessoriesDetails3[0].price}</p>
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

export default AccessoriesDetailsDisplay;
