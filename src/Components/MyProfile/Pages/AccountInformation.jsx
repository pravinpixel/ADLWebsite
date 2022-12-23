import Table from 'react-bootstrap/Table';

export default function AccountInformation() {
  const customer = JSON.parse(localStorage.getItem('user'));
  const customer_billing = JSON.parse(localStorage.getItem('billing_data'));
  return (
    <div>
      <div className="card shadow border">
        <div className="card-body p-0">
          <Table size="sm" borderless>
            <tr>
              <th width="150px">First Name</th>
              <td>{customer_billing.first_name}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{customer_billing.last_name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{customer.email}</td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{customer_billing.phone_number}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{customer_billing.address}</td>
            </tr>
            <tr>
              <th>City / Town</th>
              <td>{customer_billing.city_town}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{customer_billing.state}</td>
            </tr>
            <tr>
              <th>Pin Code</th>
              <td>{customer_billing.pin_code}</td>
            </tr>
          </Table>
        </div>
      </div>
    </div>
  );
}
