import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import ClubServices from "../../../../services/club-services";
import {toast, Toaster} from "react-hot-toast";
import AdminServices from "../../../../services/admin-services";
import {Button, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const handleReset = () => {
        // state
        setTitle('');
        setDescription('');
        setFile('');
        setImage('');
    };
    const handleSelectFile = (event) => {
        setFile(event.target.files[0])
        setImage(URL.createObjectURL(event.target.files[0]));
    };
    const handleSubmit = async (evt) => {
        AdminServices.addPost({title: title, description: description, file: file})
            .then((r) => {
            console.log(r);
            handleReset();
            toast.success('Ajout avec succès');
        }).catch((e) => {
            console.log(e)
        })
        evt.preventDefault();
    };
    return (
        <form inline className="form-style-8" onSubmit={handleSubmit}>
            <div className="input-container">
                <label>Title</label>
                <input
                    required
                    type="text"
                    name="title"
                    value={title}
                    id="title"
                    onChange={(evt) => setTitle(evt.target.value)}
                />
            </div>
            <div className="input-container">
                <label>Description</label>
                <input
                    required
                    type="text"
                    name="description"
                    value={description}
                    id="description"
                    onChange={(evt) => setDescription(evt.target.value)}
                />
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div className="input-container">
                    <div className="file-label">
                        <label>File</label>
                    </div>
                    <div style={{display: 'flex',marginRight:20 }}>
                        <input
                            type="file"
                            id="file"
                            onChange={handleSelectFile}
                        />
                    </div>
                </div>
                <img src={image} style={{
                    width:100,
                    height:100,
                    display:image!==''?'flex':'none',
                    objectFit: 'cover'
                }}/>
            </div>


            <Toaster position="bottom-right"/>
            <div style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            >
                <button type="submit" className="btn primary">Ajouter</button>
                <div style={{width: '50px'}}/>
                <button className="btn primary" onClick={handleReset}>Reset</button>
            </div>

        </form>
    );
}

export default AddPost;
