import Dashboard from "../pages/Dashboard";
import Newtask from "../pages/Newtask";

import { Routes, Route } from "react-router-dom";

function RoutesApp() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/newtask' element={<Newtask />}></Route>
    </Routes>
  );
}

export default RoutesApp;
