import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";

export default function Root(props) {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
