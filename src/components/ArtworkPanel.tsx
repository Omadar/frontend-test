import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector, setData } from "@/redux/slices/dataSlices";

const ArtworkPanel = () => {
  const [activeArtwork, setActiveArtwork] = useState<boolean>(false);
  const [activeNotArtwork, setActiveNotArtwork] = useState<boolean>(false);
  const dispatch = useDispatch();
  const dataReducer = useSelector(dataSelector);
  const setDataArtwork = (
    isArtwork: boolean,
    isNotArtwork: boolean,
    name: string
  ) => {
    setActiveArtwork(isArtwork);
    setActiveNotArtwork(isNotArtwork);
    const data = { artwork: isArtwork, name };
    dispatch(setData({ ...dataReducer, artWork: data }));
  };
  return (
    <>
      <div className="zone-artworkPanel">
        <div className="header-panel mb-4">
          <b>อาร์ตเวิร์ก</b>
        </div>
        <div className="grp-artwork">
          <div
            className={`box-artwork ${activeNotArtwork ? "active" : ""}`}
            onClick={() => setDataArtwork(false, true, "ไม่ใช้อาร์ตเวิร์ก")}
          >
            <div className="img-artwork">
              <Image
                src={
                  "https://cdn.digiboxs.com/dev/ba8ee5a1-41bc-482d-a095-7d499577e7abEmbossing.png"
                }
                alt={"name"}
                width={65}
                height={65}
              />
            </div>
            <div className="artwork-detail">
              <p className="mb-0">
                <b>ไม่ใช้อาร์ตเวิร์ก</b>
              </p>
              <p className="mb-0">
                เลือกตัวเลือกนี้เมื่อคุณมีไฟล์งาน
                หรือสินค้าเป็นกล่องเปล่าไม่พิมพ์ลาย
              </p>
            </div>
          </div>
          <div
            className={`box-artwork ${activeArtwork ? "active" : ""}`}
            onClick={() => setDataArtwork(true, false, "อาร์ตการ์ต 1 หน้า")}
          >
            <div className="img-artwork">
              <Image
                src={
                  "https://cdn.digiboxs.com/dev/ba8ee5a1-41bc-482d-a095-7d499577e7abEmbossing.png"
                }
                alt={"name"}
                layout="fill"
                objectFit="cover"
                className="img"
              />
            </div>
            <div className="artwork-detail">
              <p className="mb-0">
                <b>อาร์ตการ์ต 1 หน้า</b>
              </p>
              <p className="mb-0">
                ต้องการให้เราออกแบบอาร์ตเวิร์กสินค้า และผลิตสินค้า
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtworkPanel;
