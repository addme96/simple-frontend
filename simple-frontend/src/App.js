import React from "react";
import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from "react-router-dom"
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/resources">Resources</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
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
