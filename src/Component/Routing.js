import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
// import Coupon from './Home/Coupon';
import Footer from './Footer';
import Home from './Home/Home';
import Main from './Home/Main';
import ListingLogic from './Listing/listingLogic';
import ListingAccessories from './Listing/listingAccessories';
import ListingWomen from './Listing/listingWomen';
import ListingMen from './Listing/listingMen';
import ListingKids from './Listing/listingKids';
import ListingSports from './Listing/listingSports';
import DetailsDisplay from './Details/detailsLogic';
import AccessoryDetails from './Details/accessory_details';
import PlaceOrder from './Orders/PlaceOrder';
import ViewOrder from './Orders/ViewOrder'

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                {/* <Coupon/> */}
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="Listing/:goals" element={<ListingLogic/>}/>
                        <Route path="ListingAccessories/:accessories" element={<ListingAccessories/>}/>
                        <Route path="ListingWomen/:women" element={<ListingWomen/>}/>
                        <Route path="ListingMen/:men" element={<ListingMen/>}/>
                        <Route path="ListingKids/:kids" element={<ListingKids/>}/>
                        <Route path="ListingSports/:sports" element={<ListingSports/>}/>
                        <Route path="sports_wear_details" element={<DetailsDisplay/>}/>
                        <Route path="accessory_details" element={<AccessoryDetails/>}/>
                        <Route path="placeOrder/:merchandiseName" element={<PlaceOrder/>}/>
                        <Route path="viewOrder" element={<ViewOrder/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;