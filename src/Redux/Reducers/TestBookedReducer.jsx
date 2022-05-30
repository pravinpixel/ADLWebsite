import { ActionTypes } from "../Constant/ActionTypes";

export const TestBookedReducer = (state = [], {type, payload}) => { 
    switch (type) {
        case ActionTypes.SET_TOP_BOOKED_TESTS : return {...state, tests : payload};
        default : return state;
    }
}