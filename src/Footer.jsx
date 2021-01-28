import React from "react";

const Footer = () =>{
    const newYear = new Date().getFullYear();
    return (
        <>
            <div className="footer">
                <p>copyright ©  {newYear}</p>
            </div>
        </>
    );
};
export default Footer;