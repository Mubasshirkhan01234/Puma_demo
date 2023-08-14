import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './listing.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const base_url = "https://puma-i1u3.onrender.com";

const ListingSports = () => {

    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1000,
        delay: 400,
        reset: true
      })
    
      sr.reveal(`.listingSports_content`)

    const params = useParams();

    const [sportsData, setSportsData] = useState([]);
    const [RunningShoesFilter, setRunningShoesFilter] = useState([]);
    const [TrainingShoesFilter, setTrainingShoesFilter] = useState([]);
    const [CricketFilter, setCricketFilter] = useState([]);
    const [FootballFilter, setFootballFilter] = useState([]);
    const [sportsPriceFilter, setsportsPriceFilter] = useState([]);
    const [runningShoeSizeFilter, setrunningShoeSizeFilter] = useState([]);
    const [trainingShoeSizeFilter, settrainingShoeSizeFilter] = useState([]);


    useEffect(() => {

            // Merchandise display section
            let sportsid = params.sports;
            sessionStorage.setItem('sportsid', sportsid)

            axios.get(`https://puma-i1u3.onrender.com/sports`)
                .then((res) => {
                    setSportsData(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });

            }, []);
            
            // Filters according to product type
            const RunningShoesFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/sports');
                const data = response.data;
                const RunningShoesFilter = data.filter(item => item.sub_category_id === 11);
                setRunningShoesFilter(RunningShoesFilter);
                setTrainingShoesFilter([]);
                setCricketFilter([]);
                setFootballFilter([]);
                setsportsPriceFilter([]);
                setrunningShoeSizeFilter([]);
                settrainingShoeSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const TrainingShoesFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/sports');
                const data = response.data;
                const TrainingShoesFilter = data.filter(item => item.sub_category_id === 12);
                setTrainingShoesFilter(TrainingShoesFilter);
                setRunningShoesFilter([]);
                setCricketFilter([]);
                setFootballFilter([]);
                setsportsPriceFilter([]);
                setrunningShoeSizeFilter([]);
                settrainingShoeSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const CricketFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/sports');
                const data = response.data;
                const CricketFilter = data.filter(item => item.sub_category_id === 13);
                setCricketFilter(CricketFilter);
                setRunningShoesFilter([]);
                setTrainingShoesFilter([]);
                setFootballFilter([]);
                setsportsPriceFilter([]);
                setrunningShoeSizeFilter([]);
                settrainingShoeSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            const FootballFilterClick = async () => {
                try {
                const response = await axios.get('https://puma-i1u3.onrender.com/sports');
                const data = response.data;
                const FootballFilter = data.filter(item => item.sub_category_id === 14);
                setFootballFilter(FootballFilter);
                setRunningShoesFilter([]);
                setTrainingShoesFilter([]);
                setCricketFilter([]);
                setsportsPriceFilter([]);
                setrunningShoeSizeFilter([]);
                settrainingShoeSizeFilter([]);
                } catch (error) {
                console.error('Error fetching data:', error);
                }
            };

            // Filters according to price
            const SportsPriceFilter = async (lcost, hcost) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/filter5/5?lcost=${lcost}&hcost=${hcost}`);
                  const data = response.data;
                  setsportsPriceFilter(data);
                  setRunningShoesFilter([]);
                  setTrainingShoesFilter([]);
                  setCricketFilter([]);
                  setFootballFilter([]);
                  setrunningShoeSizeFilter([]);
                  settrainingShoeSizeFilter([]);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            };

            // Filters according to size
            const RunningShoeSizeFilter = async (shoesize) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/sports_size?sub_category_id=11&&size=${shoesize}`);
                  const data = response.data;
                  setrunningShoeSizeFilter(data);
                  setRunningShoesFilter([]);
                  setTrainingShoesFilter([]);
                  setCricketFilter([]);
                  setFootballFilter([]);
                  setsportsPriceFilter([]);
                  settrainingShoeSizeFilter([]);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            };

            const TrainingShoeSizeFilter = async (shoesize) => {
                try {
                  const response = await axios.get(`https://puma-i1u3.onrender.com/sports_size?sub_category_id=12&&size=${shoesize}`);
                  const data = response.data;
                  settrainingShoeSizeFilter(data);
                  setRunningShoesFilter([]);
                  setTrainingShoesFilter([]);
                  setCricketFilter([]);
                  setFootballFilter([]);
                  setsportsPriceFilter([]);
                  setrunningShoeSizeFilter([]);
                } catch (error) {
                  console.error('Error fetching data:', error);
                }
            };

            const renderData = ({ data }) => {
                if (data) {
                    if (data.length > 0) {
                        return (
                            <div className="container">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-4 p-5 text-black rounded listingSports_content">
                                    {data.map((item) => (
                                        <div className="col dark_goals" key={item._id} id="bottles">
                                            <Link to={`/sports_wear_details?sub_category_id=${params.sports}&&merchandise_id=${item.merchandise_id}`}>
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
                                                <li><a className="dropdown-item" href="#" onClick={RunningShoesFilterClick}>Running Shoes</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={TrainingShoesFilterClick}>Training & Gym Shoes</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={CricketFilterClick}>Cricket Equipments</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={FootballFilterClick}>Football Equipments</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="menDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Price
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="menDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => SportsPriceFilter(3000, 4000)}>₹ 3000-4000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => SportsPriceFilter(4000, 5000)}>₹ 4000-5000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => SportsPriceFilter(5000, 6000)}>₹ 5000-6000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => SportsPriceFilter(6000, 7000)}>₹ 6000-7000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => SportsPriceFilter(7000, 8000)}>₹ 7000-8000</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => SportsPriceFilter(8000, 9000)}>₹ 8000-9000</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="kidsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Running Shoe Size
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="kidsDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => RunningShoeSizeFilter(6)}>6</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => RunningShoeSizeFilter(7)}>7</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => RunningShoeSizeFilter(8)}>8</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => RunningShoeSizeFilter(9)}>9</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => RunningShoeSizeFilter(10)}>10</a></li>
                                            </ul>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#" id="kidsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Training Shoe Size
                                            </a>
                                            <ul className="dropdown-menu darknav bg-light" aria-labelledby="kidsDropdown">
                                                <li><a className="dropdown-item" href="#" onClick={() => TrainingShoeSizeFilter(6)}>6</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => TrainingShoeSizeFilter(7)}>7</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => TrainingShoeSizeFilter(8)}>8</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => TrainingShoeSizeFilter(9)}>9</a></li>
                                                <li><a className="dropdown-item" href="#" onClick={() => TrainingShoeSizeFilter(10)}>10</a></li>
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
                            RunningShoesFilter.length > 0
                                ? RunningShoesFilter
                                : TrainingShoesFilter.length > 0
                                ? TrainingShoesFilter
                                : CricketFilter.length > 0
                                ? CricketFilter
                                : FootballFilter.length > 0
                                ? FootballFilter
                                : sportsPriceFilter.length > 0
                                ? sportsPriceFilter
                                : runningShoeSizeFilter.length > 0
                                ? runningShoeSizeFilter
                                : trainingShoeSizeFilter.length > 0
                                ? trainingShoeSizeFilter
                                : sportsData,
                    })}

                </>
            );
        }
        
        export default ListingSports;
        