import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import FirstScreen from "./Components/FirstScreen/FirstScreen";

function App() {
  return (
    <>
      <div id="content">
      <Routes>
        <Route path="/">
          <Route index element={<FirstScreen />} />
          <Route path="/addtodos" element={<Main />} />
        </Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
