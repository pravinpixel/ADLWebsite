import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { Link } from "react-router-dom";
import AccountInformation from "./Pages/AccountInformation";
import ChangePassword from "./Pages/ChangePassword";
import Orders from "./Pages/Orders";
import AuthUser from "../../Helpers/AuthUser";
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
        <Tab.Container id="myProfileTabs" defaultActiveKey="first">
          <Row>
            <Col sm={3} className="card border p-0 shadow">
              <div className="card-header d-block">
                <div className="common-heading cmg-img">
                  <span
                    className="alphabet-argmnt"
                    style={{ background: "#5c2d91", color: "#fff" }}
                  >
                    {AuthUser().name.charAt(0)}
                  </span>
                  <h2 className="m-0">
                    <span> Hello! </span> <span className="yelow"> {AuthUser().name} </span>
                  </h2>
                </div>
              </div>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="rounded-0">
                    <i className="fa fa-user mr-2"></i>
                    Account Information
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="MyOrders" className="rounded-0">
                    <i className="fa fa-shopping-cart mr-2"></i>
                    My Orders
                  </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="MyAddrees" className="rounded-0">My Addrees</Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link eventKey="ChangeMyPassword" className="rounded-0">
                    <i className="fa fa-key mr-2"></i> 
                    Change my Password
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <AccountInformation />
                </Tab.Pane>
                <Tab.Pane eventKey="MyOrders">
                  <Orders />
                </Tab.Pane>
                {/* <Tab.Pane eventKey="MyAddrees">3 </Tab.Pane> */}
                <Tab.Pane eventKey="ChangeMyPassword">
                  <ChangePassword />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}
