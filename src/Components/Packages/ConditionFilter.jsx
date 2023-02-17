import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setConditions, setPackageFilters } from "../../Redux/Actions/TestAction"
import { API_URL } from "../../Redux/Constant/ApiRoute"

function ConditionFilter({setFilter,setBtnClear}) {
    const Conditions = useSelector((state) => state.conditions.data)
    const packageFilters = useSelector((state) => state.packageFilters.filters)
    const dispatch = useDispatch()
    const FetchConditions = () => {
        axios.get(API_URL.CONDITIONS_LIST).then((response) => {
            dispatch(setConditions(response.data))
        })
    }
    const handleChecked = e => {
        var array = []
        var checkboxes = document.querySelectorAll('.Conditions_input:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }
        setFilter('conditions',array)
        // dispatch(setPackageFilters({ ...packageFilters, OrganName: array }))
        setBtnClear(checkboxes.length > 0 ? true : false)
    };
    useEffect(() => {
        FetchConditions()
    }, [])
    return (
        <div>
            <h4>Conditions</h4>
            <ul style={{ maxHeight:"380px",overflowY:"auto" }}>
                {
                    Conditions !== undefined ?
                        Conditions.map((item, id) => (
                            <li key={id}>
                                <label className="cstm-chkbx">
                                    {item.name}
                                    <input type="checkbox" className='Conditions_input' value={item.name} data-id={id} onChange={handleChecked} />
                                    <span className="checkmark"></span>
                                </label>
                            </li>
                        ))
                        : null
                }
            </ul>
        </div>
    )
}

export default ConditionFilter