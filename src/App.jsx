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
        // console.log(note);
    };
    const onDelete =(id)=>{
        setAdditem((oldData) =>
        oldData.filter((curData, index) =>{
            return index !== id;
        })
        )
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
                    deleteItem={onDelete}
                    />
        })}
        <Footer/>
        </>
    );
};
export default App;