import React, { useEffect, useState } from "react";
import "./Navigation.scss";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const [modal, setModal] = useState(false);

  const isActive = () => {
    scrollY > 0 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div className={scroll ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">fiverr</span>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div>
              <div className="user" onClick={() => setModal(!modal)}>
                <img src="" alt="" />
                <span>{currentUser?.username}</span>
                {modal && (
                  <div className="options">
                    {currentUser?.isSeller && (
                      <>
                        <span>Service</span>
                        <span>Add New Service</span>
                      </>
                    )}
                    <span>Orders</span>
                    <span>Messages</span>
                    <span>Logout</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <hr />
      {scroll && (
        <>
          <div className="menu">
            <span>test</span>
            <span>test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navigation;
