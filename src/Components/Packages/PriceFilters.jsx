import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPackageFilters } from '../../Redux/Actions/TestAction'

function PriceFilters() {
    const packageFilters = useSelector((state) => state.packageFilters.filters)
    const dispatch = useDispatch()
    const handleChecked = (data) => {  
        console.log(data)
        dispatch(setPackageFilters({...packageFilters,TestPrice:data}))
    };
    return (
        <ul>
            <h4>Price Range</h4>
            <li>
                <label className="cstm-chkbx">
                    Low to High
                    <input type="radio" name="price_range" onChange={() => handleChecked('low')}/>
                    <span className="checkmark"></span>
                </label>
            </li>
            <li>
                <label className="cstm-chkbx">
                    High to low
                    <input type="radio" name="price_range" onChange={() => handleChecked('hight')} />
                    <span className="checkmark"></span>
                </label>
            </li>
        </ul>
    )
}

export default PriceFilters