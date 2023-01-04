import React, {useRef, useState} from 'react';
import {toast, Toaster} from "react-hot-toast";
import ClubServices from "../../../../services/club-services";
import { listSpeciality,listGrade } from '../constants'
import {isArabic}  from '../../../../helpers'

const  AddAthlete= ()=> {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [file, setFile] = useState('');
    const [pdf, setPdf] = useState('');
    const [image, setImage] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [grade, setGrade] = useState('');
    const [specialityList] = useState(listSpeciality);
    const [gradeList] = useState(listGrade);
    const pdfInputRef = useRef();
    const imageInputRef = useRef();

    const handleReset = () => {
        // state
        setFirstName('');
        setLastName('');
        setBirthday('');
        setGender('');
        setPdf('');
        setImage('')
        pdfInputRef.current.value = null;
        imageInputRef.current.value = null;
    };
    const genderList = [
        {
            id:1,
            name:"إختر",
        },
        {
            id:2,
            name:"ذكر",
        },
        {
            id:3,
            name:"أنثى",
        }
    ]
    const handleSelectGender = (event) => {
        const data = genderList.find((o) => `${o?.name}` === event?.target?.value);
        setGender(data?.name);
    };
    const handleSelectFile = (event) => {
        setFile(event.target.files[0])
        setImage(URL.createObjectURL(event.target.files[0]));
    };
    const handleSelectPdf = (event) => {
        setPdf(event.target.files[0])
    };
    const handleSubmit = async (evt) => {
        ClubServices.addAthlete(
            {
                firstName:firstName,
                lastName:lastName,
                sexe:gender,
                dateOfBirth:birthday,
                image:file,
                file:pdf,
                speciality:speciality,
                grade:grade
            }
        ).then((r)=>{
            handleReset();
            toast.success('Ajout avec succès');
        }).catch((e)=>{
            console.log(e)
        })
        evt.preventDefault();
    };
    const handleSelectSpeciality = (event) => {
        const data = specialityList.find((o) => `${o?.name}` === event?.target?.value);
        setSpeciality(data?.name);
    };
    const handleSelectGrade = (event) => {
        const data = gradeList.find((o) => `${o?.name}` === event?.target?.value);
        setGrade(data?.name);
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
                <label>تاريخ الولادة</label>
                <input
                    type="date"
                    required
                    name="birthday"
                    value={birthday}
                    id="birthday"
                    onChange={(evt) => setBirthday(evt.target.value)}
                />
            </div>

            <div className="input-container">
                <label>الجنس</label>
                <select value={gender} id="mySelect" onChange={handleSelectGender}>
                    {genderList.map((item) => (
                        <option key={item?.id} value={item.name}>
                            {item?.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="input-container">
                <label>الإختصاص</label>
                <select value={speciality} id="speciality" onChange={handleSelectSpeciality}>
                    <option selected key="-1" value={null}>
                        إختيار
                    </option>
                    {specialityList.map((item) => (
                      <option key={item?.id} value={item.name}>
                          {item?.name}
                      </option>
                    ))}
                </select>
            </div>
            <div className="input-container">
                <label>رتبة اللاعب </label>
                <select value={grade} id="grade" onChange={handleSelectGrade}>
                    <option selected key="-1" value={null}>
                        إختيار
                    </option>
                    {gradeList.map((item) => (
                      <option key={item?.id} value={item.name}>
                          {item?.name}
                      </option>
                    ))}
                </select>
            </div>
            <div className="input-container">
                <div className="file-label">
                    <label>وثيقة (جواز سفر، بطاقة تعريف)</label>
                </div>
                <div style={{display: 'flex',marginRight:20 }}>
                    <input
                        type="file"
                        id="filepdf"
                        onChange={handleSelectPdf}
                        ref={pdfInputRef}
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
                            onChange={handleSelectFile}
                            ref={imageInputRef}
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

export default AddAthlete;
