import { dataSelector, setData } from "@/redux/slices/dataSlices";
import React, { useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
const NotePanel = () => {
  const [note, setNote] = useState<string>("");
  const dispatch = useDispatch();
  const dataReducer = useSelector(dataSelector);
  const setDataNote = (e: any) => {
    dispatch(setData({ ...dataReducer, note: e.target.value }));
    setNote(e.target.value);
  };
  return (
    <>
      <div className="zone-notePanel">
        <div className="header-panel mb-4">
          <b>หมายเหตุ</b>
        </div>
        <div className="grp-note">
          <FloatingLabel
            controlId="floatingTextarea2"
            label="ข้อมูลเพิ่มเติมที่ต้องการเกี่ยวกับสินค้านี้"
          >
            <Form.Control
              as="textarea"
              placeholder="ข้อมูลเพิ่มเติมที่ต้องการเกี่ยวกับสินค้านี้"
              style={{ height: "100px" }}
              value={note}
              onChange={setDataNote}
            />
          </FloatingLabel>
        </div>
      </div>
    </>
  );
};

export default NotePanel;
