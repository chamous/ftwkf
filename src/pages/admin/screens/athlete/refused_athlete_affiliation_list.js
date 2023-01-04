import React, {useEffect, useState} from 'react';
import {Modal, Table} from "antd";
import {useLocation} from "react-router-dom";
import { baseUrlDownload } from '../../../../config/api-constants';
import ClubServices from "../../../../services/club-services";
import download from "../../../../assets/download.png";
import { Image } from 'antd';

function RefusedAthleteAffiliationList() {
    const [data, setData] = useState()
    const location = useLocation();
    const [visible, setVisible] = useState(false)
    const [selectedClub, setSelectedClub] = useState({})
    const [apiResponse, setApiResponse] = useState({})
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    const getData = ({name:name,page:page}) => {
        ClubServices.getAthletes({type: "refused",name:name,page:page}).then(response => {
            setData(response?.data?.data)
            setApiResponse(response?.data);
        })
    }

    useEffect(() => {
        getData({name: "", page: 1})
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
            title: 'Spécialité',
            dataIndex: 'specialty',
            key: 'specialty',
        },
        {
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade',
        },
        {
            title: 'Photo',
            dataIndex: 'image',
            key: 'image',
            render: (img) => {
                return img && !img.includes('pdf')?<Image style={{width:100,height:100}} src={`${baseUrlDownload}${img}`}/>:<div>Aucun photo</div>
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
            title: 'Club',
            dataIndex:  ["club", "designation"],
            key: 'designation',
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            render: (id) => {
                var selected = data?.filter((value) => {
                    return value?.id === id
                });
                return <a href={`${baseUrlDownload}${selected[0]["file"]}`} target={"_blank"}>
                    <div style={{
                        width: "100%",
                        height: 40,
                        borderRadius: 10,
                        backgroundColor: "#002140",
                        position: "relative",
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: 'center',
                        cursor: "pointer"
                    }}>
                        <img style={{position: 'absolute', left: 20}} src={download}/>
                        <p style={{margin: 0, color: "white", fonSize:5}}>Télécharger le certificat</p>
                    </div>
                </a>
            }
        },
    ];
    return (
        <>
            <div style={{marginBottom: 10}}>
                <label style={{marginRight: 20}}>Recherche avec Nom :</label>
                <input style={{outline: 'none'}} placeholder={"Entrer le nom"} onChange={(value) => {
                    if (value.target.value === '') {
                        getData({name: value.target.value, page: parseInt(pageNumber)});
                    } else {
                        getData({name: value.target.value, page: null});
                    }
                    setSearch(value.target.value);
                }}/>
            </div>
            <Table rowClassName={''} pagination={{
                total: apiResponse.total, defaultPageSize: 10,
                onChange: (page) => {
                    setPageNumber(page)
                    getData({name: search, page: page});
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

export default RefusedAthleteAffiliationList;
