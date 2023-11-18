import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot_Password from "./pages/Forgot_Password";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import MyProfile from "./components/MyProfile";
import AskExpert from "./components/AskExpert";
import FAQs from "./components/FAQs";
import FAQs_open from "./components/FAQs_open";
const AppLayout = () => {
  return (
      <div className="grid grid-cols-3 gap-y-8"> 
        <Header />
        <Sidebar/>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/profile" element={<MyProfile />} />
           <Route path="/ask_expert" element={<AskExpert />} />
           <Route path="/faq" element={<FAQs />} />
           <Route path="/faq_open" element={<FAQs_open />} />

         </Routes>
      </div>
        // <Steps/>
        
        // <Footer />



  );
};
const appRouter = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home/*" element={<AppLayout />} />
      <Route path="/register" element={<Register />} />
    <Route path="/forgot_password" element={<Forgot_Password />} />  
      {/* <Route path="/home/*" element={<AppLayout />} /> */}
   
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(appRouter);
