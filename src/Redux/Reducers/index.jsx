import { combineReducers } from "redux";
import { BannerSlideReducer } from "./BannerReducer";
import { TestBookedReducer, addToCardReducer, TestCartReducer, TestDetailReducer, TestListReducer, removeFromCardReducer } from './TestReducer'
import { AuthReducer } from "./AuthReducer";

const reducers = combineReducers({
    HomePageBanners      : BannerSlideReducer,
    TopBookedTests       : TestBookedReducer,
    TestCartList         : TestCartReducer,
    TestDetails          : TestDetailReducer,
    TestList             : TestListReducer,
    addToCardList        :  addToCardReducer,
    removeFromCardList   :  removeFromCardReducer,
    authUser : AuthReducer
})

export default reducers