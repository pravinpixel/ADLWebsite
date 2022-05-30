import { combineReducers } from "redux";
import { BannerSlideReducer } from "./BannerReducer";

const reducers = combineReducers({
    HomePageBanners : BannerSlideReducer
})

export default reducers