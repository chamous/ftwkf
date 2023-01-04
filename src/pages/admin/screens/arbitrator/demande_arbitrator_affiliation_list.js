import React, {useEffect, useState} from 'react';
import AdminServices from "../../../../services/admin-services";
import {Modal, Popconfirm, Table} from "antd";
import {useLocation} from "react-router-dom";
import download from "../../../../assets/download.png";
import {baseUrlDownload} from "../../../../config/api-constants";


function DemandeArbitratorAffiliationList() {
    const [data, setData] = useState([])
    const [visible, setVisible] = useState(false)
    const location = useLocation();
    const [selectedArbitre, setSelectedArbitre] = useState({})
    const [apiResponse, setApiResponse] = useState({})
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState('')

    const getSelectedArbitre = ({id}) => {
        var selected = data?.filter((value) => {
            return value?.id === id
        });
        setSelectedArbitre(selected[0]);
    }
    const getData = ({cin: cin, page: page}) => {
        AdminServices.getArbitratorAffiliations({type: "pending", cin: cin, page: page}).then(response => {
            setData(response?.data.data)
            setApiResponse(response?.data);
        })
    }

    useEffect(() => {
        getData({cin:"",page:1})
    }, [location])
    const column = [
        {
            title: 'CIN',
            dataIndex: 'cin_number',
            key: 'cin_number',
        },
        {
            title: 'Nom',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Prénom',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Date de naissance',
            dataIndex: 'date_birth',
            key: 'date_birth',
            render: text => text.substr(0, 10)
        },
        {
            title: 'Grade',
            dataIndex: 'grade_arbitrator',
            key: 'grade_arbitrator',
        },
        {
            title: 'Téléphone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            render: (data) => {
                return <div style={{display: "flex", justifyContent: 'space-around', alignItems: "center"}}>
                    <Popconfirm title="Réfuser la demande?" onConfirm={() => {
                        AdminServices
                            .updateAffiliationArbitrator(data, false).then(r => {
                            getData({cin: search, page: pageNumber})
                        }).catch(() => {
                        })
                    }}>
                        <p style={{
                            backgroundColor: 'red',
                            textAlign: 'center',
                            color:'#ffffff',
                            borderRadius:7,
                            width: '30%',
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
                            .updateAffiliationArbitrator(data, true).then(r => {
                            getData({cin: search, page: pageNumber})
                        }).catch(() => {
                        })
                    }}>
                        <p style={{
                            backgroundColor: '#90EE91',
                            color:'#ffffff',
                            textAlign: 'center',
                            width: '30%',
                            height: 40,
                            borderRadius:7,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center',
                            cursor: "pointer",
                            fontSize: 12,

                        }}>Accepter</p>
                    </Popconfirm>
                    <p onClick={() => {
                        getSelectedArbitre({id: data});
                        setVisible(true)
                    }} style={{
                        backgroundColor: 'lightgray',
                        textAlign: 'center',
                        width: '30%',
                        borderRadius:7,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        cursor: "pointer",
                        fontSize: 12
                    }}>Détails</p>
                </div>
            }
        },
    ];

    return (
        <>
            <div style={{marginBottom: 10}}>
                <label style={{marginRight: 20}}>Recherche avec CIN :</label>
                <input style={{outline: 'none'}} placeholder={"Entrer CIN"} onChange={(value) => {
                    if(value.target.value===''){
                        getData({cin:value.target.value,page:parseInt(pageNumber)});
                    }else{
                        getData({cin:value.target.value,page:null});
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
            <Modal
                title={'Detail Arbitre - saison ' + selectedArbitre["season"]}
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={"70%"}
            >
                <div style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                }}>
                    <div style={{
                        width: "50%",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                    }}>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Nom : </p>
                            <p style={{margin: 0}}>{selectedArbitre["first_name"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Prénom : </p>
                            <p style={{margin: 0}}>{selectedArbitre["last_name"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Date de naissance : </p>
                            <p style={{margin: 0}}>{selectedArbitre["date_birth"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Lieu de naissance : </p>
                            <p style={{margin: 0}}>{selectedArbitre["place_birth"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Nationalité : </p>
                            <p style={{margin: 0}}>{selectedArbitre["nationality"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>CIN : </p>
                            <p style={{margin: 0}}>{selectedArbitre["cin_number"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Date de CIN : </p>
                            <p style={{margin: 0}}>{selectedArbitre["date_cin"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Lieu de CIN : </p>
                            <p style={{margin: 0}}>{selectedArbitre["place_cin"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Adresse : </p>
                            <p style={{margin: 0}}>{selectedArbitre["address"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>ZIP code : </p>
                            <p style={{margin: 0}}>{selectedArbitre["postal_code"]}</p>
                        </div>


                    </div>
                    <div style={{
                        width: "50%",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "flex-start",
                        flexDirection: "column",
                        justifyContent: "flex-start"
                    }}>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Spécialité : </p>
                            <p style={{margin: 0}}>{selectedArbitre["specialty"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Grade d'arbitrage : </p>
                            <p style={{margin: 0}}>{selectedArbitre["grade_arbitrator"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Grade technique : </p>
                            <p style={{margin: 0}}>{selectedArbitre["technical_grade"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Date de diplome : </p>
                            <p style={{margin: 0}}>{selectedArbitre["date_obtained"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Niveau d'étude : </p>
                            <p style={{margin: 0}}>{selectedArbitre["level_study"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Profession : </p>
                            <p style={{margin: 0}}>{selectedArbitre["profession"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Email : </p>
                            <p style={{margin: 0}}>{selectedArbitre["email"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Téléphone : </p>
                            <p style={{margin: 0}}>{selectedArbitre["phone"]}</p>
                        </div>
                        <a href={`${baseUrlDownload}${selectedArbitre["diplome_url"]}`} download={'my_diploma.pdf'} target={"_blank"}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center", marginBottom: 20
                            }}
                            >
                                <div style={{
                                    width: 320,
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
                                    <p style={{margin: 0, color: "white"}}>Télécharger le diplome</p>
                                </div>
                            </div>
                        </a>

                        <a href={`${baseUrlDownload}${selectedArbitre["certificate_url"]}`} target={"_blank"}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center", marginBottom: 20
                            }}
                            >
                                <div style={{
                                    width: 320,
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
                                    <p style={{margin: 0, color: "white"}}>Télécharger le certificat</p>
                                </div>
                            </div>
                        </a>
                        <a href={`${baseUrlDownload}${selectedArbitre["payment_url"]}`} target={"_blank"}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center", marginBottom: 20
                            }}
                            >
                                <div style={{
                                    width: 380,
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
                                    <p style={{margin: 0, color: "white"}}>Télécharger le reçu de payement</p>
                                </div>
                            </div>
                        </a>

                    </div>

                </div>

            </Modal>
        </>

    );

}

export default DemandeArbitratorAffiliationList;

