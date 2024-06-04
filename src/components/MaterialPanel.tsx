import React, { useState } from "react";
import Image from "next/image";
import material from "../../public/api/material.json";
import { useAppDispatch } from "@/redux/stroe";
import { setData } from "@/redux/slices/dataSlices";
import { dataSelector } from "@/redux/slices/dataSlices";
import { useSelector } from "react-redux";
import { setMaterialPrice } from "@/redux/slices/materialSlices";

const MaterialPanel = () => {
  const dataReducer = useSelector(dataSelector);
  const dispatch = useAppDispatch();
  const [activeBox, setActiveBox] = useState<string>("");
  const setDataMaterial = (data: any) => {
    setActiveBox(data.id.toString());
    dispatch(setMaterialPrice(data));
    dispatch(setData({ ...dataReducer, material: data }));
  };
  return (
    <div>
      <div className="zone-materialPanel">
        <div className="header-panel mb-4">
          <b>วัสดุ</b>
        </div>
        <div className="grp-material">
          {material.materials.map((materials, key) => {
            return (
              <div
                className={`box-material ${
                  activeBox === materials.id.toString() ? "active" : ""
                }`}
                key={key}
                onClick={() => setDataMaterial(materials)}
              >
                <div className="img-material">
                  <Image
                    src={materials.imageUrl}
                    alt={"name"}
                    width={65}
                    height={65}
                  />
                </div>
                <div className="material-detail">
                  <p className="mb-0">{materials.name}</p>
                  <p className="mb-0">{materials.gram} แกรม</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MaterialPanel;
