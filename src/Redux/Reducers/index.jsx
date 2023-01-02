import { combineReducers } from "redux";
import { BannerSlideReducer } from "./BannerReducer";
import { TestBookedReducer, addToCardReducer, TestCartReducer, TestDetailReducer, TestListReducer, removeFromCardReducer,setTestLocation } from './TestReducer'
import { AuthReducer } from "./AuthReducer";
import { LoaderReducer } from "./LoaderReducer";


const reducers = combineReducers({
    HomePageBanners   : BannerSlideReducer,
    TopBookedTests    : TestBookedReducer,
    TestCartList      : TestCartReducer,
    TestDetails       : TestDetailReducer,
    TestLocation      : setTestLocation,
    TestList          : TestListReducer,
    addToCardList     : addToCardReducer,
    removeFromCardList: removeFromCardReducer,
    authUser          : AuthReducer,
    Loader            : LoaderReducer,
})

export default reducers