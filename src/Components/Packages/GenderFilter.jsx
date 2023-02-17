import { useDispatch, useSelector } from 'react-redux';
import { setPackageFilters } from '../../Redux/Actions/TestAction';

function GenderFilter({setFilter,setBtnClear}) {
    const genders = ["Male", "Female", "Both & Others"];
    const dispatch = useDispatch()
    const packageFilters = useSelector((state) => state.packageFilters.filters)
    const handleChecked = e => {  
        var array = []
        var checkboxes = document.querySelectorAll('.gender_input:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        } 
        // dispatch(setPackageFilters({...packageFilters,ApplicableGender:array}))
        setFilter('gender',array)
        setBtnClear(checkboxes.length > 0 ? true : false)
    };
    return (
        <ul>
            <h4>Genders</h4>
            {genders.map((gender, id) => (
                <li key={id}>
                    <label className="cstm-chkbx">
                        {gender}
                        <input type="checkbox" className='gender_input' name='gender' value={gender.charAt(0)} data-id={id} onChange={handleChecked} />
                        <span className="checkmark"></span>
                    </label>
                </li>
            ))}
        </ul>
    );
}

export default GenderFilter