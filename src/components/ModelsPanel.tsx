import React, { useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { productSelector } from "@/redux/slices/productSlices";
import { useAppDispatch } from "@/redux/stroe";
import { setData } from "@/redux/slices/dataSlices";
import { sizeSelector } from "@/redux/slices/sizeSlices";

const ModelsPanel = () => {
  const sizeReducer = useSelector(sizeSelector);
  const productReducer = useSelector(productSelector);
  const dataProduct = JSON.parse(JSON.stringify(productReducer));
  const dispatch = useAppDispatch();
  const [activeBox, setActiveBox] = useState<string>("");
  const setDataModels = (model?: any): any => {
    const modelId = model.id;
    const data = dataProduct.models.filter((data: any) => {
      if (modelId == data.id) {
        return data;
      }
    });
    delete dataProduct.models;
    dataProduct.models = data;
    dispatch(
      setData({
        ...dataProduct,
        printing: { front: true },
        size: sizeReducer,
      })
    );
    setActiveBox(modelId.toString());
  };
  return (
    <div>
      <div className="zone-modelsPanel">
        <div className="header-panel mb-4">
          <b>โมเดล</b>
        </div>
        <div className="grp-models">
          {productReducer?.models.map((models) => {
            return (
              <div
                className={`box-models ${
                  activeBox == models.id.toString() ? "active" : ""
                }`}
                key={models.name}
                onClick={() => setDataModels(models)}
              >
                <div className="img-models">
                  <Image
                    src={models.imageUrl}
                    alt={models.name}
                    layout="fill"
                    objectFit="cover"
                    className="img"
                  />
                </div>
                <p className="text-name-models mb-0 mt-2 text-center">
                  <b>{models.name}</b>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModelsPanel;
