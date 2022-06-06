import React from "react";
import {DataGrid} from "@mui/x-data-grid";
import ResourceRepo from "../backend/resource";

class GridResources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: [],
            loaded: false
        }
        this.resourceRepo = new ResourceRepo()
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

        const columns = [
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
                />
            </div>
        );
    }

    componentDidMount() {
        this.resourceRepo.list().then(data => this.setState({
                resources: data,
                loaded: true
            }));
    }
}

export default GridResources;