import React from 'react'

function ReportForm() {
    return (
        <div className='banner-form reports-addon'>
            <h4> Get your Reports </h4>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">User ID</label>
                    <input type="email" className="form-control form-control" placeholder="Enter Your ID" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Access Code</label>
                    <input type="password" className="form-control form-control" placeholder="Enter Your Code" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn-primary w-100">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ReportForm