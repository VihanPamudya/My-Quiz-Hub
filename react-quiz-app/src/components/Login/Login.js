import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./Form.css"
import axios from "axios";

export default function LogIn() {

    const [emails, setemail] = useState("");
    const [passwords, setpassword] = useState("");
    const [Error, setError] = useState("");

    const [students, setStudents] = React.useState([]);

    useEffect(() => {
        function getStudents() {

            axios.get("http://localhost:3000/allstudents").then((res) => {
                setStudents(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getStudents();
    }, [])


    function Log(e) {
        e.preventDefault();
        var notMatch = 0
        for (let i = 0; i < students.length; i++) {
            if (students[i].email === emails && students[i].password === passwords) {
                notMatch = 1;
            }
        }
        if (notMatch === 0) {
            setError("*email and password does not match.");

        } else {
            window.location.href = '/mainpage';
        }

    }


    return (
        <div className="form-container">
            <div className='form-content-left'>
                <form onSubmit={Log} className='form'>
                    <h1>
                        Log into your account
                    </h1>

                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input type="email" className="form-input" id="Email" placeholder="Enter your email" onChange={(e) => {
                            setemail(e.target.value);
                        }} />

                    </div>

                    <div className='form-inputs'>
                        <label className='form-label'>Password</label>
                        <input type="password" className="form-input" id="Password" placeholder="Enter your password" onChange={(e) => {
                            setpassword(e.target.value);
                        }} />

                    </div>
                    <span className="logError">{Error}</span>

                    <button className='form-input-btn' type='submit'>
                        <b>Log in</b>
                    </button>
                    <span className='form-input-login'>
                        Still don't have an account? Register <Link to="/signup">here</Link>
                        
                    </span>
                </form>
            </div>
        </div>

    );
}

