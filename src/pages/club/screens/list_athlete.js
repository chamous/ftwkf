import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import {useLocation} from "react-router-dom";
import ClubServices from "../../../services/club-services";

const  ListAthlete= ()=> {
    const [data, setData] = useState()
    const location = useLocation();

    const getData = ()=> {
        ClubServices.getAthletes().then(response=> {
            setData(response?.data.data)
        })
    }
    useEffect(()=> {
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
            title: 'Demande',
            dataIndex: 'id',
            render: (id) => {
                let selected = data?.filter((value) => {
                    return value?.id === id
                });
                return <div style={{display: "flex", justifyContent: 'space-around', alignItems: "center"}}>
                    <p style={{
                        backgroundColor: selected[0]["status"]==="pending"? 'lightgray':'#90EE91',
                        textAlign: 'center',
                        width: '100%',
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        fontSize: 12
                    }}>{selected[0]["status"]==="pending"? "En attente":"Active"}</p>
                </div>
            }
        },
    ];
    return (
            <Table scroll={{x: 1024}} showHeader pagination={false} columns={column} data={data} dataSource={data}/>
    );
}

export default ListAthlete;

