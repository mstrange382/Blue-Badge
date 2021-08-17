import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h1>Welcome to React Fundamentals at Eleven Fifty</h1>
                <p>
                    This app is meant to be a starter app for upcoming project and snadbox in the months and years to come. Working through basic React concepts, build out small applications, and unleash to build own apps.
                </p>
                <hr />
                <h1> Important Notes</h1>
                <ul>
                    <li>Styling is meant to be bland in some spots.</li>
                    <li>Resources collected with link below. </li>
                    <li>
                        <Link to ="/resources">React Resources</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;