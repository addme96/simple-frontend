import React from "react";
import logo from './logo.svg';
import './App.css';
import {NavLink, Outlet} from "react-router-dom"
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <nav>
                        <ol>
                            <li>
                                <NavLink to="/" style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        margin: "1rem 0",
                                        color: isActive ? "red" : "white",
                                    };
                                }}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/resources" style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        margin: "1rem 0",
                                        color: isActive ? "red" : "white",
                                    };
                                }}>Resources</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" style={({ isActive }) => {
                                    return {
                                        display: "block",
                                        margin: "1rem 0",
                                        color: isActive ? "red" : "white",
                                    };
                                }}>About</NavLink>
                            </li>
                        </ol>
                    </nav>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Hello!
                    </p>
                    <Outlet/>
                </header>
            </div>
        );
    }
}


export default App;
