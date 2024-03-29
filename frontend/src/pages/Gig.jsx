import React, { useState } from "react";
import "./Gig.scss";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import ReactSimplyCarousel from "react-simply-carousel";
import request from "../utils/request";
import Reviews from "../components/Reviews";

const Gig = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      request.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () =>
      await request.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isLoading ? (
        "loading..."
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              Fiverr {">"} Graphics & Design {">"}
            </span>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading..."
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.img || "/noavatar.png"}
                  alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/star.png" alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
            <div className="slider">
              <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                  //here you can also pass className, or any other button element attributes
                  style: {
                    alignSelf: "center",
                    background: "black",
                    border: "none",
                    borderRadius: "50%",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "20px",
                    height: 30,
                    lineHeight: 1,
                    textAlign: "center",
                    width: 30,
                  },
                  children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                  //here you can also pass className, or any other button element attributes
                  style: {
                    alignSelf: "center",
                    background: "black",
                    border: "none",
                    borderRadius: "50%",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "20px",
                    height: 30,
                    lineHeight: 1,
                    textAlign: "center",
                    width: 30,
                  },
                  children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                  {
                    itemsToShow: 1,
                    itemsToScroll: 1,
                    minWidth: 768,
                  },
                ]}
                speed={500}
                easing="linear"
              >
                {data.images.map((img) => (
                  <img key={img} src={img} alt="" />
                ))}
              </ReactSimplyCarousel>
            </div>
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            {isLoadingUser ? (
              "loading..."
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img src={dataUser.img || "/noavatar.png"} alt="" />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/star.png" alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h2>$ {data.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/clock.png" alt="" />
                <span>{data.deliveryTime} Days Delivery</span>
              </div>
              <div className="item">
                <img src="/recycle.png" alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/payment/${id}`}>
              <button>Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
