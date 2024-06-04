import React from "react";
import { Form } from "react-bootstrap";
import coating from "../../public/api/coating.json";
import { useDispatch, useSelector } from "react-redux";
import { dataSelector, setData } from "@/redux/slices/dataSlices";

const CoatingPanel = () => {
  const dataReducer = useSelector(dataSelector);
  const dispatch = useDispatch();
  const setDataCoating = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const data = coating.coatings.filter((value) => {
      return value.id.toString() === e.target.value.toString();
    });
    dispatch(setData({ ...dataReducer, coating: data[0] }));
  };
  return (
    <>
      <div className="zone-coatingPanel">
        <div className="header-panel mb-4">
          <b>การเคลือบ</b>
        </div>
        <div className="grp-coating">
          <div className="box-coating">
            <div>
              <Form.Select onChange={setDataCoating}>
                {coating.coatings.map((coating) => {
                  return (
                    <option value={coating.id} key={coating.name}>
                      <div className="grp-product">
                        <div>{coating.name}</div>
                      </div>
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoatingPanel;
