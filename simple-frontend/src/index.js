import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Resources from "./routes/resources"
import About from "./routes/about"
ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="resources" element={<Resources />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
    , document.getElementById('root')
);

