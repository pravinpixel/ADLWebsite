import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../Redux/Constant/ApiRoute";
import AuthUser from "../../../Helpers/AuthUser";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

export default function Orders() {
  const [Orders, setOrders] = useState(null);
  const getMyOrders = () => {
    axios.get(API_URL.GET_MY_ORDERS + AuthUser().id).then((response) => {
      setOrders(response.data.data);
    });
  };
  const cancelOrder = (order_id) => {
    Swal.fire({
      title: "Are you sure?",
      allowOutsideClick: false,
      text: `want cancel the Order (${order_id}) ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "green",
      confirmButtonText: "Yes, proceed !",
    }).then((result) => {
      if (result.isConfirmed) {
        CancelOrderReason(order_id);
      }
    });
  };
  const CancelOrderReason = async (order_id) => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      allowOutsideClick: false,
      inputAttributes: {
        maxLength: 250,
      },
      inputLabel: "Reason for cancellation",
      inputPlaceholder: "Type your reason here...",
      confirmButtonColor: "#f7931e",
      confirmButtonText: "Submit",
      cancelButtonColor: "#5b2584",
      showCancelButton: true,
    });

    if (text) {
      axios.post(API_URL.CANCEL_MY_ORDER + order_id).then((response) => {
        if(response.data.status) {
          toast.success(response.data.message)
          getMyOrders()
        }
      });
    }
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
                <div className="col-md-4 pl-0 pb-3">
                  <div className="card border">
                    <div className="card-header d-block">
                      <h6 class="card-subtitle mb-2 text-muted">Order ID</h6>
                      <b className="card-title m-0 text-dark">
                        {order.order_id}
                      </b>
                      {order.order_status === null ||
                      order.order_status === "0" ? (
                        <span class="badge text-white rounded-pill bg-success float-right">
                          Order Placed
                        </span>
                      ) : null}
                      {order.order_status === "3" ? (
                        <span class="badge text-dark rounded-pill bg-warning float-right">
                          Cancel Requested
                        </span>
                      ) : null}
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
                      {order.order_status !== "3" ? (
                        <>
                          <hr />
                          <button
                            onClick={() => cancelOrder(order.id)}
                            className="btn-danger rounded"
                          >
                            <i className="fa fa-trash"></i> Cancel Order
                          </button>
                        </>
                      ) : null}
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
