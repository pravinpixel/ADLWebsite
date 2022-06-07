import { combineReducers } from "redux";
import { BannerSlideReducer } from "./BannerReducer";
import { TestBookedReducer, TestCartReducer, TestDetailReducer, TestListReducer } from './TestReducer'

const reducers = combineReducers({
    HomePageBanners : BannerSlideReducer,
    TopBookedTests  : TestBookedReducer,
    TestCartList    : TestCartReducer,
    TestDetails     : TestDetailReducer,
    TestList        : TestListReducer
})

export default reducers