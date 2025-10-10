import listlogement from "@/Assets/Data/Logements.json"

let getAllLogement = () => {
    return listlogement;
}

let getOneLogement = (id) => {
    const logement = listlogement.find((item) => item.id === id);
    return logement || null;
}

export const logementService = {
    getAllLogement,
    getOneLogement
}

export default logementService