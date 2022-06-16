import React from "react";
import logo from './logo.svg';
import './App.css';
import {NavLink, Outlet, Route, Routes, useLocation} from "react-router-dom"
import Resources from "./routes/resources";
import Resource from "./routes/resource";
import About from "./routes/about";
import Modal from "./components/modal";
export default function App() {
    let location = useLocation();

    // The `backgroundLocation` state is the location that we were at when one of
    // the resources links was clicked. If it's there, use it as the location for
    // the <Routes> so we show the resources grid in the background, behind the modal.
    let state =  { backgroundLocation: location.state};
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Hello!
                    </p>
                </header>
                <Routes location={state?.backgroundLocation || location}>
                    <Route path="/" element={<Layout />}>
                        <Route path="resources" element={<Resources/>}>
                            <Route path=":resourceID" element={<Resource/>}/>
                        </Route>
                        <Route path="about" element={<About/>}/>
                        <Route
                            path="*"
                            element={
                                <main style={{padding: "1rem"}}>
                                    <p>There's nothing here!</p>
                                </main>
                            }
                        />
                    </Route>
                </Routes>

                {/* Show the modal when a `backgroundLocation` is set */}
                {state?.backgroundLocation && (
                    <Routes>
                        <Route path="/resources/:resourceID" element={<Modal />} />
                    </Routes>
                )}
            </div>
        );
}

function Layout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "black",
                            };
                        }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/resources" style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "black",
                            };
                        }}>Resources</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : "black",
                            };
                        }}>About</NavLink>
                    </li>
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}