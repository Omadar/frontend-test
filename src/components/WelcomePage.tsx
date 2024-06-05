import React from "react";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "@/redux/slices/authSlices";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { setDefaultData } from "@/redux/slices/dataSlices";
import { setDefaultProduct } from "@/redux/slices/productSlices";
import { setDefaultSize } from "@/redux/slices/sizeSlices";
import { setDefaultSpecialTechnic } from "@/redux/slices/specialTechnicSlices";
import { setDefaultTotal } from "@/redux/slices/totalSlices";
import { dataInitialState, dataTotalState } from "@/services/dataDefault";
import { setConfirmOrder } from "@/redux/slices/confirmOrderSlices";

const WelcomePage = () => {
  const router = useRouter();
  const authReducer = useSelector(authSelector);
  const dispatch = useDispatch();
  const goToOrderProduction = () => {
    dispatch(setDefaultData(dataInitialState));
    dispatch(setDefaultProduct({}));
    dispatch(setDefaultSize({}));
    dispatch(setDefaultSpecialTechnic({}));
    dispatch(setConfirmOrder(false));
    dispatch(setDefaultTotal(dataTotalState));
    router.push("/CustomizePage");
  };
  return (
    <div className="zone-welcomePage">
      <div className="box-welcome">
        <Logo vertical={true} />
        <p className="mb-0">
          ยินดีต้อนรับ คุณ {authReducer.username + " " + authReducer.surname}{" "}
        </p>
        <div className="grp-btnOrder">
          <p className="">สั่งผลิตสินค้ากับเราเลย !</p>
          <Button className="btn-orderProduction" onClick={goToOrderProduction}>
            สั่งผลิต
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
