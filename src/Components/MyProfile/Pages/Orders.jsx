import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../Redux/Constant/ApiRoute";
import AuthUser from "../../../Helpers/AuthUser";

export default function Orders() {
  const [Orders, setOrders] = useState(null);
  const getMyOrders = () => {
    axios.get(API_URL.GET_MY_ORDERS + AuthUser().id).then((response) => {
      setOrders(response.data.data);
    });
  };
  useEffect(() => {
    getMyOrders();
    document.title = "Account Information";
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="row m-0">
        {Orders !== null
          ? Orders.map((order) => {
              return (
                <div className="col-md-4 pl-0">
                  <div className="card border">
                    <div className="card-header d-block">
                      <h6 class="card-subtitle mb-2 text-muted">Order ID</h6>
                      <b className="card-title m-0 text-dark">
                        {order.order_id}
                      </b>
                      {order.order_status === null ||
                      order.order_status === "0" ? (
                        <span class="badge text-white rounded-pill bg-secondary float-right">
                          Order Awaiting
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="card-body pt-2">
                      <div className="mb-2">Test List</div>
                      <div
                        className="card-text"
                        style={{ height: "200px", overflow: "auto" }}
                      >
                        <ol className="list-group list-group-numbered">
                          {order.tests.map((test, i) => {
                            return (
                              <li class="list-group-item" key={i}>
                                <small>{test.TestName}</small>
                              </li>
                            );
                          })}
                        </ol>
                      </div>
                    </div>
                    <div className="card-footer ">
                      <div>
                        Order Amount : <b>RS . {order.order_amount ?? 0}</b>
                      </div>
                      <hr />
                      <button className="btn-danger rounded"><i className="fa fa-trash"></i> Cancel Order</button>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}
