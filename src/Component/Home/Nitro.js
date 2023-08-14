import React from 'react';
// import ScrollReveal from 'scrollreveal';
import './Nitro.css';

const Nitro = () => {

    // const sr = ScrollReveal({
    //     origin: 'top',
    //     distance: '60px',
    //     duration: 1500,
    //     delay: 400,
    //     reset: true
    //   })
    
    //   sr.reveal(`.nitro_image`, {origin: 'right'})

    return(
        <>
            {/* Nitro shoe section */}
            <div class="container nitro_image">
                <img src="https://i.ibb.co/tMHcB5B/2023-07-01-3.png" alt="" class="img-fluid" />
                <img src="https://i.ibb.co/BzS3F0q/2023-07-01-5.png" alt="" class="img-fluid" />
            </div>
        </>
    )
}

export default Nitro;