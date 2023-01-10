import React from "react";
import "./index.scss";
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const User = () => {
    return (
        <div className="user">
            {/* <img src="./images/photo.jpeg" className="user__avatar" alt="Hary ANDRIANARISOA"/> */}
            <h1 className="user__name">Hary ANDRIANARISOA</h1>
            <p className="user__profession">Développeur web</p>
            <div className="user__infos">
                <p className="user__info"><HomeIcon /> Bd André Malraux, res La Palombiere bat C 13380 Plan de Cuques</p>
                <p className="user__info">
                    <LocalPhoneIcon /><a href="tel:+666834940"> 06.66.83.49.40</a>
                </p>
                <p className="user__info">
                    <EmailIcon /><a href="mailto: rabonia@hotmail.com">rabonia@hotmail.com</a>
                </p>
                <p className="user__info"><EventIcon />Date de naissance: 08/03/1986</p>
                <p className="user__info"><LocationOnIcon />Lieu de naissance: MADAGASCAR</p>
            </div>
        </div>
    )
}

export default User;