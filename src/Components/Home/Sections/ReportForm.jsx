import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ReportForm() {
    const navigate = useNavigate()
    const [disable, setDisable] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                loginid: Yup.string().required(),
                pwd: Yup.string().required(),
            })
        )
    })
    const submit = (data) => {
        axios.post('https://reports.anandlab.com/v3/wsLogin.asmx/ValidateLogin', data).then((response) => {
            const result = JSON.parse(response.data.d)
            if (result.Status === 'OK') {
                localStorage.setItem('report_session_id', result.SessionID)
                toast.success(result.Msg)
                getReports(result.SessionID)
                getUserData(result.SessionID)
                navigate('/reports/account')
            } else {
                toast.error(result.Msg)
            }
            reset()
        })
    }
    const getUserData = (id) => {
        axios.post('https://reports.anandlab.com/v3/wsLogin.asmx/GetUserDetails', {
            psessionid: id
        }).then((response) => {
            const result = JSON.parse(response.data.d)
            localStorage.setItem('report_user', JSON.stringify(result))
        })
    }
    const getReports = (id) => {
        axios.post('https://reports.anandlab.com/v3/wsLogin.asmx/GetReportStatusWalkIn', {
            psessionid: id
        }).then((response) => {
            const result = JSON.parse(response.data.d)
            localStorage.setItem('reports', JSON.stringify(result))
        })
    }
    useEffect(() => {
        const sesstionId = localStorage.getItem('report_session_id')
        if (sesstionId !== null) {
            setDisable(true)
        }
    }, [])
    return (
        <form onSubmit={handleSubmit(submit)}>
            <h4> Get your Reports  </h4>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">User ID</label>
                <input type="text" disabled={disable} className={`form-control form-control ${errors.loginid && 'border-danger'}`} placeholder="Enter Your ID"   {...register('loginid')} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Access Code</label>
                <input type="password" disabled={disable} className={`form-control form-control ${errors.pwd && 'border-danger'}`} placeholder="Enter Your Code" {...register('pwd')} />
            </div>
            <div className="text-center">
                {
                    disable ?
                        <Link to={'reports/account'} className="btn-primary w-100">View Reports</Link>
                        :
                        <button type="submit" className="btn-primary w-100">Submit</button>
                }
            </div>
        </form>
    )
}

export default ReportForm