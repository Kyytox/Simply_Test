import React from "react";
import 'animate.css';
import "./actions.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import Checkbox from '@mui/material/Checkbox';
import { lightGreen, grey } from '@mui/material/colors';



function ListActions(props) {

    // checked action 
    const checkActionList = (e) => {
        // collect action in list with idAction in parameter
        var val_isCheck = props.listActions.find(x => x.idAction === Number(e.target.value))
        // update isCheck
        if (val_isCheck.isCheck === 0) { val_isCheck.isCheck = 1 } else { val_isCheck.isCheck = 0 }
        //verif if one action isCheck ==> update DisplayBtnSelenium
        if (props.listActions.filter(x => x.isCheck === 1).shift()) {props.setDisplayBtnSelenium(1)} else {props.setDisplayBtnSelenium(0)}
    }

    const DelActionList = value => () => {
        const newListActions = props.listActions.filter((y) => y.idAction !== Number(value))
        props.setListActions(newListActions)
    }

    const EditActionList = value => () => {
        // actvie action edit 
        // collect idAction for update 
        props.setEditAction(true)
        props.setIdActionEdit(value)
    }

    // Display list Actions 
    const listItems = props.listActions.map((item) => 
        <div key={"action-" + item.idAction} id={"item-action-" + item.idAction} className="items-action animate__animated animate__zoomIn">
            <span className="action-entete">
                <p id="name-action">{item.nameAction}</p>
                <p id="type-action">{item.typeAction}</p>
            </span>

            <div className="infos-elements">
                <span>
                    <p id="type-element">Type Element</p>
                    <p id="type-value">{item.typeElement}</p>
                </span>
                <span>
                    <p id="name-element">Element</p>
                    <p id="name-value">{item.nameElement}</p>
                </span>
            </div>

            <div className="infos-elements">
                <span>
                    <p id="input-element">Input Text</p>
                    <p id="input-value">{item.input}</p>
                </span>
                <span>
                    <p id="time-wait-action">Wait</p>
                    <p id="time-value">{item.timeWaitAction} sec</p>
                </span>     
            </div>
            <div className="btn-action">
                <button className="btn-delete-action"><i onClick={DelActionList(item.idAction)}><FontAwesomeIcon icon={faTrash} color="white" /></i></button>
                <button className="btn-edit-action"><i onClick={EditActionList(item.idAction)}><FontAwesomeIcon icon={faPen} color="white" /></i></button>
                <div className="div-check">
                    <Checkbox name="check-action" value={item.idAction} onChange={checkActionList} defaultChecked sx={{color: grey[500],'&.Mui-checked': {color: lightGreen[600],},}}/>
                </div>
            </div>
        </div>
    );

    return (
        <div id="div-list-actions">
            {listItems}
        </div>
    );
};

export default ListActions;