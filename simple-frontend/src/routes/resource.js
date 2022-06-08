import {useParams} from "react-router-dom";
import ResourceView from "../components/resourceView";

export default function Resource() {
    let params = useParams();
    return (
        <ResourceView id={params.resourceID}/>
    );
}
