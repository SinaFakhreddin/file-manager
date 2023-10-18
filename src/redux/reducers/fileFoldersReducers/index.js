import {
    ADD_FILES,
    ADD_FOLDER,
    CHANGE_FOLDER, CHANGE_ROUTE, CREATE_FILE,
    CREATE_FOLDERS, SAVE_FILE_DATA,
    SET_LOADING, UPLOAD_FILE_DATA
} from "../../actions/actionsTypes/index.js";
import {saveFileDataHandler} from "../../actions/index.jsx";


const initialState = {
    isLoading:true,
    currentFolder:"root",
    adminFolders:[],
    adminFiles:[],
    userFiles:[],
    userFolders:[],
    currentRout:[],
    uploadedFiles:[]
}



export const FileFoldersReducers = (state=initialState , action)=>{


    switch (action.type) {
        case CREATE_FOLDERS:
            return {
                ...state ,
                userFolders: [...state.userFolders , action.payload]
            }

        case ADD_FOLDER:
            return {
                ...state,
                userFolders: action.payload
            }

        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        case CHANGE_FOLDER:
            return {
                ...state,
                currentFolder: action.payload
            }

        case CHANGE_ROUTE:
            return {
                ...state,
                currentRout: action.payload
            }

        case CREATE_FILE:
            return {
                ...state,
                userFiles: [...state.userFiles , action.payload]
            }

        case ADD_FILES:
            return {
                ...state ,
                userFiles: action.payload
            }

        case SAVE_FILE_DATA :
            return {
                ...state,
                userFiles: state?.userFiles?.map((userFile)=>{
                    if (userFile.docId===action.payload.fileId){
                        return {
                            ...userFile,
                            data:action.payload.data
                        }

                    } else return userFile
                })

            }

        default:
            return state
    }

}