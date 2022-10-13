
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Header = () => {
    const tasks = useSelector((state) => state.TaskReducer.tasks);
    return (<>
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand href="#Home">ToDo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link>
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about-us">About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/login"> Login</Link>
                        </Nav.Link>
                      
                      
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </>);
}

export default Header;