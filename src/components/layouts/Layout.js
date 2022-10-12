import React from 'react'
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
const Layout = (props) => {
    return (<>

        <Container className='container'>
            <Header />
            {props.children}
            <Footer />
        </Container>

    </>);
}

export default Layout;