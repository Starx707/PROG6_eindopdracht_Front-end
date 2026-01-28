import {Link, Outlet} from "react-router";
import React from "react";

function errorPage() {
    return (
        <>
            <img src="https://images.alphacoders.com/749/thumb-1920-749364.jpg" alt="404 image"/>
            <div className={"error_center_div"}>
                <h1 className={"error_text"}>404</h1>
                <p>Looks like you're lost</p>
                <a href="/" className={"error_text"}>Go back</a>
                <p></p>
            </div>
        </>
    )
}

export default errorPage;