import { ActionTypes } from "../Constant/ActionTypes"

export const  setBanners = (banners) => {
    return {
        type    : ActionTypes.SET_BANNERS,
        payload : banners
    }
}