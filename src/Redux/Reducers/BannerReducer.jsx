import { ActionTypes } from "../Constant/ActionTypes";

export const BannerSlideReducer = (state = [], {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_BANNERS : return {...state, banners : payload};
        default : return state;
    }
}