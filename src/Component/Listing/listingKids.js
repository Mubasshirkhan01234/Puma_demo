import React, { useState, useEffect } from 'react';
import './listing.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const base_url = "https://puma-i1u3.onrender.com";

const ListingKids = () => {
    const params = useParams();

    const [kidsData, setKidsData] = useState([]);
    const [ShoesFilter, setShoesFilter] = useState([]);
    const [ClothingFilter, setClothingFilter] = useState([]);
    const [kidsPriceFilter, setkidsPriceFilter] = useState([]);
    const [kidsShoeSizeFilter, setkidsShoeSizeFilter] = useState([]);
    const [kidsClothSizeFilter, setkidsClothSizeFilter] = useState([]);

    useEffect(() => {

        // Merchandise display section
        let kidsid = params.kids;
        sessionStorage.setItem('kidsid', kidsid)

        axios.get(`https://puma-i1u3.onrender.com/kids_wear`)
            .then((res) => {
                setKidsData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

            }, []);

            // Filters according to product type
            const ShoesFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/kids_wear');
                const data = response.data;
                const ShoesFilter = data.filter(item => item.sub_category_id === 9);
                setShoesFilter(ShoesFilter);
                setClothingFilter([]);
                setkidsPriceFilter([]);
                setkidsShoeSizeFilter([]);
                setkidsClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const ClothingFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/kids_wear');
                const data = response.data;
                const ClothingFilter = data.filter(item => item.sub_category_id === 10);
                setClothingFilter(ClothingFilter);
                setShoesFilter([]);
                setkidsPriceFilter([]);
                setkidsShoeSizeFilter([]);
                setkidsClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            // Filters according to price
            const KidsPriceFilter = async (lcost, hcost) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/filter4/4?lcost=${lcost}&hcost=${hcost}`);
                  const data = response.data;
                  setkidsPriceFilter(data);
                  setShoesFilter([]);
                  setClothingFilter([]);
                  setkidsShoeSizeFilter([]);
                  setkidsClothSizeFilter([]);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            };

            // Filters according to size
            const KidsShoeSizeFilter = async (shoesize) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/kids_wear_shoesize?sub_category_id=9&&size=${shoesize}`);
                  const data = response.data;
                  setkidsShoeSizeFilter(data);
                  setShoesFilter([]);
                  setClothingFilter([]);
                  setkidsPriceFilter([]);
                  setkidsClothSizeFilter([]);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            };

            const KidsClothSizeFilter = async (clothsize) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/kids_wear_clothsize?sub_category_id=10&&size=${clothsize}`);
                  const data = response.data;
                  setkidsClothSizeFilter(data);
                  setShoesFilter([]);
                  setClothingFilter([]);
                  setkidsPriceFilter([]);
                  setkidsShoeSizeFilter([]);
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
                                            <Link to={`/kids_wear_details?sub_category_id=${params.kids}&&merchandise_id=${item.merchandise_id}`}>
                                                <img src={item.image} alt={item.merchandise_name} className="rounded-5 img-fluid" />
                                                <h6 className="custom_white link-without-decoration text-black">{item.merchandise_name}</h6>
                                            </Link>
                                            <h5 className="price">₹{item.price}</h5>
                                            <figcaption className="figure-caption">Extra 5% off on online payments</figcaption>
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
                                                <li><a className="dropdown-item" href="#" onClick={ShoesFilterClick}>Shoes</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={ClothingFilterClick}>Clothing</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Price
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="menDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsPriceFilter(1000, 2000)}>₹ 1000-2000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsPriceFilter(2000, 3000)}>₹ 2000-3000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsPriceFilter(3000, 4000)}>₹ 3000-4000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsPriceFilter(4000, 5000)}>₹ 4000-5000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsPriceFilter(5000, 6000)}>₹ 5000-6000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsPriceFilter(6000, 7000)}>₹ 6000-7000</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="kidsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Shoe Size
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="kidsDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsShoeSizeFilter(1)}>1</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsShoeSizeFilter(2)}>2</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsShoeSizeFilter(3)}>3</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsShoeSizeFilter(4)}>4</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsShoeSizeFilter(5)}>5</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="kidsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Cloth Size
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="kidsDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsClothSizeFilter("M")}>5 - 6 Y</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsClothSizeFilter("S")}>7 - 8 Y</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsClothSizeFilter("L")}>9 - 10 Y</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsClothSizeFilter("XL")}>11 - 12 Y</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => KidsClothSizeFilter("XXL")}>13 - 14 Y</a></li>
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
                            ShoesFilter.length > 0
                                ? ShoesFilter
                                : ClothingFilter.length > 0
                                ? ClothingFilter
                                : kidsPriceFilter.length > 0
                                ? kidsPriceFilter
                                : kidsShoeSizeFilter.length > 0
                                ? kidsShoeSizeFilter
                                : kidsClothSizeFilter.length > 0
                                ? kidsClothSizeFilter
                                : kidsData,
                    })}
        
                </>
            );
        }
        
        export default ListingKids;
        