import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Profile from '../components/Profile/Profile';

function ProfilePage(props) {
    return (
        <div>
            <Header></Header>
            <Profile></Profile>
            {/* <Footer></Footer> */}
        </div>
    );
}

export default ProfilePage;
