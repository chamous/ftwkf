import React, {useState} from 'react';
import {toast, Toaster} from "react-hot-toast";
import ClubServices from "../../../services/club-services";

const  AddAthlete= ()=> {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const handleReset = () => {
        // state
        setFirstName('');
        setLastName('');
        setBirthday('');
        setGender('')
    };
    const genderList = [
        {
            id:1,
            name:"Male",
        },
        {
            id:2,
            name:"femelle",
        }
    ]
    const handleSelectGender = (event) => {
        const data = genderList.find((o) => `${o?.name}` === event?.target?.value);
        setGender(data?.name);
    };
    const handleSubmit = async (evt) => {
        ClubServices.addAthlete(
            {firstName:firstName,lastName:lastName,sexe:gender,dateOfBirth:birthday}
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
                <label>Prénom</label>
                <input
                    required
                    type="text"
                    name="first_name"
                    value={firstName}
                    id="firstName"
                    onChange={(evt) => setFirstName(evt.target.value)}
                />
            </div>
            <div className="input-container">
                <label>Nom</label>
                <input
                    required
                    type="text"
                    name="last_name"
                    value={lastName}
                    id="last_name"
                    onChange={(evt) => setLastName(evt.target.value)}
                />
            </div>
            <div className="input-container">
                <label>Date de naissance</label>
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
                <label>Sexe</label>
                <select value={gender} id="mySelect" onChange={handleSelectGender}>
                    {genderList.map((item) => (
                        <option key={item?.id} value={item.name}>
                            {item?.name}
                        </option>
                    ))}
                </select>
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

