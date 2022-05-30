import { combineReducers } from "redux";
import { BannerSlideReducer } from "./BannerReducer";
import { TestBookedReducer } from './TestBookedReducer'

const reducers = combineReducers({
    HomePageBanners : BannerSlideReducer,
    TopBookedTests  : TestBookedReducer
})

export default reducers