import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [modal, setModal] = useState(false);

  const { pathname } = useLocation();

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
    <div className={scroll || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <Link className="link" to="/">
            <span>Fiverr Business</span>
          </Link>
          <Link className="link" to="/">
            <span>Explore</span>
          </Link>
          <Link className="link" to="/">
            <span>English</span>
          </Link>
          <Link className="link" to="/">
            <span>Sign in</span>
          </Link>
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
                        <Link className="link" to="/mygigs">
                          <span>Gigs</span>
                        </Link>
                        <Link className="link" to="/add">
                          <span>Add New Gig</span>
                        </Link>
                      </>
                    )}
                    <Link className="link" to="/orders">
                      <span>Orders</span>
                    </Link>
                    <Link className="link" to="/messages">
                      <span>Messages</span>
                    </Link>
                    <Link className="link" to="/">
                      <span>Logout</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {(scroll || pathname !== "/") && (
        <>
        <hr />
          <div className="menu">
            <Link className="link" to="/">
              Graphics & Design
            </Link>
            <Link className="link" to="/">
              Video & Animation
            </Link>
            <Link className="link" to="/">
              Writing & Translation
            </Link>
            <Link className="link" to="/">
              AI Services
            </Link>
            <Link className="link" to="/">
              Digital Marketing
            </Link>
            <Link className="link" to="/">
              Music & Audio
            </Link>
            <Link className="link" to="/">
              Programming & Tech
            </Link>
            <Link className="link" to="/">
              Business
            </Link>
            <Link className="link" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
