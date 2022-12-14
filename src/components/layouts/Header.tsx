import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signOutUser } from "../utils/firebase/firebase.utils";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(false);
  // @ts-ignore
  const userData = JSON.parse(localStorage.getItem("userData")) || undefined;

  useEffect(() => {
    if (typeof userData != "undefined") {
      setCurrentUser(true);
    } else {
      setCurrentUser(false);
    }
  }, [currentUser]);

  return (
    <>
      <Navbar className="color-nav p-45" variant="light" expand="lg">
        <div className="container p-3">
          <div text-nowrap h-45 >
            <div className="text-uppercase">
              Welcome to Board &#8986;<b> {userData.user.displayName}</b>
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {currentUser && (
                <>
                  <Link onClick={signOutUser} to={""}>
                    {" "}
                    <Button className="btn btn-secondary">SignOut</Button>
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
