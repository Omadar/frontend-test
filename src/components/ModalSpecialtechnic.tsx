import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@mui/icons-material/Close";
import localFont from "next/font/local";
import specialTechnic from "../../public/api/special-technic.json";
import Calculator from "@/utils/calculator";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { modalSelector, setModal } from "@/redux/slices/modalSlice";
import { ISpecialTechnic } from "@/interface/createOrder";
import {
  setSpecialTechnic,
  specialTechnicSelector,
} from "@/redux/slices/specialTechnicSlices";
import { dataSelector, setData } from "@/redux/slices/dataSlices";
import { setTotal, totalSelector } from "@/redux/slices/totalSlices";

const myFont = localFont({
  src: "../fonts/Prompt/Prompt-Regular.ttf",
  display: "swap",
});
const ModalSpecialtechnic = () => {
  const formatNumberDecimalWithCommas =
    Calculator.formatNumberDecimalWithCommas;
  const totalPrice = Calculator.totalPrice;
  const modalReducer = useSelector(modalSelector);
  const dataReducer = useSelector(dataSelector);
  const totalReducer = useSelector(totalSelector);
  const specialTechnicReducer = useSelector(specialTechnicSelector);
  const dispatch = useDispatch();
  const [value, setValue] = useState<ISpecialTechnic[]>(specialTechnicReducer);
  const handleClose = () => {
    dispatch(setModal(false));
  };
  const setDataSpecialtechnic = (data: any) => {
    const insertAt = 1;
    const dataSpecTech = [
      ...specialTechnicReducer.slice(0, insertAt),
      { ...data },
      ...specialTechnicReducer.slice(insertAt),
    ];
    const ids = dataSpecTech.map(({ id }) => id);
    const filtered = dataSpecTech.filter(
      ({ id }, index) => !ids.includes(id, index + 1)
    );
    dispatch(setSpecialTechnic(filtered));
    setValue(filtered);
  };
  const confirmDataSt = () => {
    const totalSpecTech = totalPrice(value);
    const totalSample = totalReducer.totalSample;
    const totalprice = totalReducer.totalAmount + totalSpecTech + totalSample;
    const total = {
      totalPrice: totalprice,
      totalAmount: totalReducer.totalAmount,
      totalSpecTech: totalSpecTech,
      totalSample: totalSample,
      price: totalReducer.price,
      amount: totalReducer.amount,
    };
    dispatch(setTotal(total));
    dispatch(setSpecialTechnic(value));
    dispatch(setData({ ...dataReducer, specialTechnic: value, total: total }));
    handleClose();
  };
  return (
    <>
      <Modal
        show={modalReducer}
        onHide={handleClose}
        className={`${myFont.className} modal-specialTechnic`}
      >
        <Modal.Header>
          <div></div>
          <Modal.Title>เทคนิคพิเศษ</Modal.Title>
          <Button onClick={handleClose} className="btn-handleClose">
            <CloseIcon style={{ color: "#FF4F01" }} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="zone-listSpecialtechnic">
            {specialTechnic.specialTechnic.map((specialTechnic) => {
              const active = specialTechnicReducer.filter((id) => {
                if (id.id === specialTechnic.id) {
                  return { id: id.id, active: true };
                }
              });
              return (
                <div
                  className={`box-listSpecialtechnic ${
                    active[0]?.id === specialTechnic.id ? "active" : ""
                  }`}
                  key={specialTechnic.name}
                  onClick={() => setDataSpecialtechnic(specialTechnic)}
                >
                  <div className="grp-list">
                    <div className="img-listSpecialtechnic">
                      <Image
                        src={specialTechnic.imageUrl}
                        alt={"namm"}
                        width={50}
                        height={50}
                      />
                    </div>
                    <p className="mb-0">{specialTechnic.name}</p>
                  </div>
                  <div className="grp-price">
                    <span>
                      <b>
                        {formatNumberDecimalWithCommas(specialTechnic.price)}
                      </b>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-cancle" onClick={handleClose}>
            ยกเลิก
          </Button>
          <Button className="btn-confirm" onClick={confirmDataSt}>
            ยืนยัน
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalSpecialtechnic;
