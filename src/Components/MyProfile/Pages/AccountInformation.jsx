import axios from 'axios';
import {API_URL} from '../../../Redux/Constant/ApiRoute'
import { Form } from 'react-component-form'
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function AccountInformation() {
  const customer = JSON.parse(localStorage.getItem('user'));
  const customer_billing = JSON.parse(localStorage.getItem('billing_data'));
  const [Name, setName] = useState(customer.name);
  const [PrimaryEmail, setPrimaryEmail] = useState(customer.email);
  const [FirstName, setFirstName] = useState(customer_billing && customer_billing.first_name);
  const [LastName, setLastName] = useState(customer_billing && customer_billing.last_name);
  const [Email, setEmail] = useState(customer_billing && customer_billing.email);
  const [PhoneNumber, setPhoneNumber] = useState(customer_billing && customer_billing.phone_number);
  const [Address, setAddress] = useState(customer_billing && customer_billing.address);
  const [CityTown, setCityTown] = useState(customer_billing && customer_billing.city_town);
  const [State, setState] = useState(customer_billing && customer_billing.state);
  const [PinCode, setPinCode] = useState(customer_billing && customer_billing.pin_code);

  const UpdateInfo = (BillingAddress) => {
    axios.post(API_URL.UPDATE_MY_PROFILE + customer.id ,BillingAddress).then((response) => {
      if (response.data.status) {
        console.log(response.data)
        toast.success(response.data.message)
        localStorage.setItem('user',JSON.stringify(response.data.data))
        localStorage.setItem('billing_data',JSON.stringify(BillingAddress))
      }
    });
  } 
  
  return (
    <div>
      <div className="card shadow border">
        <div className="card-body">
          <Form onSubmit={UpdateInfo}>
            <h6 className='p-3' style={{ color: "#5c2d91" }}><b>Account Details</b></h6>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Name</b>
              </div>
              <div className="col p-0">
                <input type="text" className='form-control' name="name" value={Name} onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Email</b>
              </div>
              <div className="col p-0">
                <input type="text" className='form-control' name="primary_email" value={PrimaryEmail} onChange={(e) => setPrimaryEmail(e.target.value)} />
              </div>
            </div>
            <h6 className='p-3' style={{ color: "#5c2d91" }}><b>Billing Account Details</b></h6>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>First Name</b>
              </div>
              <div className="col p-0">
                <input type="text" className='form-control' name="first_name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Last Name</b>
              </div>
              <div className="col p-0">
                <input type="text" className='form-control' name="last_name" value={LastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Email</b>
              </div>
              <div className="col p-0">
                <input type="text" className='form-control' name="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Phone Number</b>
              </div>
              <div className="col p-0">
                <input type="text" className='form-control' minLength={10} maxLength={12} name="phone_number" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}  />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Address</b>
              </div>
              <div className="col p-0">
                <input type="text" className='form-control' name="address" value={Address} onChange={(e) => setAddress(e.target.value)}  />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>City / Town</b>
              </div>
              <div className="col p-0">
                <input type="text" className='form-control' name="city_town" value={CityTown} onChange={(e) => setCityTown(e.target.value)} />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>State</b>
              </div>
              <div className="col p-0">
                <input type="text" className='form-control' name="state" value={State} onChange={(e) => setState(e.target.value)} />
              </div>
            </div>
            <div className="row m-0 mb-2">
              <div className="col-md-3">
                <b>Pincode</b>
              </div>
              <div className="col p-0">
                <input type="number" className='form-control' name="pin_code" value={PinCode} onChange={(e) => setPinCode(e.target.value)} />
              </div>
            </div> 
            <button type="submit" className='btn-primary rounded px-3 py-2 float-right'>Update</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
