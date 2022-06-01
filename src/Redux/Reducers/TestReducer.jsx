import { ActionTypes } from "../Constant/ActionTypes";

export const TestBookedReducer = (state = [], {type, payload}) => { 
    switch (type) {
        case ActionTypes.SET_TOP_BOOKED_TESTS : return {...state, tests : payload};
        default : return state;
    }
}

export const TestCartReducer = (state = [], {type, payload}) => { 
    switch (type) {
        case ActionTypes.SET_TEST_CART_LIST : return {...state, cartTest : payload};
        default : return state;
    }
}

export const TestDetailReducer = (state = [], {type, payload}) => { 
    switch (type) {
        case ActionTypes.SET_TEST_DETAILS : return {...state, TestDetails : payload};
        case ActionTypes.REMOVE_TEST_DETAILS : return {};
        default : return state;
    }
}

 