import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Root = () => {
  return (
    <div>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3} autoHideDuration={5000}>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </Provider>
    </div>
  );
};

root.render(<Root />);
