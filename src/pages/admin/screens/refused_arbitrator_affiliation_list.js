import React, {useEffect, useState} from 'react';
import AdminServices from "../../../services/admin-services";
import {Modal, Table} from "antd";
import {useLocation} from "react-router-dom";
import download from "../../../assets/download.png";

function RefusedArbitratorAffiliationList() {
    const [data, setData] = useState()
    const location = useLocation();
    const [visible, setVisible] = useState(false)
    const [selectedArbitre, setSelectedArbitre] = useState({})

    const getSelectedArbitre = ({id}) => {
        var selected = data?.filter((value) => {
            return value?.id === id
        });

        console.log(selected[0]);
        setSelectedArbitre(selected[0]);
    }
    const getData = () => {
        AdminServices.getArbitratorAffiliations({type: "refused"}).then(response => {
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
                return <div onClick={() => {
                    getSelectedArbitre({id: data});
                    setVisible(true);
                }} style={{display: "flex", justifyContent: 'space-around', alignItems: "center", cursor: "pointer"}}>
                    <p style={{
                        backgroundColor: 'lightgray',
                        textAlign: 'center',
                        width: '100%',
                        height: 40,
                        borderRadius: 7,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        fontSize: 12
                    }}>Détails</p>
                </div>
            }
        },
    ];
    return (
        <>
            <Table scroll={{x: 1024}} showHeader pagination={false} columns={column} dataSource={data}/>
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
                        <a href={selectedArbitre["diplome_url"]}>
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

export default RefusedArbitratorAffiliationList;