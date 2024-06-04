import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useAppDispatch } from "@/redux/stroe";
import { useSelector } from "react-redux";
import { sizeSelector, setSize } from "@/redux/slices/sizeSlices";
import { dataSelector, setData } from "@/redux/slices/dataSlices";

const SizePanel = () => {
  const dispatch = useAppDispatch();
  const sizeReducer = useSelector(sizeSelector);
  const dataReducer = useSelector(dataSelector);
  const [minValue, setMinValue] = useState<{ [name: string]: boolean }>({
    width: false,
    length: false,
    height: false,
  });
  const [value, setValue] = useState({
    width: 100,
    length: 100,
    height: 100,
  });
  const onChangeValueSize = (e: any) => {
    const { name, value } = e.target;
    setValue((prev) => {
      const valueName: any = { [name]: Number(value) };
      if (
        valueName?.width < 20 ||
        valueName?.length < 20 ||
        valueName?.height < 20
      ) {
        setMinValue({ [name]: true });
      } else {
        setMinValue({ [name]: false });
      }
      dispatch(setSize({ ...prev, [name]: Number(value) }));
      dispatch(
        setData({ ...dataReducer, size: { ...prev, [name]: Number(value) } })
      );
      return { ...prev, [name]: Number(value) };
    });
  };
  return (
    <div>
      <div className="zone-sizePanel">
        <div className="header-panel mb-4">
          <b>ขนาด</b>
        </div>
        <Form onChange={onChangeValueSize}>
          <div className="grp-field-size">
            <div className="field-size w-100">
              <InputGroup className="input-w mb-1">
                <InputGroup.Text>W</InputGroup.Text>
                <Form.Control
                  placeholder="ระบุขนาด"
                  value={sizeReducer.width.toString().replace(/^0+/, "")}
                  name={"width"}
                  type="number"
                />
              </InputGroup>
              <p className={`label mb-0 ${minValue.width && "active-error"}`}>
                Width: min 20 mm
              </p>
            </div>
            <div className="field-size w-100">
              <InputGroup className="input-l mb-1">
                <InputGroup.Text>L</InputGroup.Text>
                <Form.Control
                  placeholder="ระบุขนาด"
                  value={sizeReducer.length.toString().replace(/^0+/, "")}
                  name={"length"}
                  type="number"
                />
              </InputGroup>
              <p className={`label mb-0 ${minValue.length && "active-error"}`}>
                Lenght: min 20 mm
              </p>
            </div>
            <div className="field-size w-100">
              <InputGroup className="input-h mb-1">
                <InputGroup.Text>H</InputGroup.Text>
                <Form.Control
                  placeholder="ระบุขนาด"
                  value={sizeReducer.height.toString().replace(/^0+/, "")}
                  name={"height"}
                  type="number"
                />
              </InputGroup>
              <p className={`label mb-0 ${minValue.height && "active-error"}`}>
                Hight: min 20 mm
              </p>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SizePanel;
