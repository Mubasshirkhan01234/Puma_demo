import React from 'react';
// import ScrollReveal from 'scrollreveal';
import './Outlet1.css';

const Outlet = () => {

    // const sr = ScrollReveal({
    //     origin: 'top',
    //     distance: '60px',
    //     duration: 1500,
    //     delay: 400,
    //     reset: true
    //   })
    
    //   sr.reveal(`.outlet_image`, {origin: 'left'})

    return(
        <>
            {/* Outlet section */}
            <div className="container outlet_image">
                <img src="https://i.ibb.co/py62b7r/2023-07-01-6.png" alt="" className="img-fluid"></img>
                <img src="https://i.ibb.co/ZxhdT2S/2023-07-01-7.png" alt="" className="img-fluid"></img>
            </div>
            <hr className="custom_hr"></hr>
        </>
    )
}

export default Outlet;