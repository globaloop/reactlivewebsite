import React from "react";
import { fName, lName } from "./demo1";

const ComC = () =>{
    return (
    <>
    <fName.Consumer>{(fname) => {
        return (
            <lName.Consumer>{(lname) => {
             return (<h1>Hello {fname} {lname}</h1>);   
           
            }

            }

            </lName.Consumer>
        );
        
    }}
    </fName.Consumer>
    </>
    );
}

export default ComC;