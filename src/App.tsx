import { Provider } from "react-redux";
import Body from "./Components/Body";
import  appStore  from "./utils/appStore.js";

function App() {

  
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
