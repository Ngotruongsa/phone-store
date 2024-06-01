import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import NotFound from '../components/NotFound/NotFound';

function NotFoundPage(props) {
    return (
        <div>
            <Header></Header>
            <NotFound></NotFound>
            <Footer></Footer>
        </div>
    )
}

export default NotFoundPage;
