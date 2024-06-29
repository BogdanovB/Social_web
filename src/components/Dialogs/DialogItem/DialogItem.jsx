import React from "react";
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => { //создаем функцию которая берет данные по именам и айди у dialogsItems

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};


export default DialogItem;