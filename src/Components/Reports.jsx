import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { Accordion, Alert, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function Reports() {
    const [report, setReport] = useState(null)
    const [reportUser, setReportUser] = useState(null)
    useEffect(() => {
        if (localStorage.getItem('reports')) {
            setReport(JSON.parse(localStorage.getItem('reports')))
        }
        if (localStorage.getItem('report_user')) {
            setReportUser(JSON.parse(localStorage.getItem('report_user')))
        }
    }, [])
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                loginid: Yup.string().required(),
                pwd: Yup.string().required(),
            })
        )
    })
    const { register: changeRegister, handleSubmit: changeHandleSubmit, formState: { errors: changeError }, reset: changeReset } = useForm({
        resolver: yupResolver(
            Yup.object().shape({
                pnew_pwd: Yup.string().required(),
                pold_pwd: Yup.string().required(),
                confirmPassword: Yup.string().required().oneOf([Yup.ref('pnew_pwd')], 'Passwords does not match'),
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
            setReportUser(result)
            localStorage.setItem('report_user', JSON.stringify(result))
        })
    }
    const getReports = (id) => {
        axios.post('https://reports.anandlab.com/v3/wsLogin.asmx/GetReportStatusWalkIn', {
            psessionid: id
        }).then((response) => {
            const result = JSON.parse(response.data.d)
            setReport(result)
            localStorage.setItem('reports', JSON.stringify(result))
        })
    }
    const assetPath = (path) => {
        return `https://reports.anandlab.com/v3/${path.split(':')[1].replace('|', '')}`
    }
    const changePasword = (data) => {
        axios.post('https://reports.anandlab.com/v3/wsLogin.asmx/ChangePassword', {
            pnew_pwd: data.pnew_pwd,
            pold_pwd: data.pnew_pwd,
            psessionid: localStorage.getItem('report_session_id')
        }).then((response) => {
            const result = JSON.parse(response.data.d)
            if (result.Status === 'OK') {
                toast.success('Your Password Changed!')
                changeReset()
            } else {
                toast.error(result.Status)
            }
        })
    }
    const [show, setShow] = useState(false);
    const LogoutAccount = () => {
        Swal.fire({
            title: "Are you sure !",
            text:'want logout reports account ?',
            allowOutsideClick: false,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!",
        }).then((result) => {
            if (result.isConfirmed) {
                setReport(null)
                localStorage.removeItem("report_user");
                localStorage.removeItem("reports");
                localStorage.removeItem("report_session_id");
                toast.success('Logout Success !')
            }
        });
    }
    if (report) {
        return (
            <div>
                <section className="main-billfrm cmnmenu-topmargin">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <Alert variant="success">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5>
                                            {reportUser.UserName}
                                        </h5>
                                        <button className="border btn-light rounded" onClick={LogoutAccount}>
                                            <b><i className="fa fa-power-off mr-2"></i> Logout</b>
                                        </button>
                                    </div>
                                </Alert>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Report Information</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="mb-4 d-flex justify-content-between align-items-center">
                                                <h6 className="m-0">Reports Status : <div className="badge bg-success text-white ml-2">{report.ReportStatus}</div></h6>
                                                <Link to={assetPath(report.ReportList)} target="_blank" download className="btn-primary">
                                                    <i class="fa fa-file-text-o mr-2" aria-hidden="true"></i>
                                                    My Report
                                                </Link>
                                            </div>
                                            <table className="table table-borderless m-0">
                                                <tbody>
                                                    <tr>
                                                        <td>Lab ID</td>
                                                        <td>:</td>
                                                        <th>{report.LabID}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>Reg.Date</td>
                                                        <td>:</td>
                                                        <th>{report.RegDate}</th>
                                                    </tr>
                                                    <tr>
                                                        <td>Delivery Date</td>
                                                        <td>:</td>
                                                        <th>{report.DeliveryDate}</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Change Password</Accordion.Header>
                                        <Accordion.Body>
                                            <form onSubmit={changeHandleSubmit(changePasword)}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Old password</Form.Label>
                                                    <Form.Control type="password" className={`${changeError.pold_pwd && 'border-danger'}`} placeholder="Type here.." {...changeRegister('pold_pwd')} required />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>New password</Form.Label>
                                                    <Form.Control type="password" className={`${changeError.pnew_pwd && 'border-danger'}`} placeholder="Type here.." {...changeRegister('pnew_pwd')} required />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>New password</Form.Label>
                                                    <Form.Control type="password" className={`${changeError.confirmPassword && 'border-danger'}`} placeholder="Type here.." {...changeRegister('confirmPassword')} required />
                                                </Form.Group>
                                                <button type="submit" className="btn-primary ">Reset Password</button>
                                            </form>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Custom Modal Styling
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <iframe src={assetPath(report.ReportList)} frameborder="0" width='100%' height='100%'></iframe>
                    </Modal.Body>
                </Modal>
            </div >
        )
    } else {
        return (
            <div>
                <section className="main-billfrm cmnmenu-topmargin">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="row fully-bxn no-gutters">
                                    <div className="col-lg-6">
                                        <div className="dhoni-bgm">
                                            <div className="common-heading">
                                                <h2>
                                                    Access your test
                                                    <span> reports online ANY TIME, ANY WHERE FROM ANY DEVICE</span>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="cir-frm">
                                            <form onSubmit={handleSubmit(submit)}>
                                                <div className="frm-fields row clearfix">
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <div className="common-heading">
                                                            <h2>
                                                                ACCESS YOUR <span> REPORTS </span>
                                                            </h2>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-data col-lg-12">
                                                                <small>User ID</small>
                                                                <input className={`input1001 ${errors.loginid && 'border-danger'}`} type="text" placeholder="User Id" {...register('loginid')} />
                                                            </div>
                                                            <div className="form-data col-lg-12">
                                                                <small>Access Code</small>
                                                                <input className={`input1001 ${errors.pwd && 'border-danger'}`} type="password" placeholder="Access Code" {...register('pwd')} />
                                                            </div>
                                                            <div className="form-data sbm col-lg-12">
                                                                <button type="submit" className="btn-primary btn-flx-full">LOGIN</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Reports