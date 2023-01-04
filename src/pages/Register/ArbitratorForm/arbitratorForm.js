import React, { useState } from 'react';
import './style.css';
import { toast, Toaster } from 'react-hot-toast';
import { affiliationArbitrator } from '../../../services/affiliationServices';
import { listGradeArbitrator,listSpeciality } from './constants'

function CoachForm() {
  const [gradeArbitratorList] = useState(listGradeArbitrator);
  const [specialityList] = useState(listSpeciality);
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
  const [gradeArbitrator, setGradeArbitrator] = useState('');
  const [diplomeUrl, setDiplomeUrl] = useState('');
  const [certificateUrl, setCertificateUrl] = useState();
  const [paymentUrl, setPaymentUrl] = useState();

  const handleCertificatSelect = (event) => {
    setCertificateUrl(event.target.files[0]);
  };
  const handleDiplomeSelect = (event) => {
    setDiplomeUrl(event.target.files[0]);
  };
  const handlePaymentSelect = (event) => {
      setPaymentUrl(event.target.files[0]);
  };
  const handleSelectArbiratorGrade = (event) => {
    const data = gradeArbitratorList.find((o) => `${o?.name}` === event?.target?.value);
    setGradeArbitrator(data?.name);
  };

  const handleSelectSpeciality = (event) => {
    const data = specialityList.find((o) => `${o?.name}` === event?.target?.value);
    setSpeciality(data?.name);
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
    setGradeArbitrator('');
    setDiplomeUrl('');
    setCertificateUrl('');
    setPaymentUrl('');
    // reset files
    document.getElementById('diplome').value = '';
    document.getElementById('certificat').value = '';
    document.getElementById('payment').value = '';
  };
  const handleSubmit = async (evt) => {
    affiliationArbitrator({
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
      gradeArbitrator,
      diplomeUrl,
      certificationUrl: certificateUrl,
      paymentUrl: paymentUrl,
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
      <label>الإسم</label>
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
      <label>اللقب</label>
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
      <label>مكان الولادة</label>
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
      <label>الجنسية</label>
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
      <label>رقم بطاقة التعريف الوطنية</label>
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
      <label>تاريخ الإصدار</label>
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
      <label>مكان الإصدار</label>
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
      <label>المستوى التعليمي</label>
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
      <label>العمل</label>
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
      <label>العنوان</label>
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
      <label>الترقيم البريدي</label>
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
      <label>رقم الهاتف</label>
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
      <label>البريد الإلكتروني</label>
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
      <label>الرتبة الفنية</label>
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
      <label>تاريخ التحصل على الرتبة الفنية</label>
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
        <label>رتبة التحكيم</label>
        <select value={gradeArbitrator} id="grade_arbitrator" onChange={handleSelectArbiratorGrade}>
          <option selected key="-1" value={null}>
            إختيار
          </option>
          {gradeArbitratorList.map((item) => (
            <option key={item?.id} value={item.name}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <div className="file-label">
        <label>شهادة الرتبة الفنية (PDF)</label>
        </div>
        <input
          type="file"
          id="diplome"
          onChange={handleDiplomeSelect}
        />
      </div>
      <div className="input-container">
        <div className="file-label">
        <label>شهادة رتبة التحكيم (PDF)</label>
        </div>
        <div style={{ width: '50%', display: 'flex' }}>
          <input
            type="file"
            id="certificat"
            onChange={handleCertificatSelect}
          />
        </div>
      </div>
        <div className="input-container">
            <div className="file-label">
                <label>معلوم الخلاص (PDF)</label>
            </div>
            <div style={{ width: '50%', display: 'flex' }}>
                <input
                    type="file"
                    id="payment"
                    onChange={handlePaymentSelect}
                />
            </div>
        </div>
      <Toaster position="bottom-right" />
      <div style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      >
        <button type="submit" className="btn primary">التأكيد</button>
        <div style={{ width: '50px' }} />
        <button className="btn primary" onClick={handleReset}>مسح و إعادة</button>
      </div>

    </form>
  );
}
export default CoachForm;
