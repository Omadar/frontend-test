import { ICreateOrderToCart, ITotal } from "@/interface/createOrder";
import products from "../../public/api/product.json";
import material from "../../public/api/material.json";
import coating from "../../public/api/coating.json";

const price = material.materials[0].materialPrice[0].price;
const amount = material.materials[0].materialPrice[0].amount;
const totalAmount = price * amount;
const totalSpecTech = 0;
const totalSample = 0;
const totalPrice = totalAmount + totalSpecTech + totalSample;

export const dataInitialState: ICreateOrderToCart = {
  ...products.products[0],
  size: { width: 100, length: 100, height: 100 },
  printing: { front: true },
  material: material.materials[0],
  coating: coating.coatings[0],
  artWork: { artwork: false, name: "ไม่ใช้อาร์ตเวิร์ก" },
  productSample: {
    isMockupProof: false,
    name: "Soft and Online Proof",
    price: 0,
  },
  total: {
    totalPrice: 0,
    totalAmount: 0,
    totalSpecTech: 0,
    totalSample: 0,
    price: 0,
    amount: 0,
  },
};

export const dataTotalState: ITotal = {
  totalPrice,
  totalAmount,
  totalSpecTech,
  totalSample,
  price,
  amount,
};
