import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import localFont from "next/font/local";
import Head from "next/head";
import MenuBar from "@/components/MenuBar";
import Loading from "@/components/Loading";
import ProductsPanel from "@/components/ProductsPanel";
import ModelsPanel from "@/components/ModelsPanel";
import SizePanel from "@/components/SizePanel";
import MaterialPanel from "@/components/MaterialPanel";
import AmountPanel from "@/components/AmountPanel";
import PrintingPanel from "@/components/PrintingPanel";
import CoatingPanel from "@/components/CoatingPanel";
import SpecialtechnicPanel from "@/components/SpecialtechnicPanel";
import ArtworkPanel from "@/components/ArtworkPanel";
import ProductSamplesPanel from "@/components/ProductSamplesPanel";
import NotePanel from "@/components/NotePanel";
import AddCartPanel from "@/components/AddCartPanel";
import ModalSpecialtechnic from "@/components/ModalSpecialtechnic";
import { useSelector } from "react-redux";
import { loadingSelector } from "@/redux/slices/loadingSlices";
import { authSelector } from "@/redux/slices/authSlices";
import { usePathname, useRouter } from "next/navigation";
const myFont = localFont({
  src: "../fonts/Prompt/Prompt-Regular.ttf",
  display: "swap",
});
const CustomizePage = () => {
  const loadingReducer = useSelector(loadingSelector);
  const authReducer = useSelector(authSelector);
  const pathname = usePathname();
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  useEffect(() => {
    if (!authReducer.isAuth) {
      if (pathname === "/CustomizePage") {
        router.push("/");
      }
    }
  }, []);
  if (!hasMounted) return null;
  if (!authReducer.isAuth) return null;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${myFont.className}`}>
        {loadingReducer && <Loading />}
        <MenuBar />
        <div className="zone-customize">
          <Container>
            <div className="grp-panel">
              <ProductsPanel />
              <ModelsPanel />
              <SizePanel />
              <MaterialPanel />
              <AmountPanel />
              <PrintingPanel />
              <CoatingPanel />
              <SpecialtechnicPanel />
              <ModalSpecialtechnic />
              <ArtworkPanel />
              <ProductSamplesPanel />
              <NotePanel />
              <AddCartPanel />
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};

export default CustomizePage;
