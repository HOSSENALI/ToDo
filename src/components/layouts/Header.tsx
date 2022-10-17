import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
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
      <Navbar className="color-nav " variant="light" expand="lg" >
        <div className="container ext-break">
          <div text-nowrap>
            Welcome to Board <b>{userData.user.displayName}</b>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {currentUser && (
                <>  
                  <Link onClick={signOutUser} to={""}>
                      {" "}
                      SignOut
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
