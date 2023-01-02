import { ActionTypes } from "../Constant/ActionTypes"

export default setLoading = (status) => {
    return {
        type    : ActionTypes.START_LOADING,
        payload : status
    }
}