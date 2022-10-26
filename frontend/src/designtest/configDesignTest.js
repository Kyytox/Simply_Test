import React, { useState } from "react";
import { Checkbox, TextField } from "@mui/material";
import "./design-test.css";


function ConfigDesignTest(props) {

    const [widthScreen, setWidthScreen] = useState([])
    const [windowsBrow, setWindowsBrow] = useState([])
    const [linuxBrow, setLinuxBrow] = useState([])
    const [urlScreen, setUrlScreen] = useState("")


    // Width Screen Selection
    const widthScreenChange = (e) => {
        if (widthScreen.filter(x => x === String(e.target.value)).length) {
            // remove width
            setWidthScreen(widthScreen.filter(item => item !== String(e.target.value)));
        } else {
            // add width in array widthScreen
            setWidthScreen([...widthScreen, e.target.value])
        }
    }

    // Windows Browsers 
    const windowsBrowserChange = (e) => {
        if (windowsBrow.filter(x => x === e.target.value).length) {
            // remove version browsers
            setWindowsBrow(windowsBrow.filter(item => item !== e.target.value));
        } else {
            // add version browsers in array windowsBrow
            setWindowsBrow([...windowsBrow, e.target.value])
        }
    }

    // Linux Browsers
    const linuxBrowserChange = (e) => {
        if (linuxBrow.filter(x => x === e.target.value).length) {
            // remove version browsers
            setLinuxBrow(linuxBrow.filter(item => item !== e.target.value));
        } else {
            // add version browsers in array windowsBrow
            setLinuxBrow([...linuxBrow, e.target.value])
        }
    }

    // input url
    const urlScreenChange = (e) => {
        setUrlScreen(e.target.value)
    }

    // create Scrennshots 
    const createScreenshots = (e) => {
        // console.log('widthScreen: ', widthScreen)
        // console.log('windowsBrow: ', windowsBrow)
        // console.log('linuxBrow: ', linuxBrow)

        props.setListConfigScreen({
            'urlScreen': urlScreen, 'listWidthScreen': widthScreen, 'listWindowsBrow': windowsBrow, 'listLinuxBrow': linuxBrow
        })

        props.setTopRetreiveScreen(true)
    }

    return (
        <div className="div-config-design">
            <h3>Create Design Screenshots</h3>
            <div className="config-width">
                {/* 300 - 480 - 600 - 768 - 900 - 1024 - 1200 - 1400 - 1600 - 1800 - 2000 - 2200 - +perso*/}

                <h4>Width (px)</h4>

                <div className="div-checkbox">
                    <label>
                        <Checkbox value={300} onChange={widthScreenChange} />
                        <div className="text-width">300</div>
                    </label>
                    <label>
                        <Checkbox value={480} onChange={widthScreenChange} />
                        <div className="text-width">480</div>
                    </label>
                    <label>
                        <Checkbox value={600} onChange={widthScreenChange} />
                        <div className="text-width">600</div>
                    </label>
                    <label>
                        <Checkbox value={768} onChange={widthScreenChange} />
                        <div className="text-width">768</div>
                    </label>
                    <label>
                        <Checkbox value={900} onChange={widthScreenChange} />
                        <div className="text-width">900</div>
                    </label>
                    <label>
                        <Checkbox value={1024} onChange={widthScreenChange} />
                        <div className="text-width">1024</div>
                    </label>
                    <label>
                        <Checkbox value={1200} onChange={widthScreenChange} />
                        <div className="text-width">1200</div>
                    </label>
                    <label>
                        <Checkbox value={1400} onChange={widthScreenChange} />
                        <div className="text-width">1400</div>
                    </label>
                    <label>
                        <Checkbox value={1600} onChange={widthScreenChange} />
                        <div className="text-width">1600</div>
                    </label>
                    <label>
                        <Checkbox value={1800} onChange={widthScreenChange} />
                        <div className="text-width">1800</div>
                    </label>
                    <label>
                        <Checkbox value={2000} onChange={widthScreenChange} />
                        <div className="text-width">2000</div>
                    </label>
                    <label>
                        <Checkbox value={2200} onChange={widthScreenChange} />
                        <div className="text-width">2200</div>
                    </label>
                </div>
            </div>

            <div className="os-borwser">
                <table>
                    <tbody>
                        <tr>
                            <td>OS/Browsers</td>
                            <td>Chrome</td>
                            <td>Firefox</td>
                            <td>Safari</td>
                        </tr>
                        <tr>
                            <td>Windows</td>
                            <td className="td-checkbox">
                                <label>
                                    <Checkbox value={"c-105"} onChange={windowsBrowserChange} />
                                    <div className="version-browers">105</div>
                                </label>
                                <label>
                                    <Checkbox value={"c-106"} onChange={windowsBrowserChange} />
                                    <div className="version-browers">106</div>
                                </label>
                                <label>
                                    <Checkbox value={"c-107"} onChange={windowsBrowserChange} />
                                    <div className="version-browers">107</div>
                                </label>
                            </td>
                            <td className="td-checkbox">
                                <label>
                                    <Checkbox value={"f-104"} onChange={windowsBrowserChange} />
                                    <div className="version-browers">104</div>
                                </label>
                                <label>
                                    <Checkbox value={"f-105"} onChange={windowsBrowserChange} />
                                    <div className="version-browers">105</div>
                                </label>
                                <label>
                                    <Checkbox value={"f-106"} onChange={windowsBrowserChange} />
                                    <div className="version-browers">106</div>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>Linux</td>
                            <td className="td-checkbox">
                                <label>
                                    <Checkbox value={"c-105"} onChange={linuxBrowserChange} />
                                    <div className="version-browers">105</div>
                                </label>
                                <label>
                                    <Checkbox value={"c-106"} onChange={linuxBrowserChange} />
                                    <div className="version-browers">106</div>
                                </label>
                                <label>
                                    <Checkbox value={"c-107"} onChange={linuxBrowserChange} />
                                    <div className="version-browers">107</div>
                                </label>
                            </td>
                            <td className="td-checkbox">
                                <label>
                                    <Checkbox value={"f-104"} onChange={linuxBrowserChange} />
                                    <div className="version-browers">104</div>
                                </label>
                                <label>
                                    <Checkbox value={"f-105"} onChange={linuxBrowserChange} />
                                    <div className="version-browers">105</div>
                                </label>
                                <label>
                                    <Checkbox value={"f-106"} onChange={linuxBrowserChange} />
                                    <div className="version-browers">106</div>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="url">
                {(linuxBrow.length || windowsBrow.length) && widthScreen.length
                    ? <TextField id="outlined-basic" variant="outlined" label="Url" defaultValue="www." value={urlScreen || ''} onChange={urlScreenChange} />
                    : <TextField disabled id="outlined-basic" variant="outlined" label="Url" defaultValue="www." />
                }
            </div>

            <div className="div-btn-create-screen">
                {urlScreen.length
                    ? <button onClick={createScreenshots} id="btn-create-screen" className="btn-79"><span>Create Screenshots</span></button>
                    : <button disabled id="btn-create-screen-disabled" className="btn-79"><span>Create Screenshots</span></button>
                }

            </div>

        </div>
    );
}

export default ConfigDesignTest;