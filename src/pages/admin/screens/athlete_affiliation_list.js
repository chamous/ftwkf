import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import {useLocation} from "react-router-dom";
import ClubServices from "../../../services/club-services";

function AthleteAffiliationList() {
    const [data, setData] = useState()
    const location = useLocation();
    const getData = () => {
        ClubServices.getAthletes().then(response => {
            let filter = response?.data.data?.filter((value) => {
                return value?.status === "active"
            });
            setData(filter)
        })
    }


    useEffect(() => {
        getData();
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
    ];
    return (
        <Table scroll={{x: 1024}} showHeader pagination={false} columns={column} data={data} dataSource={data}/>
    );
}

export default AthleteAffiliationList;