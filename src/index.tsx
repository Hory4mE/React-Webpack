import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { queryclient } from "./queryClient";
import StoreApp from "./StoreApp";
import "./styles/global.scss";

const root = ReactDom.createRoot(document.querySelector("#app")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryclient}>
        {/* <App /> */}
        <StoreApp />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
