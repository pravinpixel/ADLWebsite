import axios from 'axios'
import React from 'react'
import { Form } from 'react-component-form'
import {API_URL} from '../../../Redux/Constant/ApiRoute'
import upload from '../../../assets/images/upload.png'
import {FormResponse} from '../../../Helpers/FormResponse'

export default function BannerForm() {
     
    const handleSubmit  = (formData, formElement) => {
        axios.post(API_URL.BANNER_FROM, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            FormResponse()
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
                        <div className="form-data upload-btn-wrapper">
                            <button className="btn">Upload a file <img src={upload}/> </button>
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
