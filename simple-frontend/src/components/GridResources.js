import React from "react";
import {DataGrid, GridColDef} from "@mui/x-data-grid";

class GridResources extends React.Component {
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
            <div style={{ height: 400, width: '100%', backgroundColor: "whitesmoke" }}>
                <DataGrid
                    rows={resources}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        );
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_BACKEND_DNS_NAME + "/resources")
            .then(response => response.json())
            .then(data => this.setState({
                resources: data,
                loaded: true
            }));
    }
}

export default GridResources;