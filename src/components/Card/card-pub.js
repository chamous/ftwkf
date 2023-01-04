import React, {useEffect} from "react";
import './card.css'
import download from "../../assets/download.png";
import {baseUrlDownload} from "../../config/api-constants";

const CardPub = ({title, description, image, onPress}) => {
    return (
        <div onClick={onPress} className={"card"}>
            <img src={`${baseUrlDownload}${image}`}
                 style={{width: "100%", height: '100%', position: "absolute", objectFit: "cover"}}/>
            <div style={{
                width: "100%",
                height: '100%',
                position: "absolute",
                zIndex: 1,
                backgroundColor: 'black',
                opacity: 0.5
            }}>
            </div>
            <div
                style={{width: "100%", height: '100%', position: "absolute", zIndex: 2, padding: 20, textAlign: "end"}}>
                <p><span style={{fontWeight: "bold", color: 'white', fontSize: 18}}> : العنوان </span><span
                    className="card_title">{title}</span></p>
                <p><span
                    style={{fontWeight: "bold", marginTop: 10, color: 'white', fontSize: 18}}>: التفاصيل  </span><span
                    className="card_desc">{description}</span></p>
            </div>

        </div>
    )
}
export default CardPub;