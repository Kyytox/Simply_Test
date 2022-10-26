import React, { useState, useEffect } from "react";
import ConfigDesignTest from "./configDesignTest";
import "./design-test.css";


function DesignTest() {


    const [listConfigScreen, setListConfigScreen] = useState([])
    const [topRetreiveScreen, setTopRetreiveScreen] = useState(false)

    // console.log('listConfigScreen: ', listConfigScreen)

    useEffect(() => {
        if (topRetreiveScreen === true) {
            retreiveScreen()
        }
    })

    // call Backend for retreive screenshots 
    const retreiveScreen = (e) => {
        setTopRetreiveScreen(false)
        console.log('test')
        console.log('listConfigScreen: ', listConfigScreen)

        fetch("http://127.0.0.1:5000/retreiveScreen", {
            method: "POST",
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ listConfigScreen: listConfigScreen})
        })
    }



    return (
        <div className="main-config-design">
            <div className="content" data-aos="fade-right">
                <ConfigDesignTest
                    setListConfigScreen={setListConfigScreen}
                    setTopRetreiveScreen={setTopRetreiveScreen}
                ></ConfigDesignTest>
            </div>

            <div className="div-list-screen">

            </div>
        </div>
    );
}

export default DesignTest;