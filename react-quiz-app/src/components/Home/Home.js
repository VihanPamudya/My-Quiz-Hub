import React from "react";
import {Link} from "react-router-dom";
import './Home.css'

function Home () {
    return(
            <div className="content" style={{backgroundColor:"white"}}>
                <div className="con">
                <h1>Welcome</h1>
                <p>If you are desired test your knowledge about Web Technologies 
                </p>
                <p>This is the best option that you can have</p>
                <div>
                <Link to="/login"><button className="log">Login</button></Link>
                <Link to="/signup"><button className="sign">Signup</button></Link>
                
                </div>
                <img src="./pic6.jpg" className="img" alt="home"/>
                </div>
                
            </div>
    );
}

export default Home;