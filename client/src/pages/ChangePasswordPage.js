import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ChangePassword from '../components/changePassword/ChangePassword';

function ChangePasswordPage(props) {
    return (
        <div>
            <Header></Header>
            <ChangePassword></ChangePassword>
            {/* <Footer></Footer> */}
        </div>
    );
}

export default ChangePasswordPage;
