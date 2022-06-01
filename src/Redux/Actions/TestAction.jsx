import { ActionTypes } from "../Constant/ActionTypes"

export const  setTopBookedTest = (tests) => {
    return {
        type    : ActionTypes.SET_TOP_BOOKED_TESTS,
        payload : tests
    }
}

export const  setTestCartList = (cartTest) => {
    return {
        type    : ActionTypes.SET_TEST_CART_LIST,
        payload : cartTest
    }
}

export const  setTestDetails = (testDetails) => {
    return {
        type    : ActionTypes.SET_TEST_DETAILS,
        payload : testDetails
    }
}

export const  removeTestDetails = (testDetails) => {
    return {
        type    : ActionTypes.REMOVE_TEST_DETAILS,
        payload : testDetails
    }
}