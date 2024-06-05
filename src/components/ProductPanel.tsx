import React, { useState } from "react";
import Image from "next/image";
import { Collapse } from "react-bootstrap";
import { useSelector } from "react-redux";
import { cartSelector } from "@/redux/slices/cartSlices";
import Size from "@/utils/size";
import Calculator from "@/utils/calculator";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LabelValue from "./LabelValue";

const ProductPanel = () => {
  const [open, setOpen] = useState<boolean>(true);
  const formatNumberDecimalWithCommas =
    Calculator.formatNumberDecimalWithCommas;
  const formatNumberWithCommas = Calculator.formatNumberWithCommas;
  const cartReducer = useSelector(cartSelector);
  return (
    <>
      {cartReducer?.map((data: any) => {
        const nameProduct = data?.name;
        const valueSize = Size.sizeValue(data.size);
        const valueMatrial = data?.material?.name
          ? data?.material?.name + " • " + data?.material?.gram + " แกรม"
          : "-";
        const valuePrinting = data?.printing?.front && "ด้านหน้า";
        const valueCoating = data?.coating?.name;
        const valueSpecialTechnic = data?.specialTechnic;
        const valueArtwork = data?.artWork?.name;
        const isArtwork = data?.artWork?.artwork;
        const valueProductSample = data?.productSample?.name;
        const valueNote = data?.note;
        return (
          <div className="zone-productDetail">
            <div className="header-panel">
              <h4>{nameProduct}</h4>
            </div>
            <div className="grp-productImg-detail">
              <div className="img-model">
                <Image
                  src={data.models[0].imageUrl}
                  alt={data.name}
                  width={100}
                  height={100}
                />
              </div>
              <div className="detail">
                <div>
                  <p>
                    ขนาด {valueSize}, {valueMatrial}
                  </p>
                  <p>
                    จำนวน {formatNumberWithCommas(data?.total?.amount)} ชิ้น{" "}
                    {formatNumberDecimalWithCommas(data?.total?.price)}/ชิ้น
                  </p>
                </div>
                <b>
                  {formatNumberDecimalWithCommas(data?.total?.totalPrice)} บาท
                </b>
              </div>
            </div>
            <div className="grp-productDetail">
              <div
                className="open-productDetail"
                onClick={() => setOpen(!open)}
              >
                <span>
                  รายละเอียดสินค้า
                  {open ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                </span>
              </div>
              <Collapse in={open}>
                <div>
                  <LabelValue value={valueSize} label={"ขนาด"} />
                  <LabelValue value={valueMatrial} label={"วัสดุ"} />
                  <LabelValue value={valuePrinting} label={"พิมพ์"} />
                  <LabelValue value={valueCoating} label={"เคลือบ"} />
                  <LabelValue
                    valueArr={valueSpecialTechnic}
                    label={"เทคนิคพิเศษ"}
                  />
                  <LabelValue value={valueArtwork} label={"อาร์ตเวิร์ก"} />
                  {!isArtwork ? (
                    <LabelValue value={"-"} label={"ลิงก์ไฟล์งานอาร์ตเวิร์ก"} />
                  ) : (
                    <LabelValue
                      value={"artwork.pdf"}
                      label={"ลิงก์ไฟล์งานอาร์ตเวิร์ก"}
                    />
                  )}
                  <LabelValue
                    value={valueProductSample}
                    label={"ตัวอย่างสินค้า"}
                  />
                  <LabelValue value={valueNote} label={"หมายเหตุ"} />
                </div>
              </Collapse>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductPanel;
