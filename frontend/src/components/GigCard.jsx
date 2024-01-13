import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import request from "../utils/request";

const GigCard = ({ gig }) => {
  const { isPending, error, data } = useQuery({
    queryKey: [gig.userId],
    queryFn: () =>
      request.get(`/users/${gig.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <Link to={`/gig/${gig._id}`} className="link">
      <div className="gigCard">
        <img src={gig.cover} alt="" />
        <div className="info">
          {isPending ? (
            "loading..."
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.img || "/noavatar.png"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{gig.desc}</p>
          <div className="star">
            <img src="/star.png" alt="" />
            <span>
              {!isNaN(gig.totalStars / gig.starNumber) &&
                Math.round(gig.totalStars / gig.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>$ {gig.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
