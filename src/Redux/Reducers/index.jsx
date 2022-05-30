import { combineReducers } from "redux";
import { BannerSlideReducer } from "./BannerReducer";
import { TestBookedReducer, TestCartReducer } from './TestReducer'

const reducers = combineReducers({
    HomePageBanners : BannerSlideReducer,
    TopBookedTests  : TestBookedReducer,
    TestCartList : TestCartReducer,
})

export default reducers