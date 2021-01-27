import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";


const CreateNote = () =>{
    return (
        <>
        <div className="main_note">
            <form>
                <input type="text" placeholder="Title" autoComplete="off"/>
                <textarea rows="" colume="" placeholder='write a note'/>
                <Button>
                    <AddIcon className="plus_sign"/>
                </Button>
            </form>
        </div>
        </>
    );
};
export default CreateNote;