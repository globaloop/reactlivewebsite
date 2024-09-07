import React, { useContext } from "react";
import ComC from './comC';
import { fName, lName } from "./demo1";

const ComB = () =>{
    const fname = useContext(fName);
    const lname = useContext(lName);
    return <h1> helo {fname} {lname}</h1>;
}

export default ComB;