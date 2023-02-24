import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
function FloatingForm() {
    const [open, setOpen] = useState(true)
    return (
        <div class="womensdayawrap">
            <div className={open == true ? 'womendaycontent ' : 'womendaycontent conthgt'}>
                <div className="green-bg animated fadeInRight">
                    <h4 className="mb-3 text-white">Get in Touch</h4>
                    <Form />
                </div>
            </div>
            <div class="womensdayawrapsec"  onClick={() => setOpen(!open)} >
                <span>
                    <img src={require('../../src/assets/images/call-girl.png')} class="img-responsive" alt="Call" />
                </span>
                <span>
                    <h2>Contact Us</h2>
                    <p>Click here to reach us</p>
                </span>
                { open ? <FaPlus/> : <FaMinus/> }
            </div>
        </div>
    )
}
function Form() {
    return (
        <form className="">
            <div className="formdata">
                <input type="text" placeholder="Enter Your Name" className='form-control' />
            </div>
            <div className="formdata">
                <input type="email" placeholder="Enter Your Email ID" className='form-control' />
            </div>
            <div className="formdata">
                <input type="tel" placeholder="Enter Your Mobile Number" className='form-control' />
            </div>
            <div className="formdata">
                <button type="submit" className="btn-primary btn-flx-full">Submit</button>
            </div>
        </form>
    )
}

export default FloatingForm