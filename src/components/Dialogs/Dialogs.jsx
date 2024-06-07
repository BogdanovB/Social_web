import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => { //создаем функцию которая берет данные по именам и айди у dialogsItems

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>

    );
};


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                
                <DialogItem name="Bogdan" id="1" />
                <DialogItem name="Veronika" id="2" />
                <DialogItem name="Viktor" id="3" />
                <DialogItem name="Alex" id="4" />

            </div>
            <div className={s.messages}>

                <Message message='Hello'/>
                <Message message='How are you'/>
                <Message message='Yo'/>
                <Message message='Yo'/>

            </div>

        </div>
    )
}

export default Dialogs;