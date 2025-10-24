import React from 'react';
import Banner from '../../Components/Banner';
import Collapse from '@/Components/Collapse';
import imgBanner from '@/Assets/Images/banner-about.png'
import AboutInfo from '@/Assets/Data/About.json'

const About = () => {
    return (
        <div>
            <Banner className="about-banner" image={imgBanner} />
            <div className="collapses">
                {AboutInfo.map((info) =>
                    <Collapse
                        key={info.id}
                        className="collapse--about"
                        title={info.title}
                        content={info.content}
                    />
                )}
            </div>
        </div>
    );
};

export default About;