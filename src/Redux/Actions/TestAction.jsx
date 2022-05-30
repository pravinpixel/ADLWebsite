import { ActionTypes } from "../Constant/ActionTypes"

export const  setTopBookedTest = (tests) => {
    return {
        type    : ActionTypes.SET_TOP_BOOKED_TESTS,
        payload : tests
    }
}