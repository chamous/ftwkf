import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import {useLocation} from "react-router-dom";
import ClubServices from "../../../../services/club-services";
const  ListCoachs= ()=> {
    const [data, setData] = useState()
    const location = useLocation();
    const [apiResponse, setApiResponse] = useState({})
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    const getData = ({cin,page})=> {
    
        ClubServices.getCoachsClub({cin:cin,page:page}).then(response=> {
            setData(response?.data?.data)
            setApiResponse(response?.data);
        });
    }
    useEffect(()=> {
        getData({cin:"",page:1});
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
            title: 'Demande',
            dataIndex: 'id',
            render: (id) => {
                let selected = data?.filter((value) => {
                    return value?.id === id
                });
                return  <p style={{
                        backgroundColor: selected[0]["status"]==="pending"? 'lightgray':selected[0]["status"]==="refused"?"red":'#90EE91',
                        textAlign: 'center',
                        color:'#ffffff',
                        borderRadius:7,
                        width: '100%',
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'center',
                        fontSize: 12
                    }}>{selected[0]["status"]==="pending"? "En attente":selected[0]["status"]==="refused"?"Réfusée":"Active"}</p>
                
            }
        },
    ];
    return (
        <>
        <div style={{marginBottom:10}}>
                <label style={{marginRight:20}}>Recherche avec nom :</label>
                <input style={{outline:'none'}} placeholder={"Entrer le nom"} onChange={(value)=>{
                    if(value.target.value===''){
                        getData({cin:value.target.value,page:parseInt(pageNumber)});
                    }else{
                        getData({cin:value.target.value,page:null});
                    }
                    setSearch(value.target.value);
                }}  />
            </div>
        <Table
            rowClassName={''}
            pagination={{
                total: apiResponse.total, defaultPageSize: 10,
                onChange: (page) => {
                    setPageNumber(page)
                    getData({cin:search,page: page});
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

export default ListCoachs;

