import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //router 사용
import MyPage from "./pages/mypage/MyPage";
import Main from "./pages/Main/Main";
import Card from "./pages/card/Cards"
import Navbar from "./pages/Nav-Bar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/Cards" element={<Card/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;


