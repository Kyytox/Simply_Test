import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./home.css";


AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 150, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them  
});

function Home() {
    return (
        <div className="main-home">

            <div className="home-title" data-aos="fade-down">
                <h1>Automate your tests</h1>
                <h1>Verify your design</h1>
            </div>

            <div className="home-description">
                <div className="div-apps" data-aos="fade-up-right">
                    <div className="app-expli">
                        <p>Automate your tests by creating individual test</p>
                    </div>
                    <div className="div-btn">
                        <NavLink to="/automatetests">
                            <button> Automate Test <FontAwesomeIcon icon={faAngleRight} /></button>
                        </NavLink>
                    </div>
                </div>
                <div className="div-apps" data-aos="fade-up-left">
                    <div className="app-expli">
                        <p>Check the compatibility of your design on different browsers</p>
                    </div>
                    <div className="div-btn">
                        <NavLink to="/designtests">
                            <button>Design test <FontAwesomeIcon icon={faAngleRight} /></button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="div-boxs-apps" data-aos="fade-right">
                <div className="box-app">
                    <p>Automate your tests by creating individual action</p>
                    <p>Automate your tests by creating individual action</p>
                    <p>Automate your tests by creating individual action</p>
                    <p>Automate your tests by creating individual action</p>
                </div>

                <div className="box-app" data-aos="fade-left">
                    <p>Check the compatibility of your design on different browsers</p>
                    <p>Check the compatibility of your design on different browsers</p>
                    <p>Check the compatibility of your design on different browsers</p>
                    <p>Check the compatibility of your design on different browsers</p>
                </div>
            </div>


            <div className="footer">
                <hr></hr>
                <p>Made by Kytox</p>
            </div>

        </div >
    );
}

export default Home;