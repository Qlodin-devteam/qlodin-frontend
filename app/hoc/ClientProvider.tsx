"use client";

import React, { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "../store/store";
import { Provider } from "react-redux";

// Ensure `persistor` is only initialized on the client
const persistor = typeof window !== "undefined" ? persistStore(store) : null;

const ClientProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            {persistor ? (
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            ) : (
                children
            )}
        </Provider>
    );
};

export default ClientProvider;
