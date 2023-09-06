import React from 'react'
import { Form, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from "axios";


export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDOB] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "https://signup-login-w639.onrender.com/register",
            data: {
                username,
                email,
                dob,
                password,
            },
        };
        axios(configuration)
            .then((result) => {
                setRegister(true);
            })
            .catch((error) => {
                error = new Error();
            });
    }

    return (
        <>
            <h2>Register</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                {/* display success message */}
                {register ? (
                    <p className="text-success">You Are Registered Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Registered</p>
                )}
                {/* username */}
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username" />
                </Form.Group>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email" />
                </Form.Group>
                {/* dob */}
                <Form.Group controlId="formBasicDOB">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                        type="date"
                        name="dob"
                        value={dob}
                        onChange={(e) => setDOB(e.target.value)}
                        placeholder="Enter Date of Birth" />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
                </Form.Group>

                {/* submit button */}
                <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Submit
                </Button>
            </Form>
        </>
    )
}