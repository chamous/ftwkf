import React, { useState } from 'react';
import './style.css';
import { toast, Toaster } from 'react-hot-toast';
import { affiliationCoach } from '../../../services/affiliationServices';

function CoachForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [birthdayPlace, setBirthdayPlace] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [nationality, setNationality] = useState('');
  const [cinNumber, setCinNumber] = useState('');
  const [cinDate, setCinDate] = useState('');
  const [cinPlace, setCinPlace] = useState('');
  const [levelStudy, setLevelStudy] = useState('');
  const [profession, setProfession] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [technicalGrade, setTechnicalGrade] = useState('');
  const [obtainedGradeDate, setObtainedGradeDate] = useState('');
  const [gradeCoach, setGradeCoach] = useState('');
  const [diplomeUrl, setDiplomeUrl] = useState('');
  const [certificateUrl, setCertificateUrl] = useState();
  const handleCertificatSelect = (event) => {
    setCertificateUrl(event.target.files[0]);
  };
  const handleDiplomeSelect = (event) => {
    setDiplomeUrl(event.target.files[0]);
  };
  const handleReset = () => {
    // state
    setFirstName('');
    setLastName('');
    setBirthday('');
    setBirthdayPlace('');
    setSpeciality('');
    setNationality('');
    setCinNumber('');
    setCinDate('');
    setCinPlace('');
    setLevelStudy('');
    setProfession('');
    setAddress('');
    setPostalCode('');
    setPhone('');
    setEmail('');
    setTechnicalGrade('');
    setObtainedGradeDate('');
    setGradeCoach('');
    setDiplomeUrl('');
    setCertificateUrl('');
    // reset files
    document.getElementById('diplome').value = '';
    document.getElementById('certificat').value = '';
  };
  const handleSubmit = async (evt) => {
    affiliationCoach({
      firstName,
      lastName,
      dateBirth: birthday,
      placeBirth: birthdayPlace,
      speciality,
      nationality,
      cinNumber,
      dateCin: cinDate,
      placeCin: cinPlace,
      levelStudy,
      profession,
      address,
      postalCode,
      phone,
      email,
      technicalGrade,
      dateObtained: obtainedGradeDate,
      gradeCoach,
      diplomeUrl,
      certificationUrl: certificateUrl,
    }).then((response) => {
      if (response.status === 201) {
        handleReset();
        toast.success('Ajout avec succès');
      } else {
        console.log('error', response);
      }
    }).catch((error) => {
      console.log(error);
    });
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
        <label>Lieu de naissance</label>
        <input
          type="text"
          required
          name="place_birth"
          value={birthdayPlace}
          id="place_birth"
          onChange={(evt) => setBirthdayPlace(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Spécialité</label>
        <input
          type="text"
          required
          name="specialty"
          id="specialty"
          value={speciality}
          onChange={(evt) => setSpeciality(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Nationalité</label>
        <input
          type="text"
          required
          name="nationality"
          id="nationality"
          value={nationality}
          onChange={(evt) => setNationality(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>CIN</label>
        <input
          type="number"
          required
          name="cin_number"
          id="cin_number"
          value={cinNumber}
          onChange={(evt) => setCinNumber(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Date CIN</label>
        <input
          type="date"
          required
          name="date_cin"
          id="date_cin"
          value={cinDate}
          onChange={(evt) => setCinDate(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Lieu CIN</label>
        <input
          type="text"
          required
          name="place_cin"
          id="place_cin"
          value={cinPlace}
          onChange={(evt) => setCinPlace(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Niveau d'éducation</label>
        <input
          type="text"
          required
          name="level_study"
          value={levelStudy}
          id="level_study"
          onChange={(evt) => setLevelStudy(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Profession</label>
        <input
          type="text"
          required
          name="profession"
          id="profession"
          value={profession}
          onChange={(evt) => setProfession(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Address</label>
        <input
          type="text"
          required
          name="address"
          id="address"
          value={address}
          onChange={(evt) => setAddress(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Code postal</label>
        <input
          type="text"
          required
          name="postal_code"
          id="postal_code"
          value={postalCode}
          onChange={(evt) => setPostalCode(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Téléphone</label>
        <input
          type="number"
          required
          name="phone"
          value={phone}
          id="phone"
          onChange={(evt) => setPhone(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>E-mail</label>
        <input
          type="email"
          required
          name="email"
          value={email}
          id="email"
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Grade technique</label>
        <input
          type="text"
          required
          name="technical_grade"
          value={technicalGrade}
          id="technical_grade"
          onChange={(evt) => setTechnicalGrade(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Date d'obtention du grade</label>
        <input
          type="date"
          required
          name="date_obtained"
          id="date_obtained"
          value={obtainedGradeDate}
          onChange={(evt) => setObtainedGradeDate(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Grade entraineur</label>
        <input
          type="text"
          required
          name="grade_arbitrator"
          id="grade_arbitrator"
          value={gradeCoach}
          onChange={(evt) => setGradeCoach(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <div className="file-label">
          <label>Diplome</label>
        </div>
        <input
          type="file"
          id="diplome"
          onChange={handleDiplomeSelect}
        />
        {/* <ReactFileInputCustom */}
        {/*    text={'téléverser un fichier'} */}
        {/*    acceptedExtensions={'pdf'} */}
        {/*    handleChange={handleDiplomeSelect}/> */}
      </div>
      <div className="input-container">
        <div className="file-label">
          <label>Certificat</label>
        </div>
        <div style={{ width: '50%', display: 'flex' }}>
          <input
            type="file"
            id="certificat"
                        // accept={acceptedExtensions}
                        // ref={inputFileRef}
                        // style={{ display: 'none' }}
            onChange={handleCertificatSelect}
          />
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
export default CoachForm;
