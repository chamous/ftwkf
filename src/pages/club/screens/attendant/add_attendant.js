import React, {useRef, useState,useEffect} from 'react';
import {toast, Toaster} from "react-hot-toast";
import {isArabic,isNumber}  from '../../../../helpers'
import { getGov } from '../../../../services/affiliationServices';
import ClubServices from '../../../../services/club-services';

const  AddAttendant= ()=> {
    const [governorateList, setGovernorateList] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cinNumber, setCinNumber] = useState('');
    const [governorate, setGovernorate] = useState({});
    const [photo, setPhoto] = useState('');
    const [photoFile, setPhotoFile] = useState('');
    const [cinFile, setCinFile] = useState('');

    const paymentFileRef = useRef();
    const photoFileRef = useRef();
    const cinFileRef = useRef();

    const handleReset = () => {
        // state
        setFirstName('');
        setLastName('');
        setCinNumber('');
        setGovernorate({});
        setPhoto('');
        setPhotoFile('');
        setCinFile('');
        paymentFileRef.current.value = null;
        photoFileRef.current.value = null;
        cinFileRef.current.value = null;
    };
    useEffect(() => {
        getGov().then((response) => {
            setGovernorateList(response?.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);
    const handleSelectPhotoFile = (event) => {
        setPhotoFile(event.target.files[0]);
        setPhoto(URL.createObjectURL(event.target.files[0]));
    };

    const handleSelectCinFile = (event) => {
        setCinFile(event.target.files[0]);
    };

    const handleSelectGov = (event) => {
        const data = governorateList.find((o) => `${o?.name}` === event?.target?.value);
        setGovernorate(data?.name);
    };
    const handleSubmit = async (evt) => {
        ClubServices.AddAttendantApi(
            {
                firstName:firstName,
                lastName:lastName,
                cinNumber:cinNumber,
                governorate:governorate,
                image:photoFile,
                file:cinFile,
            }
        ).then((r)=>{
            handleReset();
            toast.success('Ajout avec succès');
        }).catch((e)=>{
            console.log(e)
        })
        evt.preventDefault();
    };
    return (
        <form inline className="form-style-8" onSubmit={handleSubmit}>
            <div className="input-container">
                <label>الإسم</label>
                <input
                    required
                    type="text"
                    name="first_name"
                    value={firstName}
                    id="firstName"
                    onChange={(evt) => {
                        isArabic(evt.target.value) || evt.target.value ==="" ? setFirstName(evt.target.value):setFirstName(prev =>prev)
                    }}
                />
            </div>
            <div className="input-container">
                <label>اللقب</label>
                <input
                    required
                    type="text"
                    name="last_name"
                    value={lastName}
                    id="last_name"
                    onChange={(evt) => {
                        isArabic(evt.target.value) || evt.target.value ==="" ? setLastName(evt.target.value):setLastName(prev =>prev)
                    }}
                />
            </div>
            <div className="input-container">
                <label>رقم بطاقة تعريف</label>
                <input
                    type="number"
                    required
                    name="cin_number"
                    id="cin_number"
                    value={cinNumber}
                    onChange={(evt) => {
                        (isNumber(evt.target.value) && evt.target.value.length <9) || evt.target.value ==="" ? setCinNumber(evt.target.value):setCinNumber(prev =>prev)
                    }}
                />
            </div>
            <div className="input-container">
                <label>الولاية</label>
                <select value={governorate} id="mySelectgov" onChange={handleSelectGov}>
                    <option selected key="-1" value={null}>
                        إختيار
                    </option>
                    {governorateList.map((item) => (
                        <option key={item?.id} value={item.name}>
                            {item?.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="input-container">
                <div className="file-label">
                    <label>وثيقة (بطاقة تعريف)</label>
                </div>
                <div style={{display: 'flex',marginRight:20 }}>
                    <input
                        type="file"
                        id="filepdf"
                        onChange={handleSelectCinFile}
                        ref={cinFileRef}
                    />
                </div>
            </div>
        
            <div className="input-container">
            <div style={{display:'flex',flexDirection:'row'}}>
                <div className="input-container">
                    <div className="file-label">
                        <label>صورة شمسية </label>
                    </div>
                    <div style={{display: 'flex',marginRight:20 }}>
                        <input
                            type="file"
                            id="file"
                            onChange={handleSelectPhotoFile}
                            ref={photoFileRef}
                        />
                    </div>
                </div>
                <img src={photo} style={{
                    width:100,
                    height:100,
                    display:photo!==''?'flex':'none',
                    objectFit: 'cover'
                }}/>
            </div>
      </div>
            <Toaster position="bottom-right" />
            <div style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            >
                <button type="submit" className="btn primary">Ajouter</button>
                <div style={{ width: '50px' }} />
                <button className="btn primary" onClick={handleReset}>Reset</button>
            </div>

        </form>
    );
}

export default AddAttendant;
