import {
    ADD_FILES,
    ADD_FOLDER, CHANGE_FOLDER, CHANGE_ROUTE, CREATE_FILE,
    CREATE_FOLDERS,
    LOG_IN_USER,
    LOG_OUT_USER, SAVE_FILE_DATA,
    SET_LOADING
} from "./actionsTypes/index.js";

export const logInUser = (payload)=>{
    return {
        type:LOG_IN_USER,
        payload
    }
}

export const signOutUser = ()=>{
    return {
        type:LOG_OUT_USER,
    }
}


export const createFolder = (payload)=>{
    return {
        type:CREATE_FOLDERS,
        payload
    }
}
export const addFolder = (payload)=>{
    return {
        type:ADD_FOLDER,
        payload
    }
}

export const setLoading = (payload)=>{
    return {
        type:SET_LOADING,
        payload
    }
}



export const setChangeFolder = (payload)=>{
    return {
        type :CHANGE_FOLDER,
        payload
    }
}



export const setCurrentRoute = (payload)=>{
    return {
    type:CHANGE_ROUTE,
        payload
    }

}

export const createFileHandler = (payload)=>{
    return {
        type:CREATE_FILE,
        payload
    }
}

export const addFilesHandler = (payload)=>{
    return {
        type:ADD_FILES,
        payload
    }
}

export const saveFileDataHandler = (payload)=>{
    return {
        type: SAVE_FILE_DATA,
        payload
    }
}