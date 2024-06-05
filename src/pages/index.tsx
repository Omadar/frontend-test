import Head from "next/head";
import LoginPage from "./LoginPage";
import WelcomePage from "../components/WelcomePage";
import MenuBar from "@/components/MenuBar";
import localFont from "next/font/local";
import Loading from "@/components/Loading";
import { useSelector } from "react-redux";
import { loadingSelector } from "@/redux/slices/loadingSlices";
import { authSelector } from "@/redux/slices/authSlices";
const myFont = localFont({
  src: "../fonts/Prompt/Prompt-Regular.ttf",
  display: "swap",
});

export default function Home() {
  const authReducer = useSelector(authSelector);
  const loadingReducer = useSelector(loadingSelector);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${myFont.className}`}>
        <MenuBar />
        {!authReducer.token && <LoginPage />}
        {authReducer.token && <WelcomePage />}
        {loadingReducer && <Loading />}
      </main>
    </>
  );
}
