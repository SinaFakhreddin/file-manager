import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {authReducer} from "./reducers/authReducer/index.js";
import {FileFoldersReducers} from "./reducers/fileFoldersReducers/index.js";

const combinedReducers = combineReducers({
    auth:authReducer,
    fileFolders:FileFoldersReducers
    } ,
        composeWithDevTools(applyMiddleware(thunk))
    )



export const store = createStore(combinedReducers)