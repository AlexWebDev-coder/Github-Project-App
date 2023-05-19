import ReactDOM from "react-dom/client";

import ToastConfigContainer from "./ui/toast-config/index.tsx";

import Router from "./Router.tsx";
import AppLayout from "./layouts/index.tsx";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store.ts";

import "../src/public/style/reset.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <AppLayout>
        <Router />
        <ToastConfigContainer />
      </AppLayout>
    </Provider>
  </BrowserRouter>
);
