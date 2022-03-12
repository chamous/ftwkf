import React, {useEffect, useState} from 'react';
import AdminServices from "../../../services/admin-services";
import {Modal, Popconfirm, Table} from "antd";
import {useLocation} from "react-router-dom";
import download from "../../../assets/download.png";

function DemandeCoachAffiliationList() {
    const [data, setData] = useState()
    const location = useLocation();
    const [visible, setVisible] = useState(false)
    const [selectedCoach, setSelectedCoach] = useState({})

    const getSelectedCoach = ({id}) => {
        var selected = data?.filter((value) => {
            return value?.id === id
        });
        console.log(selected[0]);
        setSelectedCoach(selected[0]);
    }
    const refreshTable = ({id}) => {
        var selected = data?.filter((value) => {
            return value?.id !== id
        });
        setData(selected)
    }
    const getData = () => {
        AdminServices.getCoachAffiliations({type: "pending"}).then(response => {
            setData(response?.data.data)
        })
    }

    useEffect(() => {
        getData()
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
            dataIndex: 'grade_coach',
            key: 'grade_coach',
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
                            .updateAffiliationCoach(data, false).then(r => {
                            refreshTable({id: data});
                        }).catch(() => {
                        })
                    }}>
                        <p style={{
                            backgroundColor: 'red',
                            textAlign: 'center',
                            borderRadius:7,
                            width: '30%',
                            height: 40,
                            color:'#ffffff',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center',
                            cursor: "pointer",
                            fontSize: 12
                        }}>Réfuser</p>
                    </Popconfirm>
                    <Popconfirm
                        title="Accepter la demande?"
                        onConfirm={

                            () => {
                                console.log(data)
                                AdminServices
                                    .updateAffiliationCoach(data, true).then(r => {
                                    refreshTable({id: data});
                                }).catch(() => {
                                })
                            }}>
                        <p style={{
                            backgroundColor: '#90EE91',
                            color:'#ffffff',
                            borderRadius:7,
                            textAlign: 'center',
                            width: '30%',
                            height: 40,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center',
                            cursor: "pointer",
                            fontSize: 12
                        }}>Accepter</p>
                    </Popconfirm>
                    <p onClick={() => {
                        getSelectedCoach({id: data});
                        setVisible(true)
                    }} style={{
                        backgroundColor: 'lightgray',
                        textAlign: 'center',
                        borderRadius:7,
                        width: '30%',
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
            <Table scroll={{x: 1024}} showHeader pagination={false} columns={column} data={data} dataSource={data}/>
            <Modal
                title={'Detail Entraineur - saison ' + selectedCoach["season"]}
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
                            <p style={{margin: 0}}>{selectedCoach["first_name"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Prénom : </p>
                            <p style={{margin: 0}}>{selectedCoach["last_name"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Date de naissance : </p>
                            <p style={{margin: 0}}>{selectedCoach["date_birth"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Lieu de naissance : </p>
                            <p style={{margin: 0}}>{selectedCoach["place_birth"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Nationalité : </p>
                            <p style={{margin: 0}}>{selectedCoach["nationality"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>CIN : </p>
                            <p style={{margin: 0}}>{selectedCoach["cin_number"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Date de CIN : </p>
                            <p style={{margin: 0}}>{selectedCoach["date_cin"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Lieu de CIN : </p>
                            <p style={{margin: 0}}>{selectedCoach["place_cin"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Adresse : </p>
                            <p style={{margin: 0}}>{selectedCoach["address"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>ZIP code : </p>
                            <p style={{margin: 0}}>{selectedCoach["postal_code"]}</p>
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
                            <p style={{margin: 0}}>{selectedCoach["specialty"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Grade de l'entraineur : </p>
                            <p style={{margin: 0}}>{selectedCoach["grade_coach"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Grade technique : </p>
                            <p style={{margin: 0}}>{selectedCoach["technical_grade"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Date de diplome : </p>
                            <p style={{margin: 0}}>{selectedCoach["date_obtained"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Niveau d'étude : </p>
                            <p style={{margin: 0}}>{selectedCoach["level_study"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Profession : </p>
                            <p style={{margin: 0}}>{selectedCoach["profession"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Email : </p>
                            <p style={{margin: 0}}>{selectedCoach["email"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Téléphone : </p>
                            <p style={{margin: 0}}>{selectedCoach["phone"]}</p>
                        </div>
                        <a href={selectedCoach["diplome_url"]}>
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

                    </div>

                </div>

            </Modal>
        </>
    );
}

export default DemandeCoachAffiliationList;

