import React, {useEffect, useState} from 'react';
import AdminServices from "../../../../services/admin-services";
import {Modal, Table} from "antd";
import {useLocation} from "react-router-dom";
import download from "../../../../assets/download.png";
import {baseUrlDownload} from "../../../../config/api-constants";

function CoachAffiliationList() {
    const [data, setData] = useState()
    const location = useLocation();
    const [visible, setVisible] = useState(false)
    const [selectedCoach, setSelectedCoach] = useState({})
    const [apiResponse, setApiResponse] = useState({})
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    const getSelectedCoach = ({id}) => {
        let selected = data?.filter((value) => {
            return value?.id === id
        });
        setSelectedCoach(selected[0]);
    }
    const getData = ({cin:cin,page:page}) => {
        AdminServices.getCoachAffiliations({type: "active",cin:cin,page:page}).then(response => {
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
            title: 'Club',
            dataIndex: ["club", "designation"],
            key: 'designation',
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
                return <div onClick={() => {
                    getSelectedCoach({id: data});
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
            <div style={{marginBottom:10}}>
                <label style={{marginRight:20}}>Recherche avec CIN :</label>
                <input style={{outline:'none'}} placeholder={"Entrer CIN"} onChange={(value)=>{
                    if(value.target.value===''){
                        getData({cin:value.target.value,page:parseInt(pageNumber)});
                    }else{
                        getData({cin:value.target.value,page:null});
                    }
                    setSearch(value.target.value);
                }}  />
            </div>
            <Table pagination={{total: apiResponse.total, defaultPageSize: 10,
                onChange: (page)=> {
                    setPageNumber(page)
                    getData({cin:search,page:page});
                }}} scroll={{x: 1024}} size={'small'} showHeader columns={column} data={data} dataSource={data} />            <Modal
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
                        <a href={`${baseUrlDownload}${selectedCoach["diplome_url"]}`} download={'my_diploma.pdf'} target={"_blank"}>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center", marginBottom: 20
                            }}>
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
                        <a href={`${baseUrlDownload}${selectedCoach["certificate_url"]}`} target={"_blank"}>
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
                        <a href={`${baseUrlDownload}${selectedCoach["diplome_url"]}`} target={"_blank"}>
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
                                    <p style={{margin: 0, color: "white"}}>Télécharger le diplome</p>
                                </div>
                            </div>
                        </a>
                        {selectedCoach["payment_url"] != null ? <a href={`${baseUrlDownload}${selectedCoach["payment_url"]}`} target={"_blank"}>
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
                        </a>:null}


                    </div>

                </div>

            </Modal>
        </>
    );
}

export default CoachAffiliationList;
