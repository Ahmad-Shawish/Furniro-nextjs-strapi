"use client";

import { persistor, store } from "./store.js";
import { Provider } from "react-redux";

/// for persist
import { PersistGate } from "redux-persist/integration/react";

export const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={"loading.."}>
        {children}
      </PersistGate>
    </Provider>
  );
};
