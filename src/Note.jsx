import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = () =>{
    return (
        <>
        <div className="note">
            <h1> Note</h1>
            <br/>
            <p>what is the name</p>
            <button>
                <DeleteOutlineIcon className="deleteIcon" />
            </button>
        </div>
        </>
    );
};
export default Note;