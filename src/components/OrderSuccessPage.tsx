import React from "react";
import Logo from "./Logo";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

const OrderSuccessPage = () => {
  const router = useRouter();
  const close = () => {
    router.push("/");
  };
  return (
    <div className="zone-orderSuccess">
      <div className="box-orderSuccess">
        <div>
          <Logo vertical={true} logoBlack={true} />
        </div>
        <div>
          <p className="mb-0 text">ขอบคุณสำหรับคำสั่งซื้อของคุณ</p>
          <p>เพิ่มรายการสั่งซื้อของคุณไปยังระบบแล้ว</p>
        </div>
        <div>
          <Button className="btn-closePage" onClick={close}>
            ปิด
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
