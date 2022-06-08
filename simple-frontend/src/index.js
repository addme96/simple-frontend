import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Resources from "./routes/resources"
import Resource from "./routes/resource";
import About from "./routes/about"
ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="resources" element={<Resources />} >
                        <Route path=":resourceID" element={<Resource />} />
                    </Route>
                    <Route path="about" element={<About />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
    , document.getElementById('root')
);

