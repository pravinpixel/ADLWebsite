import axios from 'axios'
import { API_URL } from '../../../Redux/Constant/ApiRoute'
import { FormResponse } from '../../../Helpers/FormResponse'
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { CgSpinner } from "react-icons/cg";
import { useState } from 'react'

export default function BannerForm() {
    const [Loading, setLoading] = useState(false)
    const MAX_FILE_SIZE = 102400; //100KB
    const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };
    function isValidFileType(fileName, fileType) {
        return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
    }
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                name      : Yup.string().required(),
                mobile    : Yup.string().required().min(10).max(10),
                location  : Yup.string().required(),
                test_name : Yup.string().required(),
                comments  : Yup.string().required(),
                reportFile: Yup.mixed().required()
                            .test("is-valid-type", "Not a valid image type", value => isValidFileType(value && value[0]?.name.toLowerCase(), "image"))
                            .test("is-valid-size", "Max allowed size is 100KB", value => value && value[0]?.size <= MAX_FILE_SIZE)
            })
        )
    })
    const submitBanner = (formData) => { 
        const data = {
            name      : formData.name,
            mobile    : formData.mobile,
            location  : formData.location,
            test_name : formData.test_name,
            comments  : formData.comments,
            reportFile: formData.reportFile[0]
        }
        axios.post(API_URL.BANNER_FROM, data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        }).then((response) => {
            FormResponse() 
            reset()
        }).catch((error) => {
            console.log(error.message)
        });
    }
    return (
        <div className='banner-form'>
            <form onSubmit={handleSubmit(submitBanner)}>
                <div className="frm-fields row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4 className='cont-frmhed'>Book Home Collection</h4>
                        <div className="form-data">
                            <input className={`input100 ${errors?.name && 'border-bottom border-danger'}`} placeholder="Name" {...register('name')} />
                        </div>
                        <div className="form-data">
                            <input className={`input100 ${errors?.mobile && 'border-bottom border-danger'}`} type="tel"  placeholder="Mobile" {...register('mobile')} />
                        </div>
                        <div className="form-data">
                            <input className={`input100 ${errors?.location && 'border-bottom border-danger'}`} placeholder="Select Your Location" {...register('location')} />
                        </div>
                        <div className={`form-data file-upload ${errors?.reportFile && 'border-bottom border-danger'}`}>
                            <input type="file" name="reportFile"  {...register('reportFile')} />
                        </div>
                        <div className="form-data">
                            <input className={`input100 ${errors?.test_name && 'border-bottom border-danger'}`} placeholder="Select Test Name" {...register('test_name')} />
                        </div>
                        <div className="form-data">
                            <input className={`input100 ${errors?.comments && 'border-bottom border-danger'}`}placeholder="Comments" {...register('comments')} />
                        </div>
                        <div className="form-data sbm">
                            <input type="submit" name="submit" value="SUBMIT" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
