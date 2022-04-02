import { DISPLAY_ALERT } from "./actions"

const reducer = (state, action) => {
    if(action.type === DISPLAY_ALERT) {
        return {...state, showALert:true,alertType:'danger',alertText: 'Please Put All Neccesary Info!'}
    }
    throw new Error(`No Such Action : ${action.type}` )
}

export default reducer