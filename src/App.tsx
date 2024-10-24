import "./App.css";
import Details from "./Component/Details/Details";
import EmployeeDetail from "./Component/EmployeeDetail/EmployeeDetail";
import MainComponent from "./Component/MainComponent/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const wrapMainComponent = (Component: any) => (
    <MainComponent>
      <Component />
    </MainComponent>
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={wrapMainComponent(Details)} />
            <Route
              path="/employee/:empid"
              element={wrapMainComponent(EmployeeDetail)}
            />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
