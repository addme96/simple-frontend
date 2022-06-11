import {useParams} from "react-router-dom";
import ResourceView from "../components/resourceView";

export default function Resource() {
    let params = useParams();
    let idNumber = parseInt(params.resourceID);
    return (
        <ResourceView id={idNumber} key={idNumber}/>
    );
}
