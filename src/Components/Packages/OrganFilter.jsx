import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOrgans, setPackageFilters } from '../../Redux/Actions/TestAction'
import { API_URL } from '../../Redux/Constant/ApiRoute'

function OrganFilter({setBtnClear}) {
    const Organs = useSelector((state) => state.organs.data)
    const packageFilters = useSelector((state) => state.packageFilters.filters)
    const dispatch = useDispatch()
    const FetchOrgans = () => {
        axios.get(API_URL.ORGAN_LIST).then((response) => {
            dispatch(setOrgans(response.data))
        })
    }
    const handleChecked = e => {  
        var array = []
        var checkboxes = document.querySelectorAll('.organs_input:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        } 
        dispatch(setPackageFilters({...packageFilters,OrganName:array}))
        setBtnClear(checkboxes.length > 0 ? true : false)
    };
    useEffect(() => {
        FetchOrgans()
    }, [])

    return (
        <ul>
            <h4>Organs</h4>
            {
                Organs !== undefined ?
                    Organs.map((item,id) => (
                        <li>
                            <label className="cstm-chkbx">
                                {item.name}
                                <input type="checkbox" className='organs_input' value={item.name} data-id={id} onChange={handleChecked} />
                                <span className="checkmark"></span>
                            </label>
                        </li>
                    ))
                : null
            }
        </ul>
    )
}

export default OrganFilter