import React from "react";
import logo from './logo.svg';
import './App.css';
import GridResources from "./components/GridResources";

class App extends React.Component {
      render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Hello!
                    </p>
                    <p>
                        This is Dawid Dudek's simple frontend app that demonstrates CRUD operations on a REST resource called "Resource".
                        Its only properties are ID and Name.
                    </p>
                    <p>
                        The below data is fetched from Golang simple backend service which in turn fetches data from PostgreSQL DB.
                    </p>
                    <GridResources />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
        );
  }
}


export default App;
