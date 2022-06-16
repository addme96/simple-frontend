import React from 'react';
import {useParams, useNavigate} from "react-router-dom";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export default function Modal() {
    let navigate = useNavigate();
    let params = useParams();
    let id = parseInt(params.resourceID);
    // let resource = getResourceById(params.resourceID);
    let buttonRef = React.useRef(null);

    function onDismiss() {
        navigate(-1);
    }

    // if (!resource) return null;

    return (
        <Dialog
            aria-labelledby="label"
            onDismiss={onDismiss}
            initialFocusRef={buttonRef}
        >
            <div
                style={{
                    display: "grid",
                    justifyContent: "center",
                    padding: "8px 8px",
                }}
            >

              <p>ID:  {id}</p>

                {/*{should be resource.id, resource.name etc}*/}
                <button
                    style={{ display: "block" }}
                    ref={buttonRef}
                    onClick={onDismiss}
                >
                    Close
                </button>
            </div>
        </Dialog>
    );
}

