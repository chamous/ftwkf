import React, {useEffect, useState} from 'react';
import AdminServices from "../../../services/admin-services";
import {Modal, Popconfirm, Table} from "antd";
import {useLocation} from "react-router-dom";
import download from "../../../assets/download.png";
import ClubServices from "../../../services/club-services";

function DemandeAthleteAffiliationList() {
    const [data, setData] = useState()
    const location = useLocation();
    const [visible, setVisible] = useState(false)
    const refreshTable = ({id}) => {
        var selected = data?.filter((value) => {
            return value?.id !== id
        });
        setData(selected)
    }
    const getData = () => {
        ClubServices.getAthletes().then(response => {
            let filter = response?.data.data?.filter((value) => {
                return value?.status === "pending"
            });
            setData(filter)
        })
    }

    useEffect(() => {
        getData()
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
            title: 'Actions',
            dataIndex: 'id',
            render: (id) => {
                return <Popconfirm title="Accepter la demande?" onConfirm={() => {
                    AdminServices
                        .activateAthlete(id).then(r => {
                        refreshTable({id: id});
                    }).catch(() => {
                    })
                }}>
                    <p style={{
                        backgroundColor: 'lightgray',
                        textAlign: 'center',
                        width: '100%',
                        borderRadius:7,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        cursor: "pointer",
                        fontSize: 12
                    }}>Activer</p>
                </Popconfirm>
            }
        },
    ];

    return (
        <Table scroll={{x: 1024}} showHeader pagination={false} columns={column} data={data} dataSource={data}/>

    );
}

export default DemandeAthleteAffiliationList;

