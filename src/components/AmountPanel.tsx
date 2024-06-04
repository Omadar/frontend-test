import React, { useState } from "react";
import material from "../../public/api/material.json";
import Calculator from "@/utils/calculator";
import createOrderProductService from "@/services/createOrderProductService";
import { useSelector } from "react-redux";
import { materialSelector } from "@/redux/slices/materialSlices";
import { useAppDispatch } from "@/redux/stroe";
import { dataSelector, setData } from "@/redux/slices/dataSlices";
import { setTotal, totalSelector } from "@/redux/slices/totalSlices";

const AmountPanel = () => {
  const controller = createOrderProductService;
  const totalReducer = useSelector(totalSelector);
  const materialReducer = useSelector(materialSelector);
  const dataReducer = useSelector(dataSelector);
  const dataMaterial = JSON.parse(JSON.stringify(materialReducer));
  const dispatch = useAppDispatch();
  const formatNumberWithCommas = Calculator.formatNumberWithCommas;
  const [activeBox, setActiveBox] = useState<string>("");
  const setDataMaterial = (data: any) => {
    const materials = material.materials;
    const dataMap = materialReducer?.materialPrice.filter((value) => {
      return value.id === data.id;
    });
    delete dataMaterial.materialPrice;
    dataMaterial.materialPrice = dataMap;
    const price = dataMaterial.materialPrice?.[0]?.price;
    const amount = dataMaterial.materialPrice?.[0]?.amount;
    const totalAmount = price * amount;
    const totalSpecTech = totalReducer.totalSpecTech;
    const totalSample = totalReducer.totalSample;
    const totalPrice = totalAmount + totalSpecTech + totalSample;
    const toatl = {
      totalPrice,
      totalAmount,
      totalSpecTech,
      totalSample,
      price,
      amount,
    };
    dispatch(
      setTotal({
        totalPrice,
        totalAmount,
        totalSpecTech,
        totalSample,
        price,
        amount,
      })
    );
    setActiveBox(data.id.toString());
    dispatch(
      setData({
        ...dataReducer,
        material: dataMaterial,
        printing: { front: true },
        total: toatl,
      })
    );
  };
  return (
    <div>
      <div className="zone-amountPanel">
        <div className="header-panel mb-4">
          <b>จำนวน</b>
        </div>
        <div className="grp-amount">
          {materialReducer?.materialPrice?.map((price, key) => {
            return (
              <div
                className={`box-amount ${
                  activeBox === price.id.toString() ? "active" : ""
                }`}
                key={key}
                onClick={() => setDataMaterial(price)}
              >
                <p>
                  <b>{price.amount} ชิ้น</b>
                </p>
                <p>{formatNumberWithCommas(price.price)} บาท / ชิ้น</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AmountPanel;
