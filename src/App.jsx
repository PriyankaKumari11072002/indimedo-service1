
import React, { Suspense, useEffect, useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";



import Loading from "./components/Common/Loading/loading";
import Header1 from "./components/header/header1";

import Example1 from "./components/trial/example";
import Signup from "./screens/Signup/signup.jsx/Signup";
import Login from "./screens/login/login";
import ResponsiveProductCardDetail from "./screens/productCardDetails/responsiveAddToCart";
const ProductCard = React.lazy(() => import("./ProductCard/ProductCard"));
const Home = React.lazy(() => import("./screens/home/Home"));
const SearchResults = React.lazy(() => import("./components/search/searchResults"));
const ProductCardDetails = React.lazy(() => import("./screens/productCardDetails/productCardDetails"));
const Cart = React.lazy(() => import("./screens/Cart/Cart"));
import { useAddToCart } from "./utils/common";
import Offers from "./components/offers/offers";
import Search1 from "./components/search/Search";
import Radio from "./common/radio";
import City from "./common/city";



// const Cart1 = React.lazy(() => import("./screens/Cart/cart1"));
export default function App() {

//  console.log(handleAddToCart1("data"),'handleAddToCart1')


  return (
    <React.Fragment>

      <BrowserRouter>
      {/* className="overscroll-y-auto  overscroll-x-none "  ,display:'felx',justifyContent:'center',alignItems:"center",flexDirection:'column' */}
      <div style={{ width: '100%', height: '100vh',overflowX:'hidden' }} >
  <div style={{ width: '100%' }}>

    {/* Content */}
    {/* <ResponsiveProductCardDetail/> */}

    <Example1/>
    <Search1/>

    {/* <City/> */}
    {/* <Radio/> */}
    
  </div>
  <div style={{ width: '87%',margin:'0 auto'  }}>
    <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<ProductCard />} />
        <Route path="/product/:id" element={<ProductCardDetails />} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search-results/:id" element={<SearchResults />} />
      </Routes>
    </Suspense>
  </div>
  
{/* <div  className=" w-[100%] fixed h-16  flex justify-around items-center bg-slate-400  md:hidden ">
<div  className=" w-[40%]  bg-slate-800 p-2 text-center rounded">QUANTITY</div>
<div   className=" w-[40%]  bg-slate-800 p-2 text-center rounded">ADD TO CART</div>
</div> */}

</div>


         
       
      </BrowserRouter>
    </React.Fragment>
  );
}
