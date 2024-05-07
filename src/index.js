import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Qube from './Qube';

export default function Page() {
    return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/qube" element={<Qube/>}></Route>
          </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>);