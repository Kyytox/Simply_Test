import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./home.css";


function Home() {
    return (
        <div className="main-home">

            <div className="home-title">
                <h1>Automate your tests</h1>
                <h1>Verify your design</h1>
            </div>

            <div className="home-description">
                <div className="div-apps">
                    <div className="app-expli">
                        <p>Automate your tests by creating individual test</p>
                    </div>
                    <div className="div-btn">
                        <NavLink to="/automatetests">
                            <button> Automate Test <FontAwesomeIcon icon={faAngleRight} /></button>
                        </NavLink>
                    </div>
                </div>
                <div className="div-apps">
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

            <div className="div-boxs-apps">
                <div className="box-app">
                    <p>Automate your tests by creating individual action</p>
                    <p>Automate your tests by creating individual action</p>
                    <p>Automate your tests by creating individual action</p>
                    <p>Automate your tests by creating individual action</p>
                </div>

                <div className="box-app">
                    <p>Check the compatibility of your design on different browsers</p>
                    <p>Check the compatibility of your design on different browsers</p>
                    <p>Check the compatibility of your design on different browsers</p>
                    <p>Check the compatibility of your design on different browsers</p>
                </div>

            </div>



        </div >
    );
}

export default Home;