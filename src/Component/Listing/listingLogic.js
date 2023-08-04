import React, { useState, useEffect } from 'react';
import './listing.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const base_url = "https://puma-i1u3.onrender.com";

const ListingLogic = () => {
    const params = useParams();
    
    const [goalList, setGoalList] = useState();
    const [goalList1, setGoalList1] = useState();
    const [goalList2, setGoalList2] = useState();

    useEffect(() => {

        // Filter section
        fetch('https://puma-i1u3.onrender.com/sports')
        .then(response => response.json())
        .then((data) => {
    
          const filteredData1 = data.filter(item => item.sub_category_id === 14);
          const goalList2 = filteredData1.length > 0 ? filteredData1[0].category_name : '';
          setGoalList2(goalList2);
        });

        // Merchandise display section
        let goalid = params.goals;
        sessionStorage.setItem('goalid', goalid)

        axios.get(`${base_url}/sports?sub_category_id=${params.goals}`)
            .then((res) => {
                setGoalList(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
                
        }, []);
        

    const renderData = ({ data }) => {
        if (data) {
            if (data.length > 0) {
                return (
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-4 p-5 text-black rounded">
                            {data.map((item) => (
                                <div className="col dark_goals" key={item._id} id="bottles">
                                    <Link to={`/goals_wear_details?sub_category_id=${params.goals}&&merchandise_id=${item.merchandise_id}`}>
                                        <img src={item.image} alt={item.merchandise_name} className="rounded-5 img-fluid" />
                                        <h6 className="custom_white link-without-decoration text-black">{item.merchandise_name}</h6>
                                    </Link>
                                    <h5 className="price">₹{item.price}</h5>
                                    <figcaption className="figure-caption">Extra 5% off on online payments</figcaption>
                                    <a href="" className="btn btn-secondary mt-3 cart_button">ADD TO CART</a>
                                    <hr className="custom_hr" />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            } 
        } else {
            return (
                <h2 className='container text-center mt-5 mb-5 danger'>No data found !<img src='/images/smily2.gif' alt="smily" /></h2>
            );
        }
    };
      
      
      

    return (
        <>

            {/* Filter section */}
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light pb-0 pt-0 darknav mt-3">
                    <div className="container-fluid darknav">
                        <a className="navbar-brand" href="#"><i className="bi bi-filter location_icon"></i></a>
                        <button className="navbar-toggler dark_collapse" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon dark_collapse"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav gap-5">
                                <li className="nav-item dropdown">
                                    <ul className="dropdown-menu darknav bg-light" aria-labelledby="accessoriesDropdown">
                                        <li><a className="dropdown-item" href="#">{goalList2}</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="womenDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Product Type
                                    </a>
                                    <ul className="dropdown-menu darknav bg-light" aria-labelledby="womenDropdown">
                                        <li><a className="dropdown-item" href="#">Sports</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Price
                                    </a>
                                    <ul className="dropdown-menu darknav bg-light" aria-labelledby="menDropdown">
                                        <li><a className="dropdown-item" href="#">Less than 500</a></li>
                                        <li><a className="dropdown-item" href="#">500-1000</a></li>
                                        <li><a className="dropdown-item" href="#">1000-2000</a></li>
                                        <li><a className="dropdown-item" href="#">2000-3000</a></li>
                                        <li><a className="dropdown-item" href="#">3000-4000</a></li>
                                        <li><a className="dropdown-item" href="#">4000-5000</a></li>
                                        <li><a className="dropdown-item" href="#">5000-6000</a></li>
                                        <li><a className="dropdown-item" href="#">6000-7000</a></li>
                                        <li><a className="dropdown-item" href="#">7000-8000</a></li>
                                        <li><a className="dropdown-item" href="#">8000-9000</a></li>
                                        <li><a className="dropdown-item" href="#">9000-10000</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="kidsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Size
                                    </a>
                                    <ul className="dropdown-menu darknav bg-light" aria-labelledby="kidsDropdown">
                                        <li><a className="dropdown-item" href="#">1</a></li>
                                        <li><a className="dropdown-item" href="#">2</a></li>
                                        <li><a className="dropdown-item" href="#">3</a></li>
                                        <li><a className="dropdown-item" href="#">4</a></li>
                                        <li><a className="dropdown-item" href="#">5</a></li>
                                        <li><a className="dropdown-item" href="#">6</a></li>
                                        <li><a className="dropdown-item" href="#">7</a></li>
                                        <li><a className="dropdown-item" href="#">8</a></li>
                                        <li><a className="dropdown-item" href="#">9</a></li>
                                        <li><a className="dropdown-item" href="#">10</a></li>
                                        <li><a className="dropdown-item" href="#">S</a></li>
                                        <li><a className="dropdown-item" href="#">M</a></li>
                                        <li><a className="dropdown-item" href="#">L</a></li>
                                        <li><a className="dropdown-item" href="#">XL</a></li>
                                        <li><a className="dropdown-item" href="#">XXL</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#" id="sportsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Discount
                                    </a>
                                    <ul className="dropdown-menu darknav bg-light" aria-labelledby="sportsDropdown">
                                        <li><a className="dropdown-item" href="#">None</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <hr className="custom_hr" />

            {renderData({ data: goalList })}

        </>
    );
};

export default ListingLogic;
