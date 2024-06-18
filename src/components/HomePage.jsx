//import React from 'react'
//import reactImage from "../Images/react.png";
//import jsImage from "../Images/js.png";
//import firebaseImage from "../Images/firebase.jpg";
//import profileImage from ".../Images/sci-fi2-2.jpg";
import data from "../JSON/data.json";
import Article from './Article';
import { Link, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Works from "./Works";

const HomePage = () => {
    return (
        <div className="container text-center">


            <img src="./Images/sci-fi2-2.jpg" className="profileImage" />
            <h1>amagoi06</h1>
            <p></p>

            <section class="page-section" id="services">
                <div className="service">
                    <div class="text-center">
                        <h2 class="section-subheading text-muted mb-5">works</h2>
                    </div>
                </div>
            </section>

            <Works className="worksHome"/>
            
        </div>
    )
}

export default HomePage;