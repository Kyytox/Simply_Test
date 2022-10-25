import React, { useState } from "react";
import ListActions from "./ListActions";
import CreateAction from "./CreateAction";
import "./actions.css";

function Actions() {

    // const [listActions, setListActions] = useState(JSON.parse(localStorage.getItem('list-actions')) === null ? [] : localStorage.getItem('list-actions')) 
    const [listActions, setListActions] = useState([])
    const [displayBtnSelenium, setDisplayBtnSelenium] = useState(1);
    const [editAction, setEditAction] = useState(false)
    const [idActionEdit, setIdActionEdit] = useState()
    const [urlSelnium, setUrlSelnium] = useState("")

    // console.log('listActions.length', listActions.length)
    // if (listActions.length > 0) {
    //     console.log('test')
    //     localStorage.setItem('list-actions', JSON.stringify(listActions));
    // }
    // console.log('localstorage: ', JSON.parse(localStorage.getItem('list-actions')))
    // // console.log('listActions: ', listActions)


    // Url Selenium 
    const urlSelniumChange = (e) => {
        setUrlSelnium(e.target.value)
    }

    function callSelenium() {
        console.log('function callSelenium');

        var list_send_selenium = listActions.filter(x => x.isCheck === 1)
        console.log('list_send_selenium: ', list_send_selenium)

        fetch("http://127.0.0.1:5000/sel", {
            method: "POST",
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(list_send_selenium)
        })

        // fetch("http://127.0.0.1:5000/sel", {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     body: JSON.stringify({ list_send_selenium })
        // }).then(response => {
        //     // Your callback code goes here
        // })
        //     .catch(error => {
        //         console.error(error);
        //         // This is executed when the request fails
        //     });
        // setUrlSelnium("")
    };

    return (
        <div className="main-action">
            <div className="content" data-aos="fade-right">
                <CreateAction
                    listActions={listActions}
                    setListActions={setListActions}
                    editAction={editAction}
                    setEditAction={setEditAction}
                    idActionEdit={idActionEdit}
                    setIdActionEdit={setIdActionEdit}
                ></CreateAction>
            </div>
            <div className="list-actions">
                <div className="div-btn-selenium">
                    {listActions.length
                        ? displayBtnSelenium === 1
                            ? urlSelnium !== ""
                                ? <><button className="btn-5" onClick={callSelenium} data-aos="fade-down"><span>Tester</span></button>
                                    <input type="text" name="input" placeholder="Url page test" value={urlSelnium} onChange={urlSelniumChange} data-aos="fade-down" />
                                </>
                                : <><button className="btn-5" onClick={callSelenium} disabled data-aos="fade-down"><span>Tester</span></button>
                                    <input type="text" name="input" placeholder="Url page test" value={urlSelnium} onChange={urlSelniumChange} required data-aos="fade-down" />
                                </>
                            : <p>Select minimum one test</p>
                        : <p></p>
                    }
                </div>
                <ListActions
                    listActions={listActions}
                    setListActions={setListActions}
                    setDisplayBtnSelenium={setDisplayBtnSelenium}
                    setEditAction={setEditAction}
                    setIdActionEdit={setIdActionEdit}
                ></ListActions>
            </div>
        </div>
    );
}

export default Actions;