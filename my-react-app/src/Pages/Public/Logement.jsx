import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import logementService from '@/Services/Logement.service';


const Logement = () => {
    let [logement, setLogement] = useState([])

    const { id } = useParams();
    useEffect(() => {
        getInfo(id);
    }, [id])

    const getInfo = async (id) => {
        const data = await logementService.getOneLogement(id)
        console.log(data)
        setLogement(data)
    }
    return (
        <div>

        </div>
    );
};

export default Logement;