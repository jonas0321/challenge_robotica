//Import styles
import "@/styles/globals.css";
//Import plugins functions
import React from "react";
//Import config antd
import theme from "@/theme/themeConfig";
import { ConfigProvider, App as AppAntd } from "antd";
//Import redux
import StoreProvider from "@/redux/providers";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
//Import components
import Loading from "@/components/Shared/Loading";
//Config next auth
import SessionAuthProvider from "@/redux/SessionAuthProvider";

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <ConfigProvider theme={theme}>
          <AppAntd>
            <SessionAuthProvider Component={Component} pageProps={pageProps}>
              <Loading />
              <Component {...pageProps} />
            </SessionAuthProvider>
          </AppAntd>
        </ConfigProvider>
      </PersistGate>
    </StoreProvider>
  );
}
