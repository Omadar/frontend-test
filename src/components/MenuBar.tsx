import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCart from "./ShoppingCart";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultData } from "@/redux/slices/dataSlices";
import { setDefaultProduct } from "@/redux/slices/productSlices";
import { setDefaultSize } from "@/redux/slices/sizeSlices";
import { setDefaultSpecialTechnic } from "@/redux/slices/specialTechnicSlices";
import { setDefaultTotal } from "@/redux/slices/totalSlices";
import { authSelector, logOut } from "@/redux/slices/authSlices";
import Profile from "./Profile";
import MenuIcon from "@mui/icons-material/Menu";
import { setLoading } from "@/redux/slices/loadingSlices";
import { dataInitialState, dataTotalState } from "@/services/dataDefault";
import { setConfirmOrder } from "@/redux/slices/confirmOrderSlices";
const MenuBar = () => {
  const [authProfile, setAuthProfile] = useState<string | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const authReducer = useSelector(authSelector);
  const orderProduction = () => {
    dispatch(setDefaultData(dataInitialState));
    dispatch(setDefaultProduct({}));
    dispatch(setDefaultSize({}));
    dispatch(setDefaultSpecialTechnic({}));
    dispatch(setConfirmOrder(false));
    dispatch(setDefaultTotal(dataTotalState));
    router.push("/CustomizePage");
  };
  const LogOut = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      router.push("/");
      dispatch(setLoading(false));
      dispatch(logOut());
    }, 2000);
  };
  useEffect(() => {
    setAuthProfile(sessionStorage.getItem("authProfile"));
  }, []);
  return (
    <>
      <Navbar expand="lg" className="zone-menuBar w-100">
        <Container fluid>
          <Navbar.Brand href="/">
            <Logo horizontal={true} />
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <div className="d-lg-none d-block">
              <ShoppingCart />
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <MenuIcon />
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {authReducer.isAuth && (
                <div className="profile-in-mobile">
                  <div className="img-profile-in-mobile">
                    <Image
                      className="img"
                      src={authReducer.imageUrl}
                      alt={authReducer.username}
                      // width={30}
                      // height={30}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="grp-email">
                    <p className="mb-0">{authReducer.email}</p>
                    <p className="mb-0">
                      {authReducer.username + " " + authReducer.surname}
                    </p>
                  </div>
                </div>
              )}
              {!authReducer.isAuth && (
                <>
                  <Nav.Link href="/" className="d-lg-none d-block">
                    เข้าสู่ระบบ
                  </Nav.Link>
                </>
              )}
              {authReducer.isAuth && (
                <Nav.Link href="/CustomizePage" className="d-lg-none d-block">
                  สั่งผลิต
                </Nav.Link>
              )}

              <Nav.Link href="">เกี่ยวกับเรา</Nav.Link>
              <Nav.Link href="">บริการ</Nav.Link>
              <Nav.Link href="">AI Inspiration</Nav.Link>
              <Nav.Link href="">วิธีสั่งผลิต</Nav.Link>
              <Nav.Link href="">ติดต่อสอบถาม</Nav.Link>
              {authReducer.isAuth && (
                <Nav.Link
                  href=""
                  onClick={LogOut}
                  className="d-lg-none d-block"
                >
                  ออกจากระบบ
                </Nav.Link>
              )}
            </Nav>
            <div className="g-right-menu">
              <div className="grp-shoppingCart">
                <ShoppingCart />
              </div>
              {authReducer.isAuth ? (
                <Profile />
              ) : (
                <Link href="/" className="btn-login">
                  <span>เข้าสู่ระบบ</span>
                  <AccountCircleIcon />
                </Link>
              )}

              <Button
                className="btn-customize"
                onClick={orderProduction}
                disabled={!authReducer.isAuth}
              >
                <span>สั่งผลิต</span>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
