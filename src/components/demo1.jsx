import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
/*import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
//import Error from './Error';
import Menu from "./Menu";*/

const App = () => {
    return(
        <>
            <div className="container">
                <h1 className="text-center"> Jai Shri Radhe</h1>
                <button className="text-center btn btn-outline-success"> Hari Bol</button>
            </div>
        </>
    )};

   /* return(
        <>
            <Menu />
            <Routes>
                <Route exact path='/' element={<About name='test'/>} />
                <Route exact path='/contact/:id/:name' element={<Contact/>} />
                <Route path='*' element={<About name='test'/>} />
            </Routes>


        </>

    );
}*/

export default App;