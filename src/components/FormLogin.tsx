import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Logo from "./Logo";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/slices/loadingSlices";
import { logIn } from "@/redux/slices/authSlices";

const FormLogin = () => {
  const [valueEmail, setValueEmail] = useState<string>("");
  const [valuePassword, setValuePassword] = useState<string>("");
  const [isValidateEmail, setIsValidateEmail] = useState<boolean>(false);
  const [isValidatePassword, setIsValidatePassword] = useState<boolean>(false);
  const dispatch = useDispatch();
  const Login = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (valueEmail !== "" && valuePassword !== "") {
      setIsValidateEmail(false);
      setIsValidatePassword(false);
      dispatch(setLoading(true));
      setTimeout(() => {
        dispatch(logIn(valueEmail));
        dispatch(setLoading(false));
      }, 2000);
    }
    if (valueEmail == "") {
      setIsValidateEmail(true);
    }
    if (valuePassword == "") {
      setIsValidatePassword(true);
    }
    if (valueEmail !== "") {
      setIsValidateEmail(false);
    }
    if (valuePassword !== "") {
      setIsValidatePassword(false);
    }
  };
  return (
    <>
      <div className="zone-formLogin">
        <div className="grp-logo">
          <Logo vertical={true} />
          <p>เข้าสู่ระบบ</p>
        </div>
        <div className="grp-loginLine">
          <Button className="btn-loginLine">
            <b>เข้าสู่ระบบผ่านไลน์</b>
          </Button>
          <p className="text-center">หรือ</p>
        </div>
        <Form onSubmit={Login}>
          <div className="box-formLogin">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>อีเมล</Form.Label>
              <Form.Control
                className="field-input"
                type="email"
                placeholder="ระบุอีเมล"
                value={valueEmail}
                onChange={(e) => setValueEmail(e.target.value)}
              />
              {isValidateEmail && (
                <p className="text-validate mb-0 mt-1">กรุณากรอกอีเมล</p>
              )}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>รหัสผ่าน</Form.Label>
              <Form.Control
                className="field-input"
                type="password"
                placeholder="ระบุรหัสผ่าน"
                value={valuePassword}
                minLength={6}
                onChange={(e) => setValuePassword(e.target.value)}
              />
              {isValidatePassword && (
                <p className="text-validate mb-0 mt-1">กรุณากรอกรหัสผ่าน</p>
              )}
            </Form.Group>
            <div className="grp-checkbox">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="ให้ฉันอยู่ในระบบต่อไป" />
              </Form.Group>
              <div>
                <Link href="#forgetPassword">
                  <span>ลืมรหัสผ่าน</span>
                </Link>
              </div>
            </div>
            <Button
              className="btn-submit-login"
              variant="primary"
              type="submit"
            >
              <b>เข้าสู่ระบบ</b>
            </Button>
            <div className="grp-resgister">
              <p className="mb-0 text-center">
                ยังไม่มีบัญชีกับเรา ?{" "}
                <Link href="#resgister">
                  <b>สร้างบัญชี</b>
                </Link>
              </p>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default FormLogin;
