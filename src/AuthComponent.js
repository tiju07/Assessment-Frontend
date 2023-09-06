import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import Table from 'react-bootstrap/Table';
const cookies = new Cookies();

// get token generated on login
const token = cookies.get("TOKEN");

export default function AuthComponent() {
    // set an initial state for the message we will receive after the API call
    const [message, setMessage] = useState("");

    // useEffect automatically executes once the page is fully loaded
    useEffect(() => {
        // set configurations for the API call here
        const configuration = {
            method: "get",
            url: "https://signup-login-w639.onrender.com/auth-endpoint",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                // assign the message in our result to the message we initialized above
                setMessage(result.data.message);
            })
            .catch((error) => {
                error = new Error();
            });
    }, []);

    // logout
    const logout = () => {
        // destroy the cookie
        cookies.remove("TOKEN", { path: "/" });
        // redirect user to the landing page
        window.location.href = "/";
    }

    return (
        <div className="text-center">
            <h1>Protected Component</h1>

            {/* displaying our message from our API call */}
            <h3 className="text-danger">{message}</h3>

            {/* logout */}
            <Button type="submit" variant="danger" onClick={() => logout()}>
                Logout
            </Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        {Array.from(['Order Date', 'Region', 'Rep', 'Items', 'Units', "Unit Cost", "Total"]).map((data, index) => (
                            <th key={index}>{data}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from(['1/6/2020', 'East', 'Jones', 'Pencil', 95, 1.99, 189.05]).map((data, index) => (
                            <td key={index}>{data}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from(['1/23/2020', 'Central', 'Kivell', 'Binder', 50, 19.99, 999.05]).map((data, index) => (
                            <td key={index}>{data}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>3</td>
                        {Array.from(['2/9/2020', 'Central', 'Jardine', 'Pen', 27, 19.99, 539.85]).map((data, index) => (
                            <td key={index}>{data}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>4</td>
                        {Array.from(['1/6/2020', 'East', 'Jones', 'Pencil', 95, 1.99, 189.05]).map((data, index) => (
                            <td key={index}>{data}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>5</td>
                        {Array.from(['1/23/2020', 'Central', 'Kivell', 'Binder', 50, 19.99, 999.05]).map((data, index) => (
                            <td key={index}>{data}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>6</td>
                        {Array.from(['2/9/2020', 'Central', 'Jardine', 'Pen', 27, 19.99, 539.85]).map((data, index) => (
                            <td key={index}>{data}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>7</td>
                        {Array.from(['1/6/2020', 'East', 'Jones', 'Pencil', 95, 1.99, 189.05]).map((data, index) => (
                            <td key={index}>{data}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>8</td>
                        {Array.from(['1/23/2020', 'Central', 'Kivell', 'Binder', 50, 19.99, 999.05]).map((data, index) => (
                            <td key={index}>{data}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>9</td>
                        {Array.from(['2/9/2020', 'Central', 'Jardine', 'Pen', 27, 19.99, 539.85]).map((data, index) => (
                            <td key={index}>{data}</td>
                        ))}
                    </tr>
                    
                </tbody>
            </Table>
        </div>
    );
}
