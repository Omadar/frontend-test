import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, confirmOrder } from "@/redux/slices/cartSlices";
import Calculator from "@/utils/calculator";
import { setConfirmOrder } from "@/redux/slices/confirmOrderSlices";
import { setLoading } from "@/redux/slices/loadingSlices";
import { setDefaultData } from "@/redux/slices/dataSlices";
import { setDefaultProduct } from "@/redux/slices/productSlices";
import { setDefaultSize } from "@/redux/slices/sizeSlices";
import { setDefaultSpecialTechnic } from "@/redux/slices/specialTechnicSlices";
import { setDefaultTotal } from "@/redux/slices/totalSlices";

const OrderConfirmPanel = () => {
  const formatNumberDecimalWithCommas =
    Calculator.formatNumberDecimalWithCommas;
  const cartReducer = useSelector(cartSelector);
  const total = cartReducer[0]?.total?.totalPrice;
  const dispatch = useDispatch();
  const confirmOrderSuccess = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setDefaultData({}));
      dispatch(setDefaultProduct({}));
      dispatch(setDefaultSize({}));
      dispatch(setDefaultSpecialTechnic({}));
      dispatch(setDefaultTotal({}));
      dispatch(confirmOrder([]));
      dispatch(setLoading(false));
      dispatch(setConfirmOrder(true));
    }, 2000);
  };
  return (
    <div className="zone-orderConfirmPanel">
      <div className="grp-price">
        <b>{formatNumberDecimalWithCommas(total)} บาท</b>
        <p className="mb-0">(ยังไม่รวมค่าจัดส่ง และภาษีมูลค่าเพิ่ม 7%)</p>
      </div>
      <div>
        <Button onClick={confirmOrderSuccess} className="btn-cornfirm">
          ยืนยันการสั่งซื้อ
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmPanel;
