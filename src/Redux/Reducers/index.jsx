import { combineReducers } from "redux";
import BannerReducer from "./BannerReducer";
import { TestBookedReducer, addToCardReducer, TestCartReducer, TestDetailReducer, TestListReducer, removeFromCardReducer,setTestLocation, setTestFilters, setPackageFilters, setOrgans, setConditions } from './TestReducer'
import { AuthReducer } from "./AuthReducer";
import { LoaderReducer } from "./LoaderReducer";
import { bannerApi } from "../../services/bannerApi";
import { conditionsApi } from "../../services/conditionsApi";

const reducers = combineReducers({
    [bannerApi.reducerPath]    : bannerApi.reducer,
    [conditionsApi.reducerPath]: conditionsApi.reducer,
    Banners                    : BannerReducer,
    TopBookedTests             : TestBookedReducer,
    TestCartList               : TestCartReducer,
    TestDetails                : TestDetailReducer,
    TestLocation               : setTestLocation,
    TestList                   : TestListReducer,
    filters                    : setTestFilters,
    packageFilters             : setPackageFilters,
    addToCardList              : addToCardReducer,
    removeFromCardList         : removeFromCardReducer,
    authUser                   : AuthReducer,
    Loader                     : LoaderReducer,
    organs                     : setOrgans,
    conditions                 : setConditions,
})

export default reducers