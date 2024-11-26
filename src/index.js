import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import New from "./pages/New/New";
import NewStats from "./pages/NewStats/NewStats";
import NewProficiencies from "./pages/NewProficiencies/NewProficiencies";
import NewAppearance from "./pages/NewAppearance/NewAppearance";
import NewFinish from "./pages/NewFinish/NewFinish";
import WeaponSelect from "./components/weapon_select/WeaponSelect";
import Settings from "./pages/Settings/Settings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />}/>
      <Route path="/new_1" element={<New />}/>
      <Route path="/new_2" element={<NewStats />}/>
      <Route path="/new_3" element={<NewProficiencies />}/>
      <Route path="/new_4" element={<NewAppearance />}/>
      <Route path="/new_5" element={<NewFinish />}/>
      <Route path="/settings" element={<Settings />}/>
      <Route path="/holabuenas" element={<WeaponSelect />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
