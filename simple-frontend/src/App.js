import React from "react";
import logo from './logo.svg';
import './App.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: [],
            loaded: false
        }
    }

    render() {
        const {loaded, resources} = this.state;
        if (!loaded){
            return (
                <div>
                    <h1> Loading resources.... </h1>
                </div>
            );
        }


        const columns: GridColDef[] = [
            { field: 'id', headerName: 'ID', width: 100 },
            { field: 'name', headerName: 'Resource Name', width: 300 },
        ];

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
                    <div style={{ height: 400, width: '100%', backgroundColor: "whitesmoke" }}>
                      <DataGrid
                          rows={resources}
                          columns={columns}
                          pageSize={5}
                          rowsPerPageOptions={[5]}
                          checkboxSelection
                      />
                  </div>

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

    componentDidMount() {
        setTimeout("", 100000);
        fetch(process.env.REACT_APP_BACKEND_DNS_NAME + "/resources")
            .then(response => response.json())
            .then(data => this.setState({
                resources: data,
                loaded: true
            }));
    }
}


export default App;
