import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signOutUser } from "../utils/firebase/firebase.utils";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(false);
  // @ts-ignore
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")) || undefined);

  useEffect(() => {
    if (typeof userData != "undefined") {
      setCurrentUser(true);
    } else {
      setCurrentUser(false);
    }
  }, [currentUser]);

  return (
    <>
      <Navbar className="color-nav" variant="light" >
        <div className="container">
          <Navbar.Brand>
            Welcome to Board <b>{userData.user.displayName}</b>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
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
