import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //router 사용
import MyPage from "./pages/mypage/MyPage";
import Main from "./pages/Main/Main";
import Card from "./pages/card/Cards"
import Navbar from "./pages/Nav-Bar/NavBar";
import NewRoutine from "./pages/CreateRoutine/NewRoutine";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Mypage" element={<MyPage/>}/>
        <Route path="/Cards" element={<Card/>}/>
        <Route path="/NewRoutine" element={<NewRoutine/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;


