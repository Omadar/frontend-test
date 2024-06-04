import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import products from "../../public/api/product.json";
import { useAppDispatch } from "@/redux/stroe";
import { setModel } from "@/redux/slices/productSlices";

const ProductsPanel = () => {
  const dispatch = useAppDispatch();
  const [hasMounted, setHasMounted] = useState(false);
  const [valueProduct, setValueProduct] = useState<string>("");
  useEffect(() => {
    setHasMounted(true);
  }, []);
  const onChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dataModel = products.products.filter((value) => {
      if (value.id.toString() == e.target.value) {
        return value;
      }
    });
    dispatch(setModel(dataModel[0]));
    setValueProduct(e.target.value);
  };
  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <div className="zone-productsPanel">
        <div className="header-panel mb-4">
          <b>สินค้า</b>
        </div>
        <div className="grp-form-select">
          <div>
            <Form.Select onChange={onChangeValue}>
              {products.products.map((product) => {
                return (
                  <option value={product.id} key={product.name}>
                    {product.name}
                  </option>
                );
              })}
            </Form.Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPanel;
