import React, { HTMLAttributes } from "react";
import Image from "next/image";
import logo from "../images/logo.svg";
import logoB from "../images/logoBlack.svg";
export type LogoProps = {
  vertical?: boolean;
  horizontal?: boolean;
  logoBlack?: boolean;
};
const Logo: React.FC<LogoProps & HTMLAttributes<HTMLDivElement>> = ({
  vertical,
  horizontal,
  logoBlack,
}) => {
  return (
    <>
      {vertical && (
        <div className="logo-vertical">
          <div>
            <Image src={logoBlack ? logoB : logo} alt="logo" />
          </div>
          <b>DIGIBOXS</b>
        </div>
      )}
      {horizontal && (
        <div className="logo-menuBar">
          <Image src={logoBlack ? logoB : logo} alt="logo" width={40} />
          <b>DIGIBOXS</b>
        </div>
      )}
    </>
  );
};

export default Logo;
