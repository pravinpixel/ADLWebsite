import { Navigate } from "react-router";
import ReportForm from "./Home/Sections/ReportForm";

function Reports() {
    const sessionId = localStorage.getItem('report_session_id')
   if(sessionId !== null) return <Navigate to="/reports/account" replace={true} />
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
                                        <ReportForm />
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

export default Reports