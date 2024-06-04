import { authSelector, logOut } from "@/redux/slices/authSlices";
import { setLoading } from "@/redux/slices/loadingSlices";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
const Profile = () => {
  const [show, setShow] = useState(false);
  const authReducer = useSelector(authSelector);
  const dispatch = useDispatch();
  const router = useRouter();
  const LogOut = () => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(logOut());
      router.push("/");
    }, 2000);
  };
  const showProfileWidget = () => {
    setShow(!show);
  };
  return (
    <div className="zone-profile">
      <div className="box-profile" onClick={showProfileWidget}>
        <div className="email">
          <span>{authReducer.email}</span>
        </div>
        <div className="img-profile">
          <Image
            src={authReducer.imageUrl}
            alt={authReducer.username}
            layout="fill"
            objectFit="cover"
            className="img"
          />
        </div>
      </div>
      {show && (
        <div className="profile-widget">
          <div className="grp-profile-widget">
            <div className="img-profile-widget">
              <Image
                src={authReducer.imageUrl}
                alt={authReducer.username}
                layout="fill"
                objectFit="cover"
                className="img"
              />
            </div>
            <div className="grp-email-name">
              <p className="mb-0">{authReducer.email}</p>
              <p className="mb-0">
                {authReducer.username + " " + authReducer.surname}
              </p>
            </div>
          </div>
          <div>
            <Button className="btn-logout" onClick={LogOut}>
              ออกจากระบบ
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
