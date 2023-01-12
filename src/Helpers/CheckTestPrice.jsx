import { useSelector } from "react-redux";

function CheckTestPrice(props) {
    const TestLocation = useSelector((state) => state.TestLocation); 
    var price
    try {
        props.test.test_price.map((item, i) => {
            if (item.TestLocation === TestLocation.TestLocation) {
                price = item.TestPrice
            }
        })
    } catch (error) {
        props.test.packages_price.map((item, i) => {
            if (item.TestLocation === TestLocation.TestLocation) {
                price = item.TestPrice
            }
        })
    }
    if (price !== undefined) {
        return price
    } else {
        return props.test.TestPrice
    }
}


export default CheckTestPrice