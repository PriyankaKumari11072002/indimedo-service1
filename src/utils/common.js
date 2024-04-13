import { useDispatch } from "react-redux";
import AddToCart from "../screens/productCardDetails/AddToCart";
import { useAddMutation, useGetCartQuery, useLazyGetCartQuery } from "../services/apis/product";
import { addProductToCart } from "../redux/features/cartSlice";
import { useState } from "react";



  export const useAddToCart = ()=>{
    const [quantity, setQuantity] = useState(1);
const [viewCartOpen, setviewCartOpen] = useState(false);

const [getcartData, response] = useLazyGetCartQuery();
const [AddToCart] = useAddMutation()
const dispatch = useDispatch()

const handleAddToCart1 = async (product) => {
    setviewCartOpen(true);

    try {
      await AddToCart({
        productId: product._id,
        count: quantity,
      }).then((item) =>
        getcartData().then((data) =>
          dispatch(addProductToCart(data?.data?.products))
        )
      );
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

return {handleAddToCart1,viewCartOpen,setQuantity,quantity}
  }