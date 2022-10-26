import React, { useState } from "react";
import ConfigDesignTest from "./configDesignTest";
import "./design-test.css";


function DesignTest() {


    const [listConfigScreen, setListConfigScreen] = useState([])

    console.log('listConfigScreen: ', listConfigScreen)

    return (
        <div className="main-config-design">
            <div className="content" data-aos="fade-right">
                <ConfigDesignTest
                    setListConfigScreen={setListConfigScreen}
                ></ConfigDesignTest>
            </div>

            <div className="div-list-screen">

            </div>
        </div>
    );
}

export default DesignTest;