import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse, faKeyboard } from "@fortawesome/free-solid-svg-icons";


function CreateAction({ listActions, setListActions }) {

    const [nameAction, setNameAction] = useState("");
    const [typeAction, setTypeAction] = useState("input");
    const [inputElement, setInputElement] = useState("");
    const [typeElement, setTypeElement] = useState("ID");
    const [nameElement, setNameElement] = useState("");
    const [timeWaitAction, setTimeWaitAction] = useState();
    const [idList, setIdList] = useState(1);

    // type Action 
    const typeActionChange = (e) => {
        setTypeAction(e.target.value)
    };

    // name action
    const nameActionChange = (e) => {
        setNameAction(e.target.value)
    }

    // input
    const inputElementChange = (e) => {
        setInputElement(e.target.value)
    }

    // type find element 
    const typeElementChange = (e) => {
        setTypeElement(e.target.value)
        console.log('typeElement', typeElement)
    };

    // name element
    const nameElementChange = (e) => {
        setNameElement(e.target.value)
    }

    // tima wait after action 
    const timeWaitActionChange = (e) => {
        setTimeWaitAction(e.target.value)
    }


    // btn create action, insert in listAction
    const textSubmit = (e) => {
        setIdList(idList + 1)

        //localStorage.setItem('list-actions', JSON.stringify(listActions));

        // add actions in listActions
        setListActions(listActions.concat({ 'idAction': idList, 'nameAction': nameAction, 'typeAction': typeAction, 'input': inputElement,
        'typeElement': typeElement, 'nameElement': nameElement, 'timeWaitAction': timeWaitAction, 'isCheck': 1 }))
        setNameElement("")
        setInputElement("")
        setNameAction("")
        setTypeAction("input")
        setTimeWaitAction()
        console.log(listActions)
    }

    return (
        <div className="div-create-action">
            <h3>Create Test</h3>
            <div className="div-form-action">
                <h4>Action</h4>
                <div className="div-type-action-radio">
                    <label>
                        <input type="radio" value="input" onChange={typeActionChange} checked={typeAction === 'input'} />
                        <span><FontAwesomeIcon icon={faKeyboard} />Text</span>
                    </label>
                    <label>
                        <input type="radio" value="click" onChange={typeActionChange} checked={typeAction === 'click'} />
                        <span><FontAwesomeIcon icon={faComputerMouse} />Click</span>
                    </label>
                </div>
                <input type="text" name="name" placeholder="Action Name" value={nameAction} onChange={nameActionChange} />
            </div>
            <div className="div-form-element">
                <h4>Element</h4>
                <div className="div-type-element-radio">
                    <label>
                        <input type="radio" value="ID" onChange={typeElementChange} checked={typeElement === 'ID'} />
                        <span>ID</span>
                    </label>
                    <label>
                        <input type="radio" value="CLASS_NAME" onChange={typeElementChange} checked={typeElement === 'CLASS_NAME'} />
                        <span>CLASS</span>
                    </label>
                    <label>
                        <input type="radio" value="NAME" onChange={typeElementChange} checked={typeElement === 'NAME'} />
                        <span>NAME</span>
                    </label>
                    <label>
                        <input type="radio" value="PARTIAL_LINK_TEXT" onChange={typeElementChange} checked={typeElement === 'PARTIAL_LINK_TEXT'} />
                        <span>TEXT LINK</span>
                    </label>
                    <label>
                        <input type="radio" value="TAG_NAME" onChange={typeElementChange} checked={typeElement === 'TAG_NAME'} />
                        <span>TAG NAME</span>
                    </label>
                </div>

                <input type="text" name="nameElt" placeholder="Element Name" value={nameElement} onChange={nameElementChange} />
                <input type="text" name="input" placeholder="Input Text" value={inputElement} onChange={inputElementChange} />
                <label className="time">
                    <p>Attente après action: </p>
                    <input type="number" name="time-wait" min="1" max="100" value={timeWaitAction} onChange={timeWaitActionChange}></input>
                    <p>sec</p>
                </label>
            </div>
            <button onClick={textSubmit} id="btn-create-action" className="btn-79"><span>Create</span></button>
        </div>
    );
};

export default CreateAction;