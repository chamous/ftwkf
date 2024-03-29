import React, {useEffect, useState} from 'react';
import {Modal, Table} from "antd";
import AdminServices from "../../../../services/admin-services";
import {useLocation} from "react-router-dom";
import download from "../../../../assets/download.png";
import { baseUrlDownload } from '../../../../config/api-constants';

function RefusedClubAffiliationList() {
    const [data, setData] = useState()
    const location = useLocation();
    const [visible, setVisible] = useState(false)
    const [selectedClub, setSelectedClub] = useState({})
    const [apiResponse, setApiResponse] = useState({})
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    const getData = ({cin:cin,page:page}) => {
        AdminServices.getClubsAffiliations({type: "refused",cin:cin,page:page}).then(response => {
            setData(response?.data.data)
            setApiResponse(response?.data);
        })
    }


    const getSelectedClub = ({id}) => {
        let selected = data?.filter((value) => {
            return value?.id === id
        });
        console.log(selected[0]);
        setSelectedClub(selected[0]);
    }

    useEffect(()=> {
        getData({cin:"",page:1})
    }, [location])
    const column = [
        {
            title: 'CIN de dirigeant',
            dataIndex: 'cin_number_ruler',
            key: 'cin_number_ruler',
        },
        {
            title: 'Nom de dirigeant',
            dataIndex: 'last_name_ruler',
            key: 'last_name_ruler',
        },
        {
            title: 'Prénom de dirigeant',
            dataIndex: 'first_name_ruler',
            key: 'first_name_ruler',
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
            render: (data) => {
                return <div onClick={() => {
                    getSelectedClub({id: data});
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
            <Table rowClassName={''} pagination={{total: apiResponse.total, defaultPageSize: 10,
                onChange: (page)=> {
                    setPageNumber(page)
                    getData({cin:search,page:page});
                }}} scroll={{x: 1024}} size={'small'} showHeader columns={column} data={data} dataSource={data} />            <Modal
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
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Date de naissance de dirigeant : </p>
                            <p style={{margin: 0}}>{selectedClub["date_birth_ruler"]}</p>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", marginBottom: 20
                        }}>
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Lieu de naissance de dirigeant : </p>
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
                            <p style={{margin: 0, fontWeight: "bold", marginRight: 20}}>Niveau d'étude de dirigeant : </p>
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
                        <a href={`${baseUrlDownload}${selectedClub["diplome_url"]}`} target={"_blank"}>
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
                        <a href={`${baseUrlDownload}${selectedClub["certificate_url"]}`} target={"_blank"}>
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
                        <a href={`${baseUrlDownload}${selectedClub["payment_url"]}`} target={"_blank"}>
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
                                    <p style={{margin: 0, color: "white"}}>Télécharger le fichier</p>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>

            </Modal>
        </>
    );
}

export default RefusedClubAffiliationList;
