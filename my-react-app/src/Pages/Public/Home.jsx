import React, { useState, useEffect } from 'react';
import logementService from '@/Services/logement.service';
import Card from '@/Components/Card.jsx'
import Banner from '../../Components/Banner';
import imgBanner from '@/Assets/Images/banner.png'
import { NavLink } from 'react-router-dom';


const Home = () => {
    let [logements, setLogements] = useState([])

    useEffect(() => {
        getInfo();
    }, [])

    const getInfo = async () => {
        const data = await logementService.getAllLogement()
        console.log(data)
        setLogements(data)
    }

    return (
        <div>
            <Banner className="home-banner" texte="Chez vous, partout et ailleurs" image={imgBanner} />
            <section className='card__section'>
                <ul className="card__list" >
                    {logements.map((logement) =>
                        <NavLink key={logement.id} to={`/logement/${logement.id}`}>
                            <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
                        </NavLink>
                    )}
                </ul>
            </section>
        </div>
    );
};

export default Home;