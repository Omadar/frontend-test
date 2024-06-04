import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/app.scss";
import "@/styles/customize.scss";
import "@/styles/cart.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/stroe";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
export default App;
