import ReactDOM from "react-dom/client";

import Router from "./Router.tsx";
import AppLayout from "./layouts/index.tsx";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store.ts";

import "../src/public/style/reset.css";
import "../src/public/style/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <AppLayout>
        <Router />
      </AppLayout>
    </Provider>
  </BrowserRouter>
);
