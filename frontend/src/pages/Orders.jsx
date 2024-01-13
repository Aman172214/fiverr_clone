import React from "react";
import { useNavigate } from "react-router-dom";
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import request from "../utils/request";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      request.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  const contactHandler = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const response = await request.get(`/convos/single/${id}`);
      navigate(`/message/${response.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const response = await request.post(`/convos`, {
          to: currentUser.seller ? buyerId : sellerId,
        });
        navigate(`/message/${response.data.id}`);
      }
    }
  };

  return (
    <div className="orders">
      {isPending ? (
        "loading..."
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Contact</th>
              </tr>
            </thead>
            {data.map((order) => (
              <tbody key={order._id}>
                {" "}
                <tr>
                  {" "}
                  <td>
                    <img className="image" src={order.img} alt="" />
                  </td>
                  <td>{order.title}</td>
                  <td>{order.price}</td>
                  <td>
                    <img
                      className="message"
                      src="/message.png"
                      alt=""
                      onClick={() => contactHandler(order)}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
