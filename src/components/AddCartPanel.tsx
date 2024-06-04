import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { dataSelector, setData } from "@/redux/slices/dataSlices";
import { useDispatch, useSelector } from "react-redux";
import { totalSelector } from "@/redux/slices/totalSlices";
import Calculator from "@/utils/calculator";
import { addToCart } from "@/redux/slices/cartSlices";
import { setLoading } from "@/redux/slices/loadingSlices";
const AddCartPanel = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const dataReducer = useSelector(dataSelector);
  const totalReducer = useSelector(totalSelector);
  const formatNumberDecimalWithCommas =
    Calculator.formatNumberDecimalWithCommas;
  const formatNumberWithCommas = Calculator.formatNumberWithCommas;
  const goToCart = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(addToCart(dataReducer));
      router.push("/CartPage");
    }, 2000);
  };
  const totalAmount = totalReducer.totalPrice / totalReducer.amount;
  return (
    <>
      <div className="zone-addCart">
        <div className="grp-price-detail">
          <p className="mb-0">
            <b>{formatNumberDecimalWithCommas(totalReducer.totalPrice)} บาท</b>
          </p>
          <p className="mb-0">
            {totalAmount ? formatNumberWithCommas(totalAmount) : 0} บาท x{" "}
            {totalReducer.amount} ชิ้น
          </p>
        </div>
        <div className="grp-btn-cart">
          <Button onClick={goToCart} className="btn-cart">
            <ShoppingCartIcon />
            <span>เพิ่มไปยังรถเข็น</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddCartPanel;
