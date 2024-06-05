import { setModal } from "@/redux/slices/modalSlice";
import {
  setSpecialTechnic,
  specialTechnicSelector,
} from "@/redux/slices/specialTechnicSlices";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Calculator from "@/utils/calculator";
import { dataSelector, setData } from "@/redux/slices/dataSlices";
const SpecialtechnicPanel = () => {
  const dispatch = useDispatch();
  const dataReducer = useSelector(dataSelector);
  const specialTechnicReducer = useSelector(specialTechnicSelector);
  const amountSpecialTechnicReducer = specialTechnicReducer.length;
  const formatNumberDecimalWithCommas =
    Calculator.formatNumberDecimalWithCommas;

  const removeSpecTech = (id: number) => {
    const value = specialTechnicReducer.filter((data) => {
      return data.id !== id;
    });
    dispatch(setSpecialTechnic(value));
    dispatch(setData({ ...dataReducer, specialTechnic: value }));
  };
  return (
    <>
      <div className="zone-SpecialtechnicPanel">
        <div className="header-panel mb-4">
          <b>เทคนิคพิเศษ</b>
          <p className="mb-0">
            จำนวน {amountSpecialTechnicReducer} เทคนิคพิเศษ
          </p>
        </div>
        <div className="grp-specialtechnic">
          <div className="value-specialtechnic">
            {specialTechnicReducer.map((data) => {
              return (
                <div className="grp-valueSpecTech">
                  <div className="box-specialtechnic">
                    <div>
                      <Image
                        src={data.imageUrl}
                        alt={data.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="valueDetail">
                      <b className="mb-0">{data.name}</b>
                      <b className="mb-0">
                        {formatNumberDecimalWithCommas(data.price)}
                      </b>
                    </div>
                  </div>
                  <div className="box-btn">
                    <Button
                      className="btn-remove-specTech"
                      onClick={() => removeSpecTech(data.id)}
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4">
            <Button
              onClick={() => dispatch(setModal(true))}
              className="btn-specialtechnic"
            >
              เพิ่มเทคนิคพิเศษ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialtechnicPanel;
