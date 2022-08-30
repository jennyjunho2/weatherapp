import { HashRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Mainpage/Mainpage";
import Summary from "./Summary/Summary";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/summary/" element={<Summary />} />
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </HashRouter>
  )
}

export default Router;