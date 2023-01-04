import React, {useEffect, useState} from 'react';
import AdminServices from "../../../../services/admin-services";
import {Popconfirm, Table} from "antd";
import {useLocation} from "react-router-dom";
import {baseUrlDownload} from '../../../../config/api-constants';
import download from "../../../../assets/download.png";
import { Image } from 'antd';

function SupporterDemandList() {
    const [data, setData] = useState()
    const location = useLocation();
    const [apiResponse, setApiResponse] = useState({})
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState('')

    const getData = ({name: name, page: page}) => {
        AdminServices.getSupporters({type: "pending", search: name, page: page}).then(response => {
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
            title: 'CIN',
            dataIndex: 'cin_number',
            key: 'cin_number',
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
            title: 'Cin PDF',
            dataIndex: 'file',
            key: 'file',
            render: (file) => {
                return <a href={`${baseUrlDownload}${file}`} target={"_blank"}>
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
                        <p style={{margin: 0, color: "white", fonSize:5}}>Télécharger CIN</p>
                    </div>
                </a>
            }
        },
        {
            title: 'Payement PDF',
            dataIndex: 'extra_file',
            key: 'extra_file',
            render: (file) => {
                return <a href={`${baseUrlDownload}${file}`} target={"_blank"}>
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
                        <p style={{margin: 0, color: "white", fonSize:5}}>Télécharger Payement</p>
                    </div>
                </a>
            }
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            render: (data) => {
                return <div style={{display: "flex", justifyContent: 'space-around', alignItems: "center"}}>
                    <Popconfirm title="Réfuser la demande?" onConfirm={() => {
                        AdminServices
                            .updateSupporter(data, false).then(r => {
                            getData({name: search, page: pageNumber})
                        }).catch(() => {
                        })
                    }}>
                        <p style={{
                            backgroundColor: 'red',
                            textAlign: 'center',
                            color:'#ffffff',
                            borderRadius:7,
                            width: '48%',
                            height: 40,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center',
                            cursor: "pointer",
                            fontSize: 12
                        }}>Réfuser</p>
                    </Popconfirm>
                    <Popconfirm title="Accepter la demande?" onConfirm={() => {
                        AdminServices
                            .updateSupporter(data, true).then(r => {
                            getData({name: search, page: pageNumber})
                        }).catch(() => {
                        })
                    }}>
                        <p style={{
                            backgroundColor: '#90EE91',
                            color:'#ffffff',
                            textAlign: 'center',
                            width: '48%',
                            height: 40,
                            borderRadius:7,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center',
                            cursor: "pointer",
                            fontSize: 12,

                        }}>Accepter</p>
                    </Popconfirm>
                </div>
            }
        },
    ];

    return (
        <>
            <div style={{marginBottom: 10}}>
                <label style={{marginRight: 20}}>Recherche avec Cin :</label>
                <input style={{outline: 'none'}} placeholder={"Entrer le cin"} onChange={(value) => {
                    if (value.target.value === '') {
                        getData({name: value.target.value, page: parseInt(pageNumber)});
                    } else {
                        getData({name: value.target.value, page: null});
                    }
                    setSearch(value.target.value);
                }}/>
            </div>
            <Table
                pagination={{
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

export default SupporterDemandList;

