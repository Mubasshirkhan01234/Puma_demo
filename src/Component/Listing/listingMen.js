import React, { useState, useEffect } from 'react';
// import ScrollReveal from 'scrollreveal';
import './listing.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const base_url = "https://puma-i1u3.onrender.com";

const ListingMen = () => {

    // const sr = ScrollReveal({
    //     origin: 'top',
    //     distance: '60px',
    //     duration: 1000,
    //     delay: 400,
    //     reset: true
    //   })
    
    //   sr.reveal(`.listingMen_content`) 

    const params = useParams();

    const [menData, setMenData] = useState([]);
    const [SneakersFilter, setSneakersFilter] = useState([]);
    const [RunningFilter, setRunningFilter] = useState([]);
    const [TrainingFilter, setTrainingFilter] = useState([]);
    const [TopFilter, setTopFilter] = useState([]);
    const [JacketsFilter, setJacketsFilter] = useState([]);
    const [HoodiesFilter, setHoodiesFilter] = useState([]);
    const [ShortsFilter, setShortsFilter] = useState([]);
    const [PantsFilter, setPantsFilter] = useState([]);
    const [menPriceFilter, setmenPriceFilter] = useState([]);
    const [menShoeSizeFilter, setmenShoeSizeFilter] = useState([]);
    const [menClothSizeFilter, setmenClothSizeFilter] = useState([]);

    useEffect(() => {

            // Merchandise display section
            let menid = params.men;
            sessionStorage.setItem('menid', menid)

            axios.get(`https://puma-i1u3.onrender.com/men_wear`)
                .then((res) => {
                    setMenData(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });

            }, []);

            // Filters according to product type
            const SneakersFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/men_wear');
                const data = response.data;
                const SneakersFilter = data.filter(item => item.Shoes_category_id === 4);
                setSneakersFilter(SneakersFilter);
                setRunningFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setmenShoeSizeFilter([]);
                setmenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const RunningFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/men_wear');
                const data = response.data;
                const RunningFilter = data.filter(item => item.Shoes_category_id === 5);
                setRunningFilter(RunningFilter);
                setSneakersFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setmenShoeSizeFilter([]);
                setmenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const TrainingFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/men_wear');
                const data = response.data;
                const TrainingFilter = data.filter(item => item.Shoes_category_id === 6);
                setTrainingFilter(TrainingFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setmenShoeSizeFilter([]);
                setmenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const TopFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/men_wear');
                const data = response.data;
                const TopFilter = data.filter(item => item.Clothing_category_id === 7);
                setTopFilter(TopFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTrainingFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setmenShoeSizeFilter([]);
                setmenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const JacketsFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/men_wear');
                const data = response.data;
                const JacketsFilter = data.filter(item => item.Clothing_category_id === 8);
                setJacketsFilter(JacketsFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setmenShoeSizeFilter([]);
                setmenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const HoodiesFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/men_wear');
                const data = response.data;
                const HoodiesFilter = data.filter(item => item.Clothing_category_id === 9);
                setHoodiesFilter(HoodiesFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setShortsFilter([]);
                setPantsFilter([]);
                setmenShoeSizeFilter([]);
                setmenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const ShortsFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/men_wear');
                const data = response.data;
                const ShortsFilter = data.filter(item => item.Clothing_category_id === 10);
                setShortsFilter(ShortsFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setPantsFilter([]);
                setmenShoeSizeFilter([]);
                setmenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };
            
            const PantsFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/men_wear');
                const data = response.data;
                const PantsFilter = data.filter(item => item.Clothing_category_id === 11);
                setPantsFilter(PantsFilter);
                setSneakersFilter([]);
                setRunningFilter([]);
                setTrainingFilter([]);
                setTopFilter([]);
                setJacketsFilter([]);
                setHoodiesFilter([]);
                setShortsFilter([]);
                setmenShoeSizeFilter([]);
                setmenClothSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            // Filters according to price
            const MenPriceFilter = async (lcost, hcost) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/filter3/3?lcost=${lcost}&hcost=${hcost}`);
                  const data = response.data;
                  setmenPriceFilter(data);
                  setSneakersFilter([]);
                  setRunningFilter([]);
                  setTrainingFilter([]);
                  setTopFilter([]);
                  setJacketsFilter([]);
                  setHoodiesFilter([]);
                  setShortsFilter([]);
                  setPantsFilter([]);
                  setmenShoeSizeFilter([]);
                  setmenClothSizeFilter([]);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            };

            // Filters according to size
            const MenShoeSizeFilter = async (shoesize) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/men_wear_shoesize?sub_category_id=7&&size=${shoesize}`);
                  const data = response.data;
                  setmenShoeSizeFilter(data);
                  setSneakersFilter([]);
                  setRunningFilter([]);
                  setTrainingFilter([]);
                  setTopFilter([]);
                  setJacketsFilter([]);
                  setHoodiesFilter([]);
                  setShortsFilter([]);
                  setPantsFilter([]);
                  setmenPriceFilter([]);
                  setmenClothSizeFilter([]);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            };

            const MenClothSizeFilter = async (clothsize) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/men_wear_clothsize?sub_category_id=8&&size=${clothsize}`);
                  const data = response.data;
                  setmenClothSizeFilter(data);
                  setSneakersFilter([]);
                  setRunningFilter([]);
                  setTrainingFilter([]);
                  setTopFilter([]);
                  setJacketsFilter([]);
                  setHoodiesFilter([]);
                  setShortsFilter([]);
                  setPantsFilter([]);
                  setmenPriceFilter([]);
                  setmenShoeSizeFilter([]);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            };

            const renderData = ({ data }) => {
                if (data) {
                    if (data.length > 0) {
                        return (
                            <div className="container">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-4 p-5 text-black rounded listingMen_content">
                                    {data.map((item) => (
                                        <div className="col dark_goals" key={item._id} id="bottles">
                                            <Link to={`/men_wear_details?sub_category_id=${params.men}&&merchandise_id=${item.merchandise_id}`}>
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
                                            <a className="nav-link" href="#" id="womenDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Product Type
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="womenDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={SneakersFilterClick}>Sneakers</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={RunningFilterClick}>Running Shoes</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={TrainingFilterClick}>Training & Gym Shoes</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={TopFilterClick}>T-shirts</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={JacketsFilterClick}>Jackets</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={HoodiesFilterClick}>Sweatshirts & Hoodies</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={ShortsFilterClick}>Shorts</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={PantsFilterClick}>Pants</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Price
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="menDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => MenPriceFilter(1000, 2000)}>₹ 1000-2000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenPriceFilter(2000, 3000)}>₹ 2000-3000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenPriceFilter(3000, 4000)}>₹ 3000-4000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenPriceFilter(4000, 5000)}>₹ 4000-5000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenPriceFilter(5000, 6000)}>₹ 5000-6000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenPriceFilter(6000, 7000)}>₹ 6000-7000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenPriceFilter(7000, 8000)}>₹ 7000-8000</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="kidsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Shoe Size
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="kidsDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => MenShoeSizeFilter(6)}>6</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenShoeSizeFilter(7)}>7</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenShoeSizeFilter(8)}>8</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenShoeSizeFilter(9)}>9</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenShoeSizeFilter(10)}>10</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="kidsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Cloth Size
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="kidsDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => MenClothSizeFilter("S")}>S</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenClothSizeFilter("M")}>M</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenClothSizeFilter("L")}>L</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenClothSizeFilter("XL")}>XL</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => MenClothSizeFilter("XXL")}>XXL</a></li>
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
                                : menPriceFilter.length > 0
                                ? menPriceFilter
                                : menShoeSizeFilter.length > 0
                                ? menShoeSizeFilter
                                : menClothSizeFilter.length > 0
                                ? menClothSizeFilter
                                : menData,
                    })}
    
                </>
            );
        }
        
        export default ListingMen;
        