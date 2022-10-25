import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import "./actions.css";


function CreateAction(props) {

    const [nameAction, setNameAction] = useState("");
    const [typeAction, setTypeAction] = useState("input");
    const [inputElement, setInputElement] = useState("");
    const [typeElement, setTypeElement] = useState("ID");
    const [nameElement, setNameElement] = useState("");
    const [timeWaitAction, setTimeWaitAction] = useState();
    const [idList, setIdList] = useState(1);
    const [idActoinEditSauv, setIdActoinEditSauv] = useState(Number());

    useEffect(() => {
        if (props.editAction) {
            if (props.idActionEdit !== undefined) {
                const editListActions = props.listActions.filter((y) => y.idAction === Number(props.idActionEdit))

                setNameAction(editListActions[0].nameAction)
                setTypeAction(editListActions[0].typeAction)
                setInputElement(editListActions[0].input)
                setTypeElement(editListActions[0].typeElement)
                setNameElement(editListActions[0].nameElement)
                setTimeWaitAction(editListActions[0].timeWaitAction)

                // save id Action edit the moment where edit btn is click
                setIdActoinEditSauv(props.idActionEdit)
                props.setIdActionEdit()
            }
        }
    })

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

        // add actions in listActions
        props.setListActions(props.listActions.concat({
            'idAction': idList, 'nameAction': nameAction, 'typeAction': typeAction, 'input': inputElement,
            'typeElement': typeElement, 'nameElement': nameElement, 'timeWaitAction': timeWaitAction, 'isCheck': 1
        }))

        setNameElement("")
        setInputElement("")
        setNameAction("")
        setTypeAction("input")
        setTimeWaitAction()
    }

    // edit Action 
    const EditAction = (e) => {
        // update action in listAction 
        const updatedAction = props.listActions.map((action) => {
            if (action.idAction === idActoinEditSauv) {
                action.nameAction = nameAction;
                action.typeAction = typeAction;
                action.input = inputElement;
                action.typeElement = typeElement;
                action.nameElement = nameElement;
                action.timeWaitAction = timeWaitAction;
            }
            return action;
        });

        props.setListActions(updatedAction)
        setNameElement("")
        setInputElement("")
        setNameAction("")
        setTypeAction("input")
        setTimeWaitAction()
        props.setEditAction(false)
    }

    return (
        <div className="div-create-action" data-aos="fade-right">
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
                        <input type="radio" value="LINK_TEXT" onChange={typeElementChange} checked={typeElement === 'LINK_TEXT'} />
                        <span>TEXT LINK</span>
                    </label>
                    <label>
                        <input type="radio" value="TAG_NAME" onChange={typeElementChange} checked={typeElement === 'TAG_NAME'} />
                        <span>TAG NAME</span>
                    </label>
                </div>

                <input type="text" name="nameElt" placeholder="Element Name" value={nameElement} onChange={nameElementChange} />
                {typeAction === 'input'
                    ? <input type="text" name="input" placeholder="Input Text" value={inputElement} onChange={inputElementChange} />
                    : <p></p>
                }
                <label className="time">
                    <p>Wait after action: </p>
                    <input type="number" name="time-wait" min="1" max="100" value={timeWaitAction} onChange={timeWaitActionChange}></input>
                    <p>sec</p>
                </label>
            </div>
            {props.editAction
                ? <button onClick={EditAction} id="btn-edit-action" className="btn-79"><span>Edit</span></button>
                : <button onClick={textSubmit} id="btn-create-action" className="btn-79"><span>Create</span></button>
            }
        </div>
    );
};

export default CreateAction;