import React, { useEffect, useState } from "react";
import "./Nouveautes.css";
import calendario from "../../assets/calendario.svg";
import pesa from "../../assets/pesa.svg";
import salud from "../../assets/salud.svg";
import AdminServices from "../../services/admin-services";
import CardPub from "../Card/card-pub";
import {Modal} from "antd";
import {baseUrlDownload} from "../../config/api-constants";

const Nouveautes = () => {
    const [data, setData] = useState([])
    const [selectedPub, setSelectedPub] = useState()
    const [visible, setVisible] = useState(false)
    const getData=()=>{
        AdminServices.getPosts().then((response)=>{
            if(response?.data?.data.length>4){
                var items = response?.data?.data.slice(0, 4)
                setData(items);
            }else{
                setData(response?.data?.data);
            }
            
            console.log(response?.data?.data)
        }).catch(error => {
            console.log(error)
        })
    }
    const onPress = (element) => {
        setSelectedPub(element || null)
        setVisible(true)
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <section id="Nouveautes" className="text-center">
            <h2 className="p-3 m-3">Nos Nouveautes</h2>
    
            <div style={{display:"flex",
            alignItems:"center",
            height:"auto",
            overflowX:"auto",
            }}>
            {
                data?.map((element)=>{
                    return(
                        <CardPub
                            onPress={()=>onPress(element)}
                            image={element?.file}
                            title={element?.title}
                            description={element?.description}
                        />
                    );
                })
            }
                <Modal
                    title={'Detail publication'}
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}>

                    <div style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        textAlign:"end"
                    }}>
                        <p>
                            <span style={{fontWeight: "bold", fontSize: 18}}> : العنوان </span>
                            <br/>
                            <span className="title_modal">{selectedPub?.["title"]}</span>
                        </p>
                        <p>
                        <span style={{
                            fontWeight: "bold",
                            marginTop: 10,
                            fontSize: 18
                        }}> : التفاصيل  </span>
                            <br/>
                            <span className="desc_modal">{selectedPub?.["description"]}</span></p>
                        <img src={`${baseUrlDownload}${selectedPub?.["file"]}`} style={{width: 400, height: 200}}/>


                    </div>

                </Modal>

            </div>
        </section>
    );
};

export default Nouveautes;