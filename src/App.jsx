import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const App = () =>{
    const [addItem, setAdditem] = useState([]);
    const addNote = (note) =>{
        // alert("success");
        setAdditem((prevData)=>{
            return [...prevData, note];  
        });
        console.log(note);
    };
    return (
        <>
        <Header/>
        <CreateNote
        passNote={addNote} />
        {addItem.map((val, i)=>{
            return <Note 
                    key={i}
                    id={i}
                    title={val.title}
                    content={val.content}
                    />
        })}
        <Footer/>
        </>
    );
};
export default App;