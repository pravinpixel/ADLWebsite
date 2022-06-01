import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-component-form'
import {API_URL} from '../../../Redux/Constant/ApiRoute'

export default function BannerForm() {
    const handleSubmit  = (formData, formElement) => {
        console.log(formData)

        axios.post(API_URL.BANNER_FROM, formData).then((response) => {
            alert(response.data.message)
            formElement.reset()
        }).catch((error) => {
            console.log(error.message)
        })
    }
    return (
        <div className='banner-form'>
            
            <Form onSubmit={handleSubmit} enctype="multipart/form-data">
                <div className="frm-fields row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4 className='cont-frmhed'>Book Home Collection</h4>
                        <div className="form-data">
                            <input className="input100" type="text" name='name' placeholder="Name"/> 
                        </div>
                        <div className="form-data">
                            <input className="input100" type="tel" name='mobile' placeholder="Mobile"/> 
                        </div>
                        <div className="form-data">
                            <input className="input100" type="text" name='location' placeholder="Select Your Location"/> 
                        </div> 
                        <div className="form-data upload-btn-wrapper">
                            <button className="btn">Upload a file----</button>
                            <input type="file" name="reportFile" />
                        </div>
                        <div className="form-data">
                            <input className="input100" type="text" name='text_name' placeholder="Select Test Name"/> 
                        </div>
                        <div className="form-data">
                            <input className="input100" type="text" name='comments' placeholder="Comments"/> 
                        </div>
                        <div className="form-data sbm">
                            <input type="submit" name="submit" value="SUBMIT"/>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )
}
