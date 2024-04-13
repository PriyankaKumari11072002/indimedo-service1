import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { useProductDtaWithIdQuery } from "../../services/apis/product";
import { calculateDiscountPercentage } from "../../ProductCard/ProductCard";
import SelectItems from "../../components/Common/Select";

export default function responsiveAddToCart({style}) {
  const [quantity, setQuantity] = useState(1);

  const [viewCartOpen, setviewCartOpen] = useState(false);

  
  return (
  <>
  <div  className=" w-[100%]  h-16  flex justify-around items-center bg-slate-400  md:hidden ">
<div>quantity
  
 <SelectItems
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={{ marginBottom: "5px", width: "50%" }}
      />

</div>
<div>ADD TO CART</div>
</div>
  </>
  );
}