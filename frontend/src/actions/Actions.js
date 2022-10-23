import React, { useState } from "react";
import ListActions from "./ListActions";
import CreateAction from "./CreateAction";
import "./actions.css";

function Actions() {

    const [listActions, setListActions] = useState([]);
    const [displayBtnSelenium, setDisplayBtnSelenium] = useState(1);

    function callSelenium() {
        console.log('function callSelenium');

        var list_send_selenium = listActions.filter(x => x.isCheck === 1)
        console.log('list_send_selenium: ',list_send_selenium)

        fetch("http://127.0.0.1:80/sel").then(response => {
            // Your callback code goes here
        })
            .catch(error => {
                console.error(error);
                // This is executed when the request fails
            });
    };

    return (
        <div className="main-action">
            <div className="content">
                <CreateAction
                    listActions={listActions}
                    setListActions={setListActions}
                ></CreateAction>
            </div>
            <div className="list-actions">
                <div className="div-btn-selenium">
                    {displayBtnSelenium === 1
                        ? <button class="btn-5" onClick={callSelenium}><span>Tester</span></button>
                        : <p></p>
                    } 
                </div>
                <ListActions
                    listActions={listActions}
                    setListActions={setListActions}
                    setDisplayBtnSelenium={setDisplayBtnSelenium}
                ></ListActions>
            </div>
        </div>
    );
}

export default Actions;