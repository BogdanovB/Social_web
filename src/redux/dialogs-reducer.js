//функция которая принимает state / action и возвращает измененный state

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY://пользователь вводи сообщения 
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body }); // записываю в новые сообщения то что написал пользователь
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body //этот body идет от этого условия (action.type === UPDATE_NEW_MESSAGE_BODY)
    }
}

export default dialogsReducer;