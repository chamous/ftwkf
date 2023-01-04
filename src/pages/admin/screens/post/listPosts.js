import React, {useEffect, useState} from 'react';
import CardPub from "../../../../components/Card/card-pub";
import AdminServices from "../../../../services/admin-services";
import {baseUrlDownload} from "../../../../config/api-constants";
import {Modal} from "antd";

const ListPosts = () => {
    const [data, setData] = useState([])
    const [selectedPub, setSelectedPub] = useState()
    const [visible, setVisible] = useState(false)
    const getData = () => {
        AdminServices.getPosts().then((response) => {
            console.log(response?.data?.data)
            setData(response?.data?.data);
            console.log(response?.data?.data)
        }).catch(error => {
            console.log(error)
        })
    }
    const onPress = (element) => {
        setSelectedPub(element || null)
        setVisible(true)
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            overflowY: 'auto',
            height: '88vh'
        }}>
            {
                data?.map((element) => {
                    return (
                        <CardPub
                            onPress={()=>onPress(element)}
                            image={element.file}
                            title={element?.title}
                            description={element?.description}
                        />
                    );
                })
            }
            <Modal
                title={'Detail publication'}
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}>

                <div style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    textAlign:"end"
                }}>
                    <p>
                        <span style={{fontWeight: "bold", fontSize: 18}}> : العنوان </span>
                        <br/>
                        <span className="title_modal">{selectedPub?.["title"]}</span>
                    </p>
                    <p>
                        <span style={{
                        fontWeight: "bold",
                        marginTop: 10,
                        fontSize: 18
                    }}> : التفاصيل  </span>
                        <br/>
                        <span className="desc_modal">{selectedPub?.["description"]}</span></p>
                    <img src={`${baseUrlDownload}${selectedPub?.["file"]}`} style={{width: 400, height: 200}}/>


                </div>

            </Modal>
        </div>
    );
}

export default ListPosts;
