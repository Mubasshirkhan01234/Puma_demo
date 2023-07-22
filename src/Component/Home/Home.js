import React from 'react';
// import Trending from "./Trending";
import Outlet1 from './Outlet1';
import Goals from './Goals';
import Nitro from './Nitro';
// import Recommendation from './Recommendation';


const Home = () => {
    return(
        <>
            {/* <Trending/> */}
            <Outlet1/>
            <Goals/>
            <Nitro/>
            {/* <Recommendation/> */}
        </>
    )
}

export default Home;