import axios from 'axios' 
import { Form } from 'react-component-form'
import {API_URL} from '../../../Redux/Constant/ApiRoute' 
import {FormResponse} from '../../../Helpers/FormResponse'
import { useDispatch } from 'react-redux'
import {setLoading} from '../../../Redux/Actions/LoaderAction'

export default function BannerForm() {
    const dispatch = useDispatch()
    const handleSubmit  = (formData, formElement) => {
        dispatch(setLoading(true))
        axios.post(API_URL.BANNER_FROM, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            FormResponse()
            dispatch(setLoading(false))
            formElement.reset()
        }).catch((error) => {
            console.log(error.message)
        });
    }
    return (
        <div className='banner-form'>
            <Form onSubmit={handleSubmit}>
                <div className="frm-fields row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4 className='cont-frmhed'>Book Home Collection</h4>
                        <div className="form-data">
                            <input className="input100" type="text" name='name' placeholder="Name" required/> 
                        </div>
                        <div className="form-data">
                            <input className="input100" type="text" name='mobile' placeholder="Mobile" required/> 
                        </div>
                        <div className="form-data">
                            <input className="input100" type="text" name='location' placeholder="Select Your Location" required/> 
                        </div> 
                        <div className="form-data file-upload">
                            <input type="file" name="reportFile"  required/>
                        </div>
                        <div className="form-data">
                            <input className="input100" type="text" name='test_name' placeholder="Select Test Name" required/> 
                        </div>
                        <div className="form-data">
                            <input className="input100" type="text" name='comments' placeholder="Comments" required/> 
                        </div>
                        <div className="form-data sbm">
                            <input type="submit" name="submit" value="SUBMIT" required/>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )
}
