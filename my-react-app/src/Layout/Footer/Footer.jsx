import React from 'react';
import Logo_Footer from '@/Assets/Images/Logo-footer.svg'


const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer__logo" src={Logo_Footer} />
            <p className='footer__rights'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;