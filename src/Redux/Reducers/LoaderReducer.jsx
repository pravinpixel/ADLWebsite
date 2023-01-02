import { ActionTypes } from "../Constant/ActionTypes";

export const LoaderReducer = (state = false, {type, payload}) => {
    switch (type) {
        case ActionTypes.START_LOADING : 
        return {...state, status : payload};
        default : return state;
    }
}