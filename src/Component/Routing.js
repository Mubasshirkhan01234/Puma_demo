import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Coupon from './Home/Coupon';
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
import WomenDetails from './Details/women_details';
import MenDetails from './Details/men_details';
import KidsDetails from './Details/kids_details';
import SportsDetails from './Details/sports_details';
import PlaceOrder from './Orders/PlaceOrder';
import PlaceOrderAccessories from './Orders/PlaceOrder_accessories';
import PlaceOrderWomen from './Orders/PlaceOrder_women';
import PlaceOrderMen from './Orders/PlaceOrder_men';
import PlaceOrderKids from './Orders/PlaceOrder_kids';
import PlaceOrderSports from './Orders/PlaceOrder_sports';
import ShoppingCart from './Shopping Cart/ShoppingCart';
import ViewOrder from './Orders/ViewOrder';

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Coupon/>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="Listing/:goals" element={<ListingLogic/>}/>
                        <Route path="Listing_accessories/:accessories" element={<ListingAccessories/>}/>
                        <Route path="Listing_women/:women" element={<ListingWomen/>}/>
                        <Route path="Listing_men/:men" element={<ListingMen/>}/>
                        <Route path="Listing_kids/:kids" element={<ListingKids/>}/>
                        <Route path="Listing_sports/:sports" element={<ListingSports/>}/>
                        <Route path="goals_wear_details" element={<DetailsDisplay/>}/>
                        <Route path="accessory_details" element={<AccessoryDetails/>}/>
                        <Route path="women_wear_details" element={<WomenDetails/>}/>
                        <Route path="men_wear_details" element={<MenDetails/>}/>
                        <Route path="kids_wear_details" element={<KidsDetails/>}/>
                        <Route path="sports_wear_details" element={<SportsDetails/>}/>
                        <Route path="placeOrder/:merchandisename" element={<PlaceOrder/>}/>
                        <Route path="placeOrder_accessories/:merchandisename" element={<PlaceOrderAccessories/>}/>
                        <Route path="placeOrder_women/:merchandisename" element={<PlaceOrderWomen/>}/>
                        <Route path="placeOrder_men/:merchandisename" element={<PlaceOrderMen/>}/>
                        <Route path="placeOrder_kids/:merchandisename" element={<PlaceOrderKids/>}/>
                        <Route path="placeOrder_sports/:merchandisename" element={<PlaceOrderSports/>}/>
                        <Route path="shopping_cart" element={<ShoppingCart/>}/>
                        <Route path="viewOrder" element={<ViewOrder/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;