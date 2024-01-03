import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
import moment from "moment";
import request from "../utils/request";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      request.get(`/convos`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return request.put(`/convos/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const readHandler = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="messages">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <tr>
              <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            {data.map((convo) => (
              <tr
                className={
                  ((currentUser.isSeller && !convo.readBySeller) ||
                    (!currentUser.isSeller && !convo.readByBuyer)) &&
                  "active"
                }
                key={c.id}
              >
                <td>{currentUser.isSeller ? convo.buyerId : convo.sellerId}</td>
                <td>
                  <Link to={`/message/${convo.id}`} className="link">
                    {c?.lastMessage?.substring(0, 100)}...
                  </Link>
                </td>
                <td>{moment(convo.updatedAt).fromNow()}</td>
                <td>
                  {((currentUser.isSeller && !convo.readBySeller) ||
                    (!currentUser.isSeller && !convo.readByBuyer)) && (
                    <button onClick={() => readHandler(convo.id)}>
                      Mark as Read
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;
