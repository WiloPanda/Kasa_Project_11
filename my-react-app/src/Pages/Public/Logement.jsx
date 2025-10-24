import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import logementService from '@/Services/Logement.service';
import Rate from '@/Components/Rate.jsx'
import Carousel from "@/Components/Carousel.jsx";
import Tag from "@/Components/Tag.jsx"
import Collapse from "@/Components/Collapse.jsx"
import Location from "@/Components/Location.jsx"
import Title from "@/Components/Title.jsx"
import Host from "@/Components/Host.jsx"
import { useNavigate } from 'react-router-dom';


const Logement = () => {
    let [logement, setLogement] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        getInfo(id);
    }, [id])

    const getInfo = async (id) => {
        const data = await logementService.getOneLogement(id)

        if (data) {
            setLogement(data)
            setIsLoading(false)
        }
        else {
            navigate("/404")
        }
    }

    if (isLoading) return (
        <h3>Chargement...</h3>
    )

    return (
        <div className="logement-page">

            <Carousel images={logement.pictures} className="logement-carousel" />

            <div className='logement__main'>
                <div className='logement__info'>
                    <Title className="logement__title" title={logement.title} />
                    <Location className='logement__location' location={logement.location} />
                    <Tag allTags={logement.tags} />
                </div>
                <div className='hostRate'>
                    <Host name={logement.host.name} picture={logement.host.picture} />
                    <Rate id={logement.id} rating={logement.rating} />
                </div>
            </div>

            <div className="logement__collapses">
                <Collapse
                    key="desc"
                    className="collapse--logement"
                    title="Description"
                    content={logement.description}
                />
                <Collapse
                    key="equip"
                    className="collapse--logement"
                    title="Équipements"
                    items={logement.equipments}
                />
            </div>

        </div>
    );
};

export default Logement;