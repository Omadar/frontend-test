import products from "../../public/api/product.json";
import materials from "../../public/api/material.json";
import {
  ICreateOrderToCart,
  ISize,
  IModels,
  IMaterials,
} from "@/interface/createOrder";
const createOrderProductService = (() => {
  let createOrderToCart: ICreateOrderToCart;
  let valueModel = products.products[0];
  let valueSize: ISize = {};
  let model: IModels[];
  let material: IMaterials = materials.materials[0];
  const setDataProduct = (data: any) => {
    valueModel = data;
  };
  const getDataProduct = () => valueModel;
  const setValueSize = (data: any) => {
    valueSize = data;
    createOrderToCart = {
      ...valueModel,
      models: model,
      size: data,
    };
  };
  const getValueSize = () => valueSize;
  const setNewDataProductModel = (product: any, modelId: number) => {
    const dataModel = product.models.filter((data: any) => {
      return modelId == data.id;
    });
    model = dataModel[0];
    createOrderToCart = {
      ...valueModel,
      models: model,
      size: valueSize,
    };
  };
  const getDataMaterial = () => {
    return material;
  };
  const setDataMaterial = (data: any) => {
    material = data;
  };
  const getDataCreateOrderCart = () => createOrderToCart;
  const onCreateOrderCart = () => {
    createOrderToCart = {
      ...valueModel,
      models: model,
      size: valueSize,
      material: material,
    };
    return createOrderToCart;
  };
  return {
    setDataProduct,
    getDataProduct,
    setValueSize,
    getValueSize,
    setNewDataProductModel,
    getDataCreateOrderCart,
    setDataMaterial,
    getDataMaterial,
    onCreateOrderCart,
  };
})();

export default createOrderProductService;
