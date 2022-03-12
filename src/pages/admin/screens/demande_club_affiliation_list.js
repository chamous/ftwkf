import React, {useEffect, useState} from 'react';
import {Modal, Popconfirm, Table} from "antd";
import AdminServices from "../../../services/admin-services";
import {useLocation} from "react-router-dom";

function DemandeClubAffiliationList() {
    const [data, setData] = useState()
    const location = useLocation();
    const [visible, setVisible] = useState(false)
    const [selectedClub, setSelectedClub] = useState({})

    const getSelectedClub = ({id}) => {
        let selected = data?.filter((value) => {
            return value?.id === id
        });
        console.log(selected[0]);
        setSelectedClub(selected[0]);
    }
    const refreshTable = ({id}) => {
        let selected = data?.filter((value) => {
            return value?.id !== id
        });
        setData(selected)
    }

    const getData = () => {
        AdminServices.getClubsAffiliations({type: "pending"}).then(response => {
            setData(response?.data.data)
        })
    }

    useEffect(() => {
        getData()
    }, [location])
    const column = [
        {
            title: 'CIN',
            dataIndex: 'cin_number_president',
            key: 'cin_number_president',
        },
        {
            title: 'Nom de président',
            dataIndex: 'last_name_president',
            key: 'last_name_president',
        },
        {
            title: 'Prénom de président',
            dataIndex: 'first_name_president',
            key: 'first_name_president',
        },
        {
            title: 'Date de naissance',
            dataIndex: 'last_name_president',
            key: 'last_name_president',
            render: text => text.substr(0, 10)
        },
        {
            title: 'Designation',
            dataIndex: 'designation',
            key: 'designation',
        },
        {
            title: 'Téléphone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            render: (d) => {
                return <div style={{display: "flex", justifyContent: 'space-around', alignItems: "center"}}>
                    <Popconfirm title="Réfuser la demande?" onConfirm={() => {
                        AdminServices
                            .updateAffiliationClub(d, false).then(r => {
                            refreshTable({id: d});
                        }).catch(() => {
                        })
                    }}>
                        <p style={{
                            backgroundColor: 'red',
                            textAlign: 'center',
                            width: '30%',
                            borderRadius:7,
                            color:'#ffffff',
                            height: 40,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center',
                            cursor: "pointer",
                            fontSize: 12
                        }}>Réfuser</p>
                    </Popconfirm>
                    <Popconfirm title="Accepter la demande?" onConfirm={async () => {

                        let selected = data?.filter((value) => {
                            return value?.id === d
                        });
                        AdminServices
                            .updateAffiliationClub(d, true).then(r => {
                            AdminServices.addClub(
                                {
                                    specialty:selected[0]["specialty"],
                                    designation:selected[0]["designation"],
                                    assurance_number:selected[0]["assurance_number"],
                                    assurance_date:selected[0]["assurance_date"],
                                    governorate:selected[0]["governorate"],
                                    delegation:selected[0]["delegation"],
                                    email:selected[0]["email"],
                                    postal_code:selected[0]["postal_code"],
                                    phone:selected[0]["phone"],
                                    fax:selected[0]["fax"],
                                    first_name_president:selected[0]["first_name_president"],
                                    last_name_president:selected[0]["last_name_president"],
                                    cin_number_president:selected[0]["cin_number_president"],
                                    date_cin_president:selected[0]["date_cin_president"],
                                    place_cin_president:selected[0]["place_cin_president"],
                                    address_president:selected[0]["address_president"],
                                    postal_code_president:selected[0]["postal_code_president"],
                                    phone_president:selected[0]["phone_president"],
                                    specialty_ruler:selected[0]["specialty_ruler"],
                                    first_name_ruler:selected[0]["first_name_ruler"],
                                    last_name_ruler:selected[0]["last_name_ruler"],
                                    date_birth_ruler:selected[0]["date_birth_ruler"],
                                    place_birth_ruler:selected[0]["place_birth_ruler"],
                                    nationality_ruler:selected[0]["nationality_ruler"],
                                    cin_number_ruler:selected[0]["cin_number_ruler"],
                                    date_cin_ruler:selected[0]["date_cin_ruler"],
                                    place_cin_ruler:selected[0]["place_cin_ruler"],
                                    level_study_ruler:selected[0]["level_study_ruler"],
                                    profession_ruler:selected[0]["profession_ruler"],
                                    address_ruler:selected[0]["address_ruler"],
                                    postal_code_ruler:selected[0]["postal_code_ruler"],
                                    phone_ruler:selected[0]["phone_ruler"],
                                }
                            ).then((r) => {
                                refreshTable({id: d});
                            }).catch((e) => {
                                console.log(e)
                            })

                        }).catch(() => {
                        })
                    }}>
                        <p style={{
                            backgroundColor: '#90EE91',
                            color:'#ffffff',
                            textAlign: 'center',
                            width: '30%',
                            borderRadius:7,
                            height: 40,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: 'center',
                            cursor: "pointer",
                            fontSize: 12
                        }}>Accepter</p>
                    </Popconfirm>
                    <p onClick={() => {
                        getSelectedClub({id: d});
                        setVisible(true)
                    }} style={{
                        backgroundColor: 'lightgray',
                        textAlign: 'center',
                        width: '30%',
                        height: 40,
                        borderRadius:7,
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
                title={'Detail Club'}
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
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Nom de président : </p>
                            <p style={{margin: 0}}>{selectedClub["first_name_president"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Prénom de président : </p>
                            <p style={{margin: 0}}>{selectedClub["last_name_president"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Spécialité : </p>
                            <p style={{margin: 0}}>{selectedClub["specialty"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Désignation : </p>
                            <p style={{margin: 0}}>{selectedClub["designation"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>N° d'assurance : </p>
                            <p style={{margin: 0}}>{selectedClub["assurance_number"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Date d'assurance : </p>
                            <p style={{margin: 0}}>{selectedClub["assurance_date"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Téléphone : </p>
                            <p style={{margin: 0}}>{selectedClub["phone"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Fax : </p>
                            <p style={{margin: 0}}>{selectedClub["fax"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Governorat : </p>
                            <p style={{margin: 0}}>{selectedClub["governorate"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Délégation : </p>
                            <p style={{margin: 0}}>{selectedClub["delegation"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>E-mail : </p>
                            <p style={{margin: 0}}>{selectedClub["email"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>ZIP code : </p>
                            <p style={{margin: 0}}>{selectedClub["postal_code"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>CIN de président : </p>
                            <p style={{margin: 0}}>{selectedClub["cin_number_president"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Date CIN de président : </p>
                            <p style={{margin: 0}}>{selectedClub["date_cin_president"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Place CIN de président : </p>
                            <p style={{margin: 0}}>{selectedClub["place_cin_president"]}</p>
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
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Adresse de président : </p>
                            <p style={{margin: 0}}>{selectedClub["address_president"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Zip de président : </p>
                            <p style={{margin: 0}}>{selectedClub["postal_code_president"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Téléphone de président : </p>
                            <p style={{margin: 0}}>{selectedClub["phone_president"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Prénom de dirigeant : </p>
                            <p style={{margin: 0}}>{selectedClub["first_name_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Nom de dirigeant : </p>
                            <p style={{margin: 0}}>{selectedClub["last_name_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Date de naissance de dirigeant
                                : </p>
                            <p style={{margin: 0}}>{selectedClub["date_birth_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Lieu de naissance de dirigeant
                                : </p>
                            <p style={{margin: 0}}>{selectedClub["place_birth_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Nationalité de dirigeant : </p>
                            <p style={{margin: 0}}>{selectedClub["nationality_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>CIN de dirigeant : </p>
                            <p style={{margin: 0}}>{selectedClub["cin_number_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Date CIN de dirigeant : </p>
                            <p style={{margin: 0}}>{selectedClub["date_cin_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Lieu CIN de dirigeant : </p>
                            <p style={{margin: 0}}>{selectedClub["place_cin_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Niveau d'étude de dirigeant
                                : </p>
                            <p style={{margin: 0}}>{selectedClub["level_study_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Profession de dirigeant : </p>
                            <p style={{margin: 0}}>{selectedClub["profession_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Adresse de dirigeant : </p>
                            <p style={{margin: 0}}>{selectedClub["address_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>ZIP de dirigeant : </p>
                            <p style={{margin: 0}}>{selectedClub["postal_code_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Téléphone de dirigeant : </p>
                            <p style={{margin: 0}}>{selectedClub["phone_ruler"]}</p>
                        </div>

                    </div>
                </div>

            </Modal>
        </>);
}

export default DemandeClubAffiliationList;

