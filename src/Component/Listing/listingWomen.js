import React, { useState, useEffect } from 'react';
import './listing.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const base_url = "https://puma-i1u3.onrender.com";

const ListingWomen = () => {
    const params = useParams();
    
    const [womenData, setWomenData] = useState([]);
    const [SneakersFilter, setSneakersFilter] = useState([]);
    const [RunningFilter, setRunningFilter] = useState([]);
    const [TrainingFilter, setTrainingFilter] = useState([]);
    const [TopFilter, setTopFilter] = useState([]);
    const [JacketsFilter, setJacketsFilter] = useState([]);
    const [HoodiesFilter, setHoodiesFilter] = useState([]);
    const [ShortsFilter, setShortsFilter] = useState([]);
    const [PantsFilter, setPantsFilter] = useState([]);
    const [DressesFilter, setDressesFilter] = useState([]);
    const [womenPriceFilter, setwomenPriceFilter] = useState([]);
    const [womenShoeSizeFilter, setwomenShoeSizeFilter] = useState([]);
    const [womenClothSizeFilter, setwomenClothSizeFilter] = useState([]);

    useEffect(() => {

        // Merchandise display section
        let womenid = params.women;
        sessionStorage.setItem('womenid', womenid)

        axios.get(`https://puma-i1u3.onrender.com/women_wear`)
            .then((res) => {
                setWomenData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });

            }, []);

            // Filters according to product type
            const SneakersFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/women_wear');
                const data = response.data;
                const SneakersFilter = data.filter(item => item.Shoes_category_id === 1);
                setSneakersFilter(SneakersFilter);
                setRunningFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setDressesFilter([]);
                setwomenPriceFilter([]);
                setwomenShoeSizeFilter([]);
                setwomenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const RunningFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/women_wear');
                const data = response.data;
                const RunningFilter = data.filter(item => item.Shoes_category_id === 2);
                setRunningFilter(RunningFilter);
                setSneakersFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setDressesFilter([]);
                setwomenPriceFilter([]);
                setwomenShoeSizeFilter([]);
                setwomenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const TrainingFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/women_wear');
                const data = response.data;
                const TrainingFilter = data.filter(item => item.Shoes_category_id === 3);
                setTrainingFilter(TrainingFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setDressesFilter([]);
                setwomenPriceFilter([]);
                setwomenShoeSizeFilter([]);
                setwomenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const TopFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/women_wear');
                const data = response.data;
                const TopFilter = data.filter(item => item.Clothing_category_id === 1);
                setTopFilter(TopFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTrainingFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setDressesFilter([]);
                setwomenPriceFilter([]);
                setwomenShoeSizeFilter([]);
                setwomenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const JacketsFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/women_wear');
                const data = response.data;
                const JacketsFilter = data.filter(item => item.Clothing_category_id === 2);
                setJacketsFilter(JacketsFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setDressesFilter([]);
                setwomenPriceFilter([]);
                setwomenShoeSizeFilter([]);
                setwomenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const HoodiesFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/women_wear');
                const data = response.data;
                const HoodiesFilter = data.filter(item => item.Clothing_category_id === 3);
                setHoodiesFilter(HoodiesFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setDressesFilter([]);
                setwomenPriceFilter([]);
                setwomenShoeSizeFilter([]);
                setwomenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const ShortsFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/women_wear');
                const data = response.data;
                const ShortsFilter = data.filter(item => item.Clothing_category_id === 4);
                setShortsFilter(ShortsFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setPantsFilter([]);
                setDressesFilter([]);
                setwomenPriceFilter([]);
                setwomenShoeSizeFilter([]);
                setwomenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };
            
            const PantsFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/women_wear');
                const data = response.data;
                const PantsFilter = data.filter(item => item.Clothing_category_id === 5);
                setPantsFilter(PantsFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setDressesFilter([]);
                setwomenPriceFilter([]);
                setwomenShoeSizeFilter([]);
                setwomenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const DressesFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/women_wear');
                const data = response.data;
                const DressesFilter = data.filter(item => item.Clothing_category_id === 6);
                setDressesFilter(DressesFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setwomenPriceFilter([]);
                setwomenShoeSizeFilter([]);
                setwomenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            // Filters according to price
            const WomenPriceFilter = async (lcost, hcost) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/filter2/2?lcost=${lcost}&hcost=${hcost}`);
                  const data = response.data;
                  setwomenPriceFilter(data);
                  setSneakersFilter([]);
                  setRunningFilter([]);
                  setTrainingFilter([]);
                  setTopFilter([]);
                  setJacketsFilter([]);
                  setHoodiesFilter([]);
                  setShortsFilter([]);
                  setPantsFilter([]);
                  setDressesFilter([]);
                  setwomenShoeSizeFilter([]);
                  setwomenClothSizeFilter([]);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            };

            // Filters according to size
            const WomenShoeSizeFilter = async (shoesize) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/women_wear_shoesize?sub_category_id=5&&size=${shoesize}`);
                  const data = response.data;
                  setwomenShoeSizeFilter(data);
                  setSneakersFilter([]);
                  setRunningFilter([]);
                  setTrainingFilter([]);
                  setTopFilter([]);
                  setJacketsFilter([]);
                  setHoodiesFilter([]);
                  setShortsFilter([]);
                  setPantsFilter([]);
                  setDressesFilter([]);
                  setwomenPriceFilter([]);
                  setwomenClothSizeFilter([]);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            };

            const WomenClothSizeFilter = async (clothsize) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/women_wear_clothsize?sub_category_id=6&&size=${clothsize}`);
                  const data = response.data;
                  setwomenClothSizeFilter(data);
                  setSneakersFilter([]);
                  setRunningFilter([]);
                  setTrainingFilter([]);
                  setTopFilter([]);
                  setJacketsFilter([]);
                  setHoodiesFilter([]);
                  setShortsFilter([]);
                  setPantsFilter([]);
                  setDressesFilter([]);
                  setwomenPriceFilter([]);
                  setwomenShoeSizeFilter([]);
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
                                            <Link to={`/women_wear_details?sub_category_id=${params.women}&&merchandise_id=${item.merchandise_id}`}>
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
                                                <li><a className="dropdown-item" href="#" onClick={SneakersFilterClick}>Sneakers</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={RunningFilterClick}>Running Shoes</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={TrainingFilterClick}>Training & Gym Shoes</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={TopFilterClick}>T-Shirt & Tops</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={JacketsFilterClick}>Jackets</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={HoodiesFilterClick}>Sweatshirts & Hoodies</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={ShortsFilterClick}>Shorts</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={PantsFilterClick}>Pants</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={DressesFilterClick}>Dresses & Skirts</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Price
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="menDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenPriceFilter(1000, 2000)}>₹ 1000-2000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenPriceFilter(2000, 3000)}>₹ 2000-3000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenPriceFilter(3000, 4000)}>₹ 3000-4000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenPriceFilter(4000, 5000)}>₹ 4000-5000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenPriceFilter(5000, 6000)}>₹ 5000-6000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenPriceFilter(6000, 7000)}>₹ 6000-7000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenPriceFilter(7000, 8000)}>₹ 7000-8000</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="kidsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Shoe Size
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="kidsDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenShoeSizeFilter(6)}>6</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenShoeSizeFilter(7)}>7</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenShoeSizeFilter(8)}>8</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenShoeSizeFilter(9)}>9</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenShoeSizeFilter(10)}>10</a></li>                                              
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="kidsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Cloth Size
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="kidsDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenClothSizeFilter('S')}>S</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenClothSizeFilter('M')}>M</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenClothSizeFilter('L')}>L</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenClothSizeFilter('XL')}>XL</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => WomenClothSizeFilter('XXL')}>XXL</a></li>
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
                            SneakersFilter.length > 0
                                ? SneakersFilter
                                : RunningFilter.length > 0
                                ? RunningFilter
                                : TrainingFilter.length > 0
                                ? TrainingFilter
                                : TopFilter.length > 0
                                ? TopFilter
                                : JacketsFilter.length > 0
                                ? JacketsFilter
                                : HoodiesFilter.length > 0
                                ? HoodiesFilter
                                : ShortsFilter.length > 0
                                ? ShortsFilter
                                : PantsFilter.length > 0
                                ? PantsFilter
                                : DressesFilter.length > 0
                                ? DressesFilter
                                : womenPriceFilter.length > 0
                                ? womenPriceFilter
                                : womenShoeSizeFilter.length > 0
                                ? womenShoeSizeFilter
                                : womenClothSizeFilter.length > 0
                                ? womenClothSizeFilter
                                : womenData,
                    })}
    
                </>
            );
        }
        
        export default ListingWomen;
        