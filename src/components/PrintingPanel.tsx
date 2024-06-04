import React from "react";
import Image from "next/image";

const PrintingPanel = () => {
  return (
    <>
      <div className="zone-printingPanel">
        <div className="header-panel mb-4">
          <b>การพิมพ์</b>
        </div>
        <div className="grp-printing">
          <div className="box-printing active">
            <div className="img-printing">
              <Image
                src={
                  "https://cdn.digiboxs.com/dev/4a068da4-1624-45cf-bbbc-f7a2efda4663Artcard.png"
                }
                alt={"name"}
                width={65}
                height={65}
              />
            </div>
            <div className="printing-detail">
              <b className="mb-0">ด้านหน้า</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintingPanel;
