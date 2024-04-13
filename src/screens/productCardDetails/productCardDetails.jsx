import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";


import { useState } from "react";
import { calculateDiscountPercentage } from "../../ProductCard/ProductCard";

import { useLazyGetCartQuery, useProductDtaWithIdQuery } from "../../services/apis/product";
import ProductDetailImages from "./productDetailImages";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/Navbar";
import AddToCart from "./AddToCart";
import ProductDescriptionAndBenifits from "./productDescriptionAndBenifits";
import VeiwCardItems from "./veiwCardItems";
import SelectItems from "../../components/Common/Select";
import { useAddToCart } from "../../utils/common";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ProductCardDetails = () => {
  const [clickImages, setClickImages] = useState(false);
  const navigate = useNavigate();
  const {count} = useSelector((state)=>state.cart)
  const [clickImagesId, setClickImagesId] = useState("");
  const params = useParams();
  const { handleAddToCart1, viewCartOpen, setQuantity, quantity } = useAddToCart(); 
  const [getcartData,getCardDataResponse] = useLazyGetCartQuery();

useEffect(()=>{
  getcartData()
},[])
  const { data } = useProductDtaWithIdQuery(`/${params.id}`);

  const handleImages = useCallback(
    (images) => {
      setClickImages(true);
      setClickImagesId(images);
    },
    [params.id]
  );


  return (
    <>


      <div
        className="   mt-10   w-[85%]   "
        style={{display:'flex',justifyContent:'space-around',alignItems:"center"}}
      >

        <div className="flex justify-around align-middle  "    >

          <ProductDetailImages
            data={data}
            clickImages={clickImages}
            clickImagesId={clickImagesId}
            handleImages={handleImages}
          />
           

          <div    style={{ padding: "20px 80px" }}  className="hidden  lg:block">
            <h1  >{data?.title}</h1>
            <h4   style={{ marginTop: "15px" ,color:"green"}}>{data?.manufacturer}</h4>

            <h6 className="flex   "  style={{ marginTop: "10px" }}>
           

              <span className="text-gray-600  line-through">
          MRF&#8377;{data?.reagular_price} 
              </span>
              &nbsp;&nbsp;&#8377;{data?.sale_price}&nbsp;&nbsp;&nbsp;
              <span  className="text-[#008000]   hidden lg:block">
              &nbsp;&nbsp;&nbsp;&nbsp; {calculateDiscountPercentage(
                  data?.reagular_price,
                  data?.sale_price
                )}
                %&nbsp;
              </span>
              
            </h6>
            <ul  className="list-disc  mt-6">
              Product highlights:
              {data?.highlights.map((highlights)=>(
           <li>{highlights} </li>
              ))}
             
            </ul>


          </div>
         
        </div>

        <div style={{ width: "20%" }}>
      <AddToCart   data={data}   /> 
        {/* <VeiwCardItems /> */}
       

        </div>

      </div>

      <ProductDescriptionAndBenifits  data={data}/>

{!viewCartOpen?(      <div className=" h-16 p-2 flex justify-around  gap-4 sticky bottom-0 items-center  bg-slate-800 md:hidden border  ">
  <div  className="">

  <SelectItems

        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="bg-slate-400 p-2 text-center rounded  outline-none  border-none"
        
      />



  </div>
  <div className="w-[50%] bg-slate-400 p-2 text-center rounded"  onClick={()=>handleAddToCart1(data)}>ADD TO CART</div>
</div>  ):<div className=" h-16 p-2 flex justify-around  gap-4 sticky bottom-0 items-center  bg-slate-800 md:hidden border  ">
  <div  className="">


  </div>
  <div className="w-[50%]  text-center  bg-red-500" >
  <h4>Total: &#8377;{getCardDataResponse?.data?.totalAfterDiscount}</h4>
<h4>


{count} &nbsp;Items added</h4>

  </div>

  <div className="w-[50%] bg-slate-400 p-2 text-center rounded" onClick={()=>navigate('/cart')} >View Cart</div>
</div>}



 
    </>
  );
};

export default ProductCardDetails;
