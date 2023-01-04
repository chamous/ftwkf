import React, {useState} from 'react';
import {toast, Toaster} from "react-hot-toast";
import ClubServices from "../../../services/club-services";

const  UpdatePassword= ()=> {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const handleReset = () => {
        // state
        setOldPassword('')
        setNewPassword('')
        setConfirmNewPassword('')
    };
    const handleSubmit = async (evt) => {
        ClubServices.updatePassword(
            {
                old_password:oldPassword,
                new_password:newPassword,
                confirm_new_password:confirmNewPassword,
            }
        ).then((r)=>{
            handleReset();
            toast.success('Mot de passe modifié avec succès');
        }).catch((e)=>{
            console.log(e)
        })
        evt.preventDefault();
    };
    return (
        <form inline className="form-style-8" onSubmit={handleSubmit}>
            <div className="input-container">
                <label>Encien mot de passe</label>
                <input
                    required
                    type="password"
                    name="old-password"
                    value={oldPassword}
                    id="old-password"
                    onChange={(evt) => setOldPassword(evt.target.value)}
                />
            </div>
            <div className="input-container">
                <label>Nouveau mot de passe</label>
                <input
                    required
                    type="password"
                    name="new-password"
                    value={newPassword}
                    id="new-password"
                    onChange={(evt) => setNewPassword(evt.target.value)}
                />
            </div>
            <div className="input-container">
                <label>Confirmer mot de passe</label>
                <input
                    required
                    type="password"
                    name="confirm-new-password"
                    value={confirmNewPassword}
                    id="confirm-new-password"
                    onChange={(evt) => setConfirmNewPassword(evt.target.value)}
                />
            </div>
            <Toaster position="bottom-right" />
            <div style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            >
                <button type="submit" className="btn primary">Envoyer</button>
                <div style={{ width: '50px' }} />
                <button className="btn primary" onClick={handleReset}>Reset</button>
            </div>

        </form>
    );
}

export default UpdatePassword;

