import React, {useEffect, useState} from 'react';
import AdminServices from "../../../../services/admin-services";
import {Popconfirm, Table} from "antd";
import {useLocation} from "react-router-dom";
import {baseUrlDownload} from '../../../../config/api-constants';
import download from "../../../../assets/download.png";
import { Image } from 'antd';

function AttendantDemandList() {
    const [data, setData] = useState()
    const location = useLocation();
    const [apiResponse, setApiResponse] = useState({})
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState('')

    const getData = ({cin, page}) => {
        AdminServices.getAttendantAdmin({type: "pending", cin: cin, page: page}).then(response => {
            setData(response?.data?.data)
            setApiResponse(response?.data);
        })
    }

    useEffect(() => {
        getData({cin: "", page: 1})
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
            title: 'CIN',
            dataIndex: 'cin',
            key: 'cin',
        },
        {
            title: 'Gouvernorat',
            dataIndex: 'governorate',
            key: 'governorate',
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
            title: 'Club',
            dataIndex: ["club", "designation"],
            key: 'designation',
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            render: (id) => {
                var selected = data?.filter((value) => {
                    return value?.id === id
                });
                return <div style={{display: "flex", justifyContent: 'space-around', alignItems: "center"}}>
                    <a href={`${baseUrlDownload}${selected[0]["file"]}`} style={{
                        width: "40%",
                        minWidth:200,
                        height: 40,
                        borderRadius: 10,
                        backgroundColor: "#002140",
                        position: "relative",
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: 'center',
                        cursor: "pointer",
                        marginRight:10
                    }} target={"_blank"}>
                        <img style={{position: 'absolute', left: 20}} src={download}/>
                        <p style={{margin: 0, color: "white",fontSize: 12,}}>Télécharger CIN</p>
                    </a>
                    <Popconfirm title="Réfuser la demande?" onConfirm={() => {
                        AdminServices
                            .refuseAttendant(id).then(r => {
                            getData({cin: search, page: pageNumber})
                        }).catch((e) => {
                            console.log(e)
                        })
                    }}>
                        <p style={{
                            backgroundColor: 'red',
                            textAlign: 'center',
                            width: '20%',
                            borderRadius: 7,
                            color: '#ffffff',
                            height: 40,
                            display: "flex",
                            marginRight:10,
                            alignItems: "center",
                            justifyContent: 'center',
                            cursor: "pointer",
                            fontSize: 12
                        }}>Réfuser</p>
                    </Popconfirm>
                    <Popconfirm title="Accepter la demande?" onConfirm={() => {
                        console.log('chamouusss marra mn hohnaaa !!! ');
                        AdminServices
                            .activateAttendant(id).then(r => {
                            getData({cin: search, page: pageNumber})
                        }).catch((e) => {
                            console.log(e)
                        })
                    }}>
                        <p style={{
                            backgroundColor: 'lightgray',
                            textAlign: 'center',
                            width: '20%',
                            borderRadius: 7,
                            height: 40,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center',
                            cursor: "pointer",
                            fontSize: 12
                        }}>Activer</p>
                    </Popconfirm>
                </div>
            }
        },
    ];

    return (
        <>
            <div style={{marginBottom: 10}}>
                <label style={{marginRight: 20}}>Recherche avec Nom :</label>
                <input style={{outline: 'none'}} placeholder={"Entrer le nom"} onChange={(value) => {
                    if (value.target.value === '') {
                        getData({cin: value.target.value, page: parseInt(pageNumber)});
                    } else {
                        getData({cin: value.target.value, page: null});
                    }
                    setSearch(value.target.value);
                }}/>
            </div>
            <Table
                pagination={{
                    total: apiResponse.total, defaultPageSize: 10,
                    onChange: (page) => {
                        setPageNumber(page)
                        getData({cin: search, page: page});
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

export default AttendantDemandList;

