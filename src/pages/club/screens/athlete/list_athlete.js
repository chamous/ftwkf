import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import {useLocation} from "react-router-dom";
import ClubServices from "../../../../services/club-services";
import { baseUrlDownload } from '../../../../config/api-constants';
import download from "../../../../assets/download.png";
import { Image } from 'antd';
const  ListAthlete= ()=> {
    const [data, setData] = useState()
    const location = useLocation();
    const [apiResponse, setApiResponse] = useState({})
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    const getData = ({name:name,page:page})=> {
        ClubServices.getAthletesClub({name:name,page:page}).then(response=> {
            setData(response?.data?.data)
            setApiResponse(response?.data);
        })
    }
    useEffect(()=> {
        getData({name:"",page:1})
    }, [location])
    const column = [
        {
            title: 'Prénom',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Nom',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Date de naissance',
            dataIndex: 'date_birth',
            key: 'date_birth',
            render: text => text.substr(0, 10)
        },
        {
            title: 'Photo',
            dataIndex: 'image',
            key: 'image',
            render: (img) => {
                return img?<Image style={{width:100,height:100}} src={`${baseUrlDownload}${img}`}/>:<div>Aucun photo</div>
            }
        },
        {
            title: 'Sexe',
            dataIndex: 'sexe',
            key: 'sexe',
        },
        {
            title: 'Catégorie',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Demande',
            dataIndex: 'id',
            render: (id) => {
                let selected = data?.filter((value) => {
                    return value?.id === id
                });
                return <div style={{display: "flex", justifyContent: 'space-around', alignItems: "center"}}>
                    <a href={`${baseUrlDownload}${selected[0]["file"]}`} style={{
                        width: "60%",
                        height: 40,
                        borderRadius: 10,
                        backgroundColor: "#002140",
                        position: "relative",
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: 'center',
                        cursor: "pointer",
                        marginRight:10
                    }}>
                        <img style={{position: 'absolute', left: 20}} src={download}/>
                        <p style={{margin: 0, color: "white",fontSize: 12,}}>Télécharger le fichier</p>
                    </a>
                    <p style={{
                        backgroundColor: selected[0]["status"]==="pending"? 'lightgray':selected[0]["status"]==="refused"?"red":'#90EE91',
                        textAlign: 'center',
                        color:'#ffffff',
                        borderRadius:7,
                        width: '40%',
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        fontSize: 12
                    }}>{selected[0]["status"]==="pending"? "En attente":selected[0]["status"]==="refused"?"Réfusée":"Active"}</p>
                </div>
            }
        },
    ];
    return (
        <>
        <div style={{marginBottom:10}}>
                <label style={{marginRight:20}}>Recherche avec nom :</label>
                <input style={{outline:'none'}} placeholder={"Entrer le nom"} onChange={(value)=>{
                    if(value.target.value===''){
                        getData({name:value.target.value,page:parseInt(pageNumber)});
                    }else{
                        getData({name:value.target.value,page:null});
                    }
                    setSearch(value.target.value);
                }}  />
            </div>
        <Table
            rowClassName={''}
            pagination={{
                total: apiResponse.total, defaultPageSize: 10,
                onChange: (page) => {
                    setPageNumber(page)
                    getData({name:search,page: page});
                }
            }}
            scroll={{x: 1024}}
            size={'small'}
            showHeader
            columns={column}
            data={data}
            dataSource={data}
        />
        </>
        );
}

export default ListAthlete;

