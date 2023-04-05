import { Link } from "react-router-dom";
import React from 'react'

function Navigation() {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Belajar Reactttttttt</h1>
            <nav>
                <Link to='/'>Home</Link> | {" "}
                <Link to='profile'>profile</Link> | {" "}
                <Link to='about'>About</Link>
            </nav>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Navigation