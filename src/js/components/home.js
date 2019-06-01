import React from "react";
import About from "./about";
console.log(process.env.NODE_ENV)
const Home = props => {
    return (
        <div class="d-flex justify-content-center">
            <h1>Hello Stop</h1>
            <About />
        </div>
    );
};

export default Home;
