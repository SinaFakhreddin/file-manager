import {LOG_IN_USER, LOG_OUT_USER} from "../../actions/actionsTypes/index.js";

const initialState = {
    isAuthenticated:false,
    user:undefined
}



export const authReducer = (state=initialState , action)=>{


    switch (action.type) {

        case LOG_IN_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload

            }

        case LOG_OUT_USER:
            return {
               isAuthenticated: false,
                user: undefined
            }

        default:
            return state

    }

}