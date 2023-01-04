import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import {useLocation} from "react-router-dom";
import AdminServices from "../../../../services/admin-services";
import { baseUrlDownload } from '../../../../config/api-constants';
import download from "../../../../assets/download.png";
import { Image } from 'antd';


function SupporterAcceptedList() {
    const [data, setData] = useState()
    const location = useLocation();
    const [apiResponse, setApiResponse] = useState({})
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(1)


    const getData = ({name:name,page:page}) => {
        AdminServices.getSupporters({type: "active", search: name, page: page}).then(response => {
            setData(response?.data?.data)
            setApiResponse(response?.data);
        })
    }


    useEffect(() => {
        getData({name:"",page:1})
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
            title: 'CIN',
            dataIndex: 'cin_number',
            key: 'cin_number',
        },
        {
            title: 'Gouvernorat',
            dataIndex: 'governorate',
            key: 'governorate',
        },
        {
            title: 'Photo',
            dataIndex: 'image',
            key: 'image',
            render: (img) => {
                return img?<Image style={{width:100,height:100}} src={`${baseUrlDownload}${img}`}/>:<div>Aucun photo</div>
            }
        },
        {
            title: 'Cin PDF',
            dataIndex: 'file',
            key: 'file',
            render: (file) => {
                return <a href={`${baseUrlDownload}${file}`} target={"_blank"}>
                    <div style={{
                        width: "100%",
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
                        <p style={{margin: 0, color: "white", fonSize:5}}>Télécharger CIN</p>
                    </div>
                </a>
            }
        },
        {
            title: 'Payement PDF',
            dataIndex: 'extra_file',
            key: 'extra_file',
            render: (file) => {
                return <a href={`${baseUrlDownload}${file}`} target={"_blank"}>
                    <div style={{
                        width: "100%",
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
                        <p style={{margin: 0, color: "white", fonSize:5}}>Télécharger Payement</p>
                    </div>
                </a>
            }
        },
    ];
    return (
        <>
        <div style={{marginBottom:10}}>
                <label style={{marginRight:20}}>Recherche avec Cin :</label>
                <input style={{outline:'none'}} placeholder={"Entrer le cin"} onChange={(value)=>{
                    if(value.target.value===''){
                        getData({name:value.target.value,page:parseInt(pageNumber)});
                    }else{
                        getData({name:value.target.value,page:null});
                    }
                    setSearch(value.target.value);
                }}  />
            </div>
        <Table
            pagination={{
                total: apiResponse.total, defaultPageSize: 10,
                onChange: (page) => {
                    setPageNumber(page)
                    getData({name:search,page: page});
                }
            }}
            scroll={{x: 1024}}
            size={'middle'}
            showHeader
            columns={column}
            data={data}
            dataSource={data}
        />
        </>
    );
}

export default SupporterAcceptedList;
