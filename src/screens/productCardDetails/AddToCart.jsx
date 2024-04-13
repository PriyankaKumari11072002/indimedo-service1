import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  useAddMutation,
  useLazyGetCartQuery,
} from "../../services/apis/product";
import { Card, Typography, CardContent } from "@mui/material";
import { calculateDiscountPercentage } from "../../ProductCard/ProductCard";

import { priceDetails, addProductToCart } from "../../redux/features/cartSlice";
import SelectItems from "../../components/Common/Select";
import { useNavigate } from "react-router-dom";
import { useAddToCart } from "../../utils/common";
import { useEffect } from "react";

const AddToCart = ({ data }) => {
  const { handleAddToCart1, viewCartOpen, setQuantity, quantity } = useAddToCart(); // Use the useAddToCart hook

  const [getcartData,getCardDataResponse] = useLazyGetCartQuery();
console.log(getCardDataResponse?.data?.cartTotal,'detail')

useEffect(()=>{
  getcartData()
},[])
  const navigate = useNavigate();

  const { count } = useSelector((state) => state.cart);



  const [isTitleExpanded, setIsTitleExpanded] = useState(false);

  const toggleTitleExpansion = () => {
    setIsTitleExpanded(!isTitleExpanded);
  };

 

  return (
    <>
    {/* <button  onClick={()=>navigate(-1)}>Go back</button> */}
      {!viewCartOpen ? (
        <Card
          sx={{ minWidth: 275, paddingBottom: "30px" }}
          className="hidden md:block  "
        >
          <CardContent>
            <Typography
              variant="p"
              component="div"
              className="hidden  md:hidden lg:block"
            >
              {isTitleExpanded
                ? data?.title
                : `${data?.title.slice(0, 50)}${
                    data?.title.length > 50 ? "..." : ""
                  }`}
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  marginLeft: "500px",
                }}
                onClick={toggleTitleExpansion}
              >
                {isTitleExpanded ? "Show less" : "Show more"}
              </span>
            </Typography>
            <span className="hidden  md:block lg:hidden m-1">
              {data?.title}
            </span>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <h6 className="flex   " style={{ marginTop: "15px" }}>
             
                <span className="text-gray-600  line-through">
                &nbsp;&nbsp;MRF&#8377;{data?.reagular_price}
                </span>
<span>&nbsp;&nbsp; &#8377;{data?.sale_price}&nbsp;</span>
                <span className="text-[#008000]">
                  &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  {calculateDiscountPercentage(
                    data?.reagular_price,
                    data?.sale_price
                  )}
                  %&nbsp;
                </span>
              </h6>
            </Typography>

            <SelectItems
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={{ marginBottom: "5px", width: "50%", padding: "5px  1px" }}
            />

            <button
               onClick={() => handleAddToCart1(data)}
              className="bg-[#008000]  font-sans  font-light  p-3 mt-12 text-BLACK "
              style={{
                width: "100%",
                marginTop: "50PX",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              ADD TO CART
            </button>
          </CardContent>
        </Card>
      ) : (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, backgroundColor: "" }}
              color="text.secondary"
              gutterBottom
            >
              Total price of cart items :&nbsp; &#8377;{getCardDataResponse?.data?.totalAfterDiscount}
            </Typography>
            <Typography
              sx={{ fontSize: 14, backgroundColor: "" }}
              color="text.secondary"
              gutterBottom
            >
              {count} Items added
            </Typography>

            <button
        onClick={()=>navigate('/cart')}
              className="  bg-[#008000]  font-sans  font-light  p-3 mt-12 text-BLACK "
              style={{
                width: "100%",
                marginTop: "50PX",
                textAlign: "center",
                borderRadius: "10px",
                marginBottom:'20px'
              }}
            >
              View Cart
            </button>
          </CardContent>
        </Card>

        
      )}


    </>
  );
};

export default AddToCart;
