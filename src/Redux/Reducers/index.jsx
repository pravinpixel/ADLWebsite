import { combineReducers } from "redux";
import { BannerSlideReducer } from "./BannerReducer";
import { TestBookedReducer, TestCartReducer, TestDetailReducer } from './TestReducer'

const reducers = combineReducers({
    HomePageBanners     : BannerSlideReducer,
    TopBookedTests      : TestBookedReducer,
    TestCartList        : TestCartReducer,
    TestDetails         : TestDetailReducer,
})

export default reducers