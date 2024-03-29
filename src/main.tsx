import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { storeReduxApp } from "./redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={storeReduxApp}>
      <App />
    </Provider>
);
