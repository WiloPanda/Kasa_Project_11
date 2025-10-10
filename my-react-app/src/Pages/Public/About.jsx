import React from 'react';
import Banner from '../../Components/Banner';
import imgBanner from '@/Assets/Images/banner-about.png'

const About = () => {
    return (
        <div>
            <Banner className="about-banner" image={imgBanner} />
        </div>
    );
};

export default About;