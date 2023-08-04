import React, { useState, useEffect } from 'react';
import './listing.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const base_url = "https://puma-i1u3.onrender.com";

const ListingAccessories = () => {
    const params = useParams();
    
    const [accessoriesData, setAccessoriesData] = useState([]);
    const [capsFilter, setCapsFilter] = useState([]);
    const [backpackFilter, setBackpackFilter] = useState([]);
    const [bottlesFilter, setBottlesFilter] = useState([]);
    const [walletFilter, setWalletFilter] = useState([]);
    const [accessoriesPriceFilter, setAccessoriesPriceFilter] = useState([]);

    useEffect(() => {

        // Merchandise display section
        let accessoriesid = params.accessories;
        sessionStorage.setItem('accessoriesid', accessoriesid)

        axios.get(`https://puma-i1u3.onrender.com/accessories`)
            .then((res) => {
                setAccessoriesData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

            }, []);

            // Filters according to product type
            const CapsFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/accessories');
                const data = response.data;
                const capsFilter = data.filter(item => item.sub_category_id === 1);
                setCapsFilter(capsFilter);
                setBackpackFilter([]);
                setBottlesFilter([]);
                setWalletFilter([]);
                setAccessoriesPriceFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const BackpackFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/accessories');
                const data = response.data;
                const backpackFilter = data.filter(item => item.sub_category_id === 2);
                setBackpackFilter(backpackFilter);
                setCapsFilter([]);
                setBottlesFilter([]);
                setWalletFilter([]);
                setAccessoriesPriceFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const BottlesFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/accessories');
                const data = response.data;
                const bottlesFilter = data.filter(item => item.sub_category_id === 3);
                setBottlesFilter(bottlesFilter);
                setCapsFilter([]);
                setBackpackFilter([]);
                setWalletFilter([]);
                setAccessoriesPriceFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const WalletFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/accessories');
                const data = response.data;
                const walletFilter = data.filter(item => item.sub_category_id === 4);
                setWalletFilter(walletFilter);
                setCapsFilter([]);
                setBackpackFilter([]);
                setBottlesFilter([]);
                setAccessoriesPriceFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const AccessoriesPriceFilter = async (lcost, hcost) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/filter1/1?lcost=${lcost}&hcost=${hcost}`);
                  const data = response.data;
                  setAccessoriesPriceFilter(data);
                  setCapsFilter([]);
                  setBackpackFilter([]);
                  setBottlesFilter([]);
                  setWalletFilter([]);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            };

            const renderData = ({ data }) => {
                if (data) {
                    if (data.length > 0) {
                        return (
                            <div className="container">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-4 p-5 text-black rounded">
                                    {data.map((item) => (
                                        <div className="col dark_goals" key={item._id} id="bottles">                           
                                            <Link to={`/accessory_details?sub_category_id=${params.accessories}&&merchandise_id=${item.merchandise_id}`}>
                                                <img src={item.image} alt={item.merchandise_name} className="rounded-5 img-fluid" />
                                                <h6 className="custom_white link-without-decoration text-black">{item.merchandise_name}</h6>
                                            </Link>
                                            <h5 className="price">₹{item.price}</h5>
                                            <figcaption className="figure-caption">Extra 5% off on online payments</figcaption>
                                            <Link to = {'/shopping_cart'}>
                                            <a href="" className="btn btn-secondary mt-3 cart_button">ADD TO CART</a>
                                            </Link>
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
                                            <a className="nav-link" href="#" id="womenDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Product Type
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="womenDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={CapsFilterClick}>Caps & Beanies</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={BackpackFilterClick}>Backpacks</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={BottlesFilterClick}>Water Bottles</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={WalletFilterClick}>Wallets</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Price
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="menDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => AccessoriesPriceFilter(500, 1000)}>₹ 500-1000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => AccessoriesPriceFilter(1000, 2000)}>₹ 1000-2000</a></li>
                                                <del><li><a className="dropdown-item" href="#" onClick={() => AccessoriesPriceFilter(2000, 3000)}> ₹2000-3000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => AccessoriesPriceFilter(3000, 4000)}>₹ 3000-4000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => AccessoriesPriceFilter(4000, 5000)}>₹ 4000-5000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => AccessoriesPriceFilter(5000, 6000)}>₹ 5000-6000</a></li></del>
                                                <li><a className="dropdown-item" href="#" onClick={() => AccessoriesPriceFilter(6000, 7000)}>₹ 6000-7000</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="kidsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Size
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="kidsDropdown">
                                                <li><a className="dropdown-item" href="#">None</a></li>
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
        
                    {renderData({
                        data:
                            capsFilter.length > 0
                                ? capsFilter
                                : backpackFilter.length > 0
                                ? backpackFilter
                                : bottlesFilter.length > 0
                                ? bottlesFilter
                                : walletFilter.length > 0
                                ? walletFilter
                                : accessoriesPriceFilter.length > 0
                                ? accessoriesPriceFilter
                                : accessoriesData,
                    })}

                </>
            );
        }
        
        export default ListingAccessories;
        