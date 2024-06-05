import React from "react";
import { Button } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "@/redux/slices/cartSlices";
import { useRouter } from "next/router";
import { setConfirmOrder } from "@/redux/slices/confirmOrderSlices";

const ShoppingCart = () => {
  const cartReducer = useSelector(cartSelector);
  const amountProduct = cartReducer.length;
  const router = useRouter();
  const dispatch = useDispatch();
  const btnCart = () => {
    dispatch(setConfirmOrder(false));
    router.push("/CartPage");
  };
  return (
    <>
      <Button className="btn-cart" onClick={btnCart}>
        <ShoppingCartIcon />
        {amountProduct > 0 && (
          <div className="amount">
            <span>{amountProduct}</span>
          </div>
        )}
      </Button>
    </>
  );
};

export default ShoppingCart;
