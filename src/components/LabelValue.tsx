import React, { HTMLAttributes } from "react";
export type LabelValueProps = {
  value?: any;
  valueArr?: any;
  label: string;
};
const LabelValue: React.FC<
  LabelValueProps & HTMLAttributes<HTMLDivElement>
> = ({ value, valueArr, label }) => {
  return (
    <div className="box-label-value">
      <div>
        <span>{label}</span>
      </div>
      <div>
        <b>{!valueArr && (value || "-")}</b>
        {valueArr &&
          valueArr.map((data: any) => {
            return (
              <p className="mb-0 text-right">
                <b>{data.name}</b>
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default LabelValue;
