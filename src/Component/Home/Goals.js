import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import './Goals.css';
import { Link } from 'react-router-dom';

const base_url = "https://puma-i1u3.onrender.com";

const Goals = () => {

  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 400,
    reset: true
  })

  sr.reveal(`#goals_box`)

  const [Goals, setGoals] = useState([]);

  useEffect(() => {
    fetch(`${base_url}/goals`, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setGoals(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      {/* Goals section */}
      <h4 className="text-center custom_white">GEAR UP FOR YOUR GOALS</h4>
      <div className="container-fluid mt-3 text-center goals">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 p-5 text-black" id="goals_box">
          {Goals.map((item) => (
            <div className="col dark_goals" key={item._id}>
              <Link to={`./Listing/${item.sub_category_id}`}>
                <img src={item.image} alt={item.sub_category_name} className="rounded-2 img-fluid" />
                <h6 className="custom_white">{item.goal_name}</h6>
                <button type="submit" className="btn btn-secondary">{item.goal_button}</button>
              </Link>
              <hr className="custom_hr" />
            </div>
          ))}
        </div>
      </div>
      <hr className="custom_hr" />
    </>
  );
};

export default Goals;
