import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage/Mainpage";
import Summary from "./Summary/Summary";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/summary" element={<Summary />} />
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;