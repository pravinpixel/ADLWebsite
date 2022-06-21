import { combineReducers } from "redux";
import { BannerSlideReducer } from "./BannerReducer";
import { TestBookedReducer, addToCardReducer, TestCartReducer, TestDetailReducer, TestListReducer, removeFromCardReducer } from './TestReducer'

const reducers = combineReducers({
    HomePageBanners      : BannerSlideReducer,
    TopBookedTests       : TestBookedReducer,
    TestCartList         : TestCartReducer,
    TestDetails          : TestDetailReducer,
    TestList             : TestListReducer,
    addToCardList        :  addToCardReducer,
    removeFromCardList   :  removeFromCardReducer
})

export default reducers