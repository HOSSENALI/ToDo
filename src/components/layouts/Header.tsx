
import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { signOutUser } from '../utils/firebase/firebase.utils';

const Header = () => {
    const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {

      // @ts-ignore
      const userData = JSON.parse(localStorage.getItem("userData")) || undefined;
      if (typeof userData != 'undefined') {
        setCurrentUser(true);
      }else{
        setCurrentUser(false)
      }
    }, [currentUser]);

    return (<>
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand href="#Home">ToDo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                {currentUser ? ( 
                    <>
                    <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                       
                        <Nav.Link>
                            <Link onClick={signOutUser} to={''}> SignOut</Link>
                        </Nav.Link>
                    </>
                ):(
                        <Nav.Link>
                            <Link to="/login"> Login</Link>
                        </Nav.Link>
                        )}  
                </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </>);
}

export default Header;