import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => { return (<DialogItem name={d.name} id={d.id} />) })

    let messagesElements = state.messages.map((m) => { return (<Message message={m.message} />) })

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}  //делаем .dispatch в бизнес а потом с пропсов он приходит к нам
                                  placeholder="sdsaffdsaasdf"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button> 
                    </div>
                </div>
            
            </div>

        </div>
    )
}

export default Dialogs;