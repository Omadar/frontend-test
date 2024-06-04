import React, { useState } from "react";
import Image from "next/image";
import { IMockup, ILink, IProductSample } from "@/interface/createOrder";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector, setData } from "@/redux/slices/dataSlices";
import { setTotal, totalSelector } from "@/redux/slices/totalSlices";

const ProductSamplesPanel = () => {
  const dispatch = useDispatch();
  const dataReducer = useSelector(dataSelector);
  const totalReducer = useSelector(totalSelector);
  const [activeLink, setActiveLink] = useState<boolean | undefined>(false);
  const [activeMockup, setActiveMockup] = useState<boolean | undefined>(false);
  const dataLink = {
    select: {
      isLink: true,
      price: 0,
    },
    notSelect: {
      isLink: false,
      price: 0,
    },
  };
  const dataMockup = {
    select: {
      isMockup: true,
      price: 300,
    },
    notSelect: {
      isMockup: false,
      price: 0,
    },
  };
  const mockupProof: IProductSample = {
    isMockupProof: true,
    name: "Mockup Proof",
    price: 300,
  };
  const notMockupProof: IProductSample = {
    isMockupProof: false,
    name: "Soft and Online Proof",
    price: 0,
  };
  const setDataProductSample = (
    link?: ILink,
    mockup?: IMockup,
    data?: IProductSample
  ) => {
    const totalAmount = totalReducer.totalAmount;
    const totalSpecTech = totalReducer.totalSpecTech;
    const totalSample: any = data?.price;
    const totalPrice = totalAmount + totalSpecTech + totalSample;
    const total = {
      totalPrice: totalPrice,
      totalAmount: totalAmount,
      totalSpecTech: totalSpecTech,
      totalSample: totalSample,
      price: totalReducer.price,
      amount: totalReducer.amount,
    };
    dispatch(
      setTotal({
        totalPrice: totalPrice,
        totalAmount: totalAmount,
        totalSpecTech: totalSpecTech,
        totalSample: totalSample,
        price: totalReducer.price,
        amount: totalReducer.amount,
      })
    );
    setActiveLink(link?.isLink);
    setActiveMockup(mockup?.isMockup);

    dispatch(setData({ ...dataReducer, productSample: data, total: total }));
  };
  return (
    <>
      <div className="zone-productSamplesPanel">
        <div className="header-panel mb-4">
          <b>ตัวอย่างสินค้า</b>
        </div>
        <div className="grp-productSamplesPanel">
          <div
            className={`box-productSamplesPanel ${activeLink ? "active" : ""}`}
            onClick={() =>
              setDataProductSample(
                dataLink.select,
                dataMockup.notSelect,
                notMockupProof
              )
            }
          >
            <div className="productSample-detail">
              <div className="img-productSamplesPanel">
                <Image
                  src={
                    "https://cdn.digiboxs.com/dev/ba8ee5a1-41bc-482d-a095-7d499577e7abEmbossing.png"
                  }
                  alt={"name"}
                  width={65}
                  height={65}
                />
              </div>
              <div className="productSamplesPanel-detail">
                <p className="mb-0">
                  <b>Soft and Online Proof</b>
                </p>
                <p className="mb-0">
                  ส่งลิงก์ไฟล์ PDF และคลิป VDO ตัวอย่างสินค้าให้ตรวจสอบก่อนพิมพ์
                </p>
                <b className="d-value-none">ฟรี</b>
              </div>
            </div>
            <div className="productSample-price">
              <span>
                <b>ฟรี</b>
              </span>
            </div>
          </div>
          <div
            className={`box-productSamplesPanel ${
              activeMockup ? "active" : ""
            }`}
            onClick={() =>
              setDataProductSample(
                dataLink.notSelect,
                dataMockup.select,
                mockupProof
              )
            }
          >
            <div className="productSample-detail">
              <div className="img-productSamplesPanel">
                <Image
                  src={
                    "https://cdn.digiboxs.com/dev/ba8ee5a1-41bc-482d-a095-7d499577e7abEmbossing.png"
                  }
                  alt={"name"}
                  width={65}
                  height={65}
                />
              </div>
              <div className="productSamplesPanel-detail">
                <p className="mb-0">
                  <b>Mockup Proof</b>
                </p>
                <p className="mb-0">
                  ขึ้นรูปตัวอย่างสินค้า โดยไม่มีเทคนิคพิเศษ และการเคลือบ
                  ให้ตรวจสอบ
                </p>
                <b className="d-value-none">300.00</b>
              </div>
            </div>
            <div className="productSample-price">
              <span>
                <b>300.00</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSamplesPanel;
