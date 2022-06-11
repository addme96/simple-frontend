import React from "react";
import ResourceRepo from "../backend/resource";

class ResourceView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resource: null,
            loaded: false
        }
        this.resourceRepo = new ResourceRepo()
    }

    render() {
        const {loaded, resource} = this.state;
        if (!loaded) {
            return (
                <div>
                    <h1> Loading resource.... </h1>
                </div>
            );
        }
        return (
            <div style={{height: 400, width: '100%', color: "black", backgroundColor: "whitesmoke"}}>
                <p>ID: {resource.id}</p>
                <p>Name: {resource.name}</p>
            </div>
        );
    }

    componentDidMount() {
        this.resourceRepo.get(this.props.id).then(resource => this.setState({
            resource: resource,
            loaded: true
        }));
    }
}

export default ResourceView;