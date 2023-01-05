import { combineReducers } from "redux";
import { BannerSlideReducer } from "./BannerReducer";
import { TestBookedReducer, addToCardReducer, TestCartReducer, TestDetailReducer, TestListReducer, removeFromCardReducer,setTestLocation, setTestFilters, setPackageFilters, setOrgans, setConditions } from './TestReducer'
import { AuthReducer } from "./AuthReducer";
import { LoaderReducer } from "./LoaderReducer";


const reducers = combineReducers({
    HomePageBanners   : BannerSlideReducer,
    TopBookedTests    : TestBookedReducer,
    TestCartList      : TestCartReducer,
    TestDetails       : TestDetailReducer,
    TestLocation      : setTestLocation,
    TestList          : TestListReducer,
    filters           : setTestFilters,
    packageFilters    : setPackageFilters,
    addToCardList     : addToCardReducer,
    removeFromCardList: removeFromCardReducer,
    authUser          : AuthReducer,
    Loader            : LoaderReducer,
    organs            : setOrgans,
    conditions        : setConditions,
})

export default reducers