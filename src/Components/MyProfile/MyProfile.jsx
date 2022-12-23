import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab"; 
import { Link } from "react-router-dom";
import AccountInformation from './Pages/AccountInformation'

export default function MyProfile() { 
 
  return (
    <>
      <section className="inner-banner with-liners">
        <div className="inner-caption">
          <div className="container">
            <div className="row">
              <div className="caption-details bnr-txt">
                <h1>My Profile</h1>
                <ul>
                  <li>
                    <Link to="/my-account/"> Home </Link>
                  </li>
                  <li> / </li>
                  <li> My Profile </li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container className="py-5">
        {/* <div className="common-heading cmg-img">
          <span
            className="alphabet-argmnt"
            style={{ background: "#5c2d91", color: "#fff" }}
          >
            J
          </span>
          <h2>
            <span> Hello! </span> <span className="yelow"> John </span>
          </h2>
        </div> */}
        <Tab.Container id="myProfileTabs" defaultActiveKey="first">
          <Row>
            <Col sm={3} className='card border p-0 shadow'>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Account Information</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="MyOrders">My Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="MyAddrees">My Addrees</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="ChangeMyPassword">
                    Change my Password
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <AccountInformation/>
                </Tab.Pane>
                <Tab.Pane eventKey="MyOrders">2 </Tab.Pane>
                <Tab.Pane eventKey="MyAddrees">3 </Tab.Pane>
                <Tab.Pane eventKey="ChangeMyPassword">4 </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}
