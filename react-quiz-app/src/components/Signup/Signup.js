import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./Form.css";
import axios from "axios";



export default function AddStudent() {

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const [usernameError, setusernameError] = useState("");
    const [emailError, setemailError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [password2Error, setpassword2Error] = useState("");

    const [students, setStudents] = React.useState([]);

    function getStudents() {

        axios.get("http://localhost:3000/allstudents").then((res) => {
            setStudents(res.data);
            console.log(res.data)
        }).catch((err) => {
            alert(err.message);
        })
    }
    useEffect(() => {
 
        getStudents();


    }, [])

    function sendData(e) {
        e.preventDefault();

        const newStudent = {
            username,
            email,
            password,
            password2
        }


        var notMatch = 0
        for (let i = 0; i < students.length; i++) {
            if (students[i].email === email) {
                notMatch = 1;
            }
        }
        if (notMatch === 1) {
            setemailError("*email already exists.");
            alert("Email already exists");
            window.location.href = '/signup';
        } else {

            if (username === "") {
                setusernameError("*It is required to fill username");
            } if (email === "") {
                setemailError("*It is required to fill email");
            } if (password === "") {
                setpasswordError("*It is required to fill password");
            } else if (password.length < 6) {
                setpasswordError("Password needs to be 6 characters or more");
            } if (password2 === "") {
                setpassword2Error("*It is required to fill confirm password");
            } else if (password2 !== password) {
                setpassword2Error("Passwords do not match");
            } if (!(email === "" || username === "" || password === "" || password2 === "" || password.length < 6 || password2 !== password)) {
                axios.post("http://localhost:3000/addstudent", newStudent).then(() => {

                    window.location.href = '/login';

                }).catch((err) => {
                    alert(err);
                })
            }
        }
    }

    return (

        <div className="form-container">
        <div className='form-content-left'>
            <form onSubmit={sendData} className='form'>
                <h1>
                    Get started with us today! Create your account by filling out the
                    information below.
                </h1>
                <div className="form-inputs">
                    <label className="form-label"> Username</label>
                    <span className="logError">{usernameError}</span>
                    <input type="text" className="form-input" id="Username" placeholder="Enter your username" onChange={(e) => {
                        setName(e.target.value);
                    }} />
                </div>

                <div className="form-inputs">
                    <label className="form-label">Email</label>
                    <span className="logError">{emailError}</span>
                    <input type="email" className="form-input" id="Email" placeholder="Enter your email" onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                </div>

                <div className="form-inputs">
                    <label className="form-label">Password</label>
                    <span className="logError">{passwordError}</span>
                    <input type="password" className="form-input" id="Password" placeholder="Enter your password" onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                </div>
                <div className="form-inputs">
                    <label className="form-label">Confirm Password</label>
                    <span className="logError">{password2Error}</span>
                    <input type="password" className="form-input" id="Confirm Password" placeholder="Confirm your password" onChange={(e) => {
                        setPassword2(e.target.value);
                    }} />
                </div>
                <button type="submit" className="form-input-btn">Register</button>
                <span className='form-input-login'>
                    Already have an account? Login <Link to="/login">here</Link>
                </span>
            </form>
        </div>
        </div>
    );
}

