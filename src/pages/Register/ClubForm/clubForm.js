import React, { useEffect, useState } from 'react';
import './style.css';
import { toast, Toaster } from 'react-hot-toast';
import { affiliationClub, getDelegation, getGov } from '../../../services/affiliationServices';

function ClubForm() {
  const [loading, setLoading] = useState(false);
  const [designation, setDesignation] = useState('');
  const [assuranceNumber, setAssuranceNumber] = useState('');
  const [assuranceDate, setAssuranceDate] = useState('');
  const [governorate, setGovernorate] = useState({});
  const [governorateList, setGovernorateList] = useState([]);
  const [delegation, setDelegation] = useState({});
  const [delegationList, setDelegationList] = useState([]);

  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [phone, setPhone] = useState('');
  const [fax, setFax] = useState('');
  const [speciality, setSpeciality] = useState('');

  const [firstNamePresident, setFirstNamePresident] = useState('');
  const [lastNamePresident, setLastNamePresident] = useState('');
  const [cinNumberPresident, setCinNumberPresident] = useState('');
  const [cinDatePresident, setCinDatePresident] = useState('');
  const [cinPlacePresident, setCinPlacePresident] = useState('');

  const [phonePresident, setPhonePresident] = useState('');
  const [addressPresident, setAddressPresident] = useState('');
  const [postalCodePresident, setPostalCodePresident] = useState('');
  const [firstNameRuler, setFirstNameRuler] = useState('');
  const [lastNameRuler, setLastNameRuler] = useState('');

  const [specialityRuler, setSpecialityRuler] = useState('');
  const [birthDateRuler, setBirthDateRuler] = useState('');
  const [placeBirthRuler, setPlaceBirthRuler] = useState('');
  const [nationalityRuler, setNationalityRuler] = useState('');
  const [cinNumberRuler, setCinNumberRuler] = useState('');

  const [cinDateRuler, setCinDateRuler] = useState('');
  const [cinPlaceRuler, setCinPlaceRuler] = useState('');
  const [levelStudyRuler, setLevelStudyRuler] = useState('');
  const [professionRuler, setProfessionRuler] = useState('');
  const [addressRuler, setAddressRuler] = useState('');

  const [postalCodeRuler, setPostalCodeRuler] = useState('');
  const [phoneRuler, setPhoneRuler] = useState('');
  const [diplomeUrl, setDiplomeUrl] = useState('');
  const [certificateUrl, setCertificateUrl] = useState('');

  useEffect(() => {
    getGov().then((response) => {
      setGovernorateList(response?.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const handleCertificatSelect = (event) => {
    setCertificateUrl(event.target.files[0]);
  };
  const handleDiplomeSelect = (event) => {
    setDiplomeUrl(event.target.files[0]);
  };
  const handleReset = () => {
    setDesignation('');
    setAssuranceNumber('');
    setAssuranceDate('');
    setGovernorate({});
    setGovernorateList([]);
    setDelegation({});
    setDelegationList([]);
    setEmail('');
    setPostalCode('');
    setPhone('');
    setFax('');
    setSpeciality('');
    setFirstNamePresident('');
    setLastNamePresident('');
    setCinNumberPresident('');
    setCinDatePresident('');
    setCinPlacePresident('');
    setPhonePresident('');
    setAddressPresident('');
    setPostalCodePresident('');
    setFirstNameRuler('');
    setLastNameRuler('');
    setSpecialityRuler('');
    setBirthDateRuler('');
    setPlaceBirthRuler('');
    setNationalityRuler('');
    setCinNumberRuler('');
    setCinDateRuler('');
    setCinPlaceRuler('');
    setLevelStudyRuler('');
    setProfessionRuler('');
    setAddressRuler('');
    setPostalCodeRuler('');
    setPhoneRuler('');
    setDiplomeUrl('');
    setCertificateUrl('');

    document.getElementById('diplome').value = '';
    document.getElementById('certificat').value = '';
  };
  const handleSubmit = async (evt) => {
    affiliationClub(
      {
        designation,
        assuranceNumber,
        assuranceDate,
        governorate,
        delegation,
        email,
        postalCode,
        phone,
        fax,
        speciality,
        firstNamePresident,
        lastNamePresident,
        cinNumberPresident,
        cinDatePresident,
        cinPlacePresident,
        phonePresident,
        addressPresident,
        postalCodePresident,
        firstNameRuler,
        lastNameRuler,
        specialityRuler,
        birthDateRuler,
        placeBirthRuler,
        nationalityRuler,
        cinNumberRuler,
        cinDateRuler,
        cinPlaceRuler,
        levelStudyRuler,
        professionRuler,
        addressRuler,
        postalCodeRuler,
        phoneRuler,
        diplomeUrl,
        certificateUrl,
      },
    ).then((response) => {
      if (response.status === 201) {
        handleReset();
        toast.success('Club Ajout avec succès');
      } else {
        toast.error('Vérifier les information');
        console.log('error', response);
      }
    }).catch((error) => {
      console.log(error);
    });
    evt.preventDefault();
  };
  const handleSelectGov = (event) => {
    setLoading(true);
    const data = governorateList.find((o) => `${o?.name}` === event?.target?.value);
    setGovernorate(data?.name);
    console.log(`call ws : id:${data?.id}`, `name: ${data?.name}`);
    getDelegation(data?.id).then((response) => {
      setDelegation(response?.data?.[0]?.name);
      setDelegationList(response?.data);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleSelectDelegation = (event) => {
    const data = delegationList.find((o) => `${o?.id}` === event?.target?.value);
    setDelegation(data?.name);
  };

  return (
    <form inline className="form-style-8" onSubmit={handleSubmit}>
      <div
        style={{
          display: loading ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          inset: '0 0 0 0',
          backgroundColor: '#00000050',
        }}
      >
        <h5>loading</h5>
      </div>
      <div className="input-container">
        <label>Designation</label>
        <input
          required
          type="text"
          name="designation"
          value={designation}
          id="designation"
          onChange={(evt) => setDesignation(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Numéro d'assurance</label>
        <input
          required
          type="text"
          name="assurance_number"
          value={assuranceNumber}
          id="assurance_number"
          onChange={(evt) => setAssuranceNumber(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Date d'assurance</label>
        <input
          type="date"
          required
          name="assurance_date"
          value={assuranceDate}
          id="assurance_date"
          onChange={(evt) => setAssuranceDate(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Governorat</label>
        <select value={governorate} id="mySelect" onChange={handleSelectGov}>
          <option selected disabled hidden key="-1" value={null}>
            Choisie le governement
          </option>
          {governorateList.map((item) => (
            <option key={item?.id} value={item.name}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <label>Délégation</label>
        <select value={delegation} id="mySelect" onChange={handleSelectDelegation}>
          {delegationList.length === 0 && (
          <option selected disabled hidden key="-1" value={null}>
            Choisie la delegation
          </option>
          )}
          {delegationList.map((item) => (
            <option key={item?.id} value={item.id}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <label>Specialité</label>
        <input
          type="text"
          required
          name="speciality"
          id="speciality"
          value={speciality}
          onChange={(evt) => setSpeciality(evt.target.value)}
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
        <label>Fax</label>
        <input
          type="number"
          required
          name="fax"
          value={fax}
          id="fax"
          onChange={(evt) => setFax(evt.target.value)}
        />
      </div>

      <div className="input-container">
        <label>Nom du président</label>
        <input
          required
          type="text"
          name="first_name_president"
          value={firstNamePresident}
          id="first_name_president"
          onChange={(evt) => setFirstNamePresident(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Prénom du président</label>
        <input
          required
          type="text"
          name="last_name_president"
          value={lastNamePresident}
          id="last_name_president"
          onChange={(evt) => setLastNamePresident(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>CIN du président</label>
        <input
          type="number"
          required
          name="cin_number_president"
          id="cin_number_president"
          value={cinNumberPresident}
          onChange={(evt) => setCinNumberPresident(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Date CIN du président</label>
        <input
          type="date"
          required
          name="date_cin_president"
          id="date_cin_president"
          value={cinDatePresident}
          onChange={(evt) => setCinDatePresident(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Lieu CIN du président</label>
        <input
          type="text"
          required
          name="place_cin_president"
          id="place_cin_president"
          value={cinPlacePresident}
          onChange={(evt) => setCinPlacePresident(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Addresse du président</label>
        <input
          type="text"
          required
          name="address_president"
          id="address_president"
          value={addressPresident}
          onChange={(evt) => setAddressPresident(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Code postal du président</label>
        <input
          type="text"
          required
          name="postal_code_president"
          id="postal_code_president"
          value={postalCodePresident}
          onChange={(evt) => setPostalCodePresident(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Téléphone du président</label>
        <input
          type="number"
          required
          name="phone_president"
          value={phonePresident}
          id="phone_president"
          onChange={(evt) => setPhonePresident(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Specialité du dérigent</label>
        <input
          type="text"
          required
          name="specialty_ruler"
          id="specialty_ruler"
          value={specialityRuler}
          onChange={(evt) => setSpecialityRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Nom du dérigent</label>
        <input
          required
          type="text"
          name="first_name_ruler"
          value={firstNameRuler}
          id="first_name_ruler"
          onChange={(evt) => setFirstNameRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Prénom du dérigent</label>
        <input
          required
          type="text"
          name="last_name_ruler"
          value={lastNameRuler}
          id="last_name_ruler"
          onChange={(evt) => setLastNameRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Date de naissance du derigent</label>
        <input
          type="date"
          required
          name="date_birth_ruler"
          id="date_birth_ruler"
          value={birthDateRuler}
          onChange={(evt) => setBirthDateRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Lieu de naissance du dérigent</label>
        <input
          required
          type="text"
          name="place_birth_ruler"
          value={placeBirthRuler}
          id="place_birth_ruler"
          onChange={(evt) => setPlaceBirthRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Nationalité du dérigent</label>
        <input
          type="text"
          required
          name="nationality_ruler"
          id="nationality_ruler"
          value={nationalityRuler}
          onChange={(evt) => setNationalityRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>CIN du dérigent</label>
        <input
          type="number"
          required
          name="cin_number_ruler"
          id="cin_number_ruler"
          value={cinNumberRuler}
          onChange={(evt) => setCinNumberRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Date CIN du dérigent</label>
        <input
          type="date"
          required
          name="date_cin_ruler"
          id="date_cin_ruler"
          value={cinDateRuler}
          onChange={(evt) => setCinDateRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Lieu CIN du dérigent</label>
        <input
          type="text"
          required
          name="place_cin_ruler"
          id="place_cin_ruler"
          value={cinPlaceRuler}
          onChange={(evt) => setCinPlaceRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Niveau d'éducation du dérigent</label>
        <input
          type="text"
          required
          name="level_study_ruler"
          id="level_study_ruler"
          value={levelStudyRuler}
          onChange={(evt) => setLevelStudyRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Profession du dérigent</label>
        <input
          type="text"
          required
          name="profession_ruler"
          id="profession_ruler"
          value={professionRuler}
          onChange={(evt) => setProfessionRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Addresse du dérigent</label>
        <input
          type="text"
          required
          name="address_ruler"
          id="address_ruler"
          value={addressRuler}
          onChange={(evt) => setAddressRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Code postal du dérigent</label>
        <input
          type="text"
          required
          name="postal_code_ruler"
          id="postal_code_ruler"
          value={postalCodeRuler}
          onChange={(evt) => setPostalCodeRuler(evt.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Téléphone du dérigent</label>
        <input
          type="number"
          required
          name="phone_ruler"
          value={phoneRuler}
          id="phone_ruler"
          onChange={(evt) => setPhoneRuler(evt.target.value)}
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
export default ClubForm;
