import React, { useState,useRef } from 'react';
import './style.css';
import { toast, Toaster } from 'react-hot-toast';
import { gradeCoachList,technicalGradeList } from './constants'
import { listSpeciality } from './constants'
import { affiliationCoach } from '../../../../../services/affiliationServices';
import { isArabic, isArabicAndNumber, isNumber } from '../../../../../helpers';
function CoachForm() {
  const [listGradeCoach] = useState(gradeCoachList);
  const [listTechnicalGrade] = useState(technicalGradeList);
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
  const [gradeCoach, setGradeCoach] = useState('');
  const [diplomeUrl, setDiplomeUrl] = useState('');
  const [certificateUrl, setCertificateUrl] = useState();
  const [paymentUrl, setPaymentUrl] = useState();
  const [image, setImage] = useState('');
  const imageRef = useRef();

  const handleCertificatSelect = (event) => {
    setCertificateUrl(event.target.files[0]);
  };
  const handleDiplomeSelect = (event) => {
    setDiplomeUrl(event.target.files[0]);
  };
  const handlePaymentSelect = (event) => {
      setPaymentUrl(event.target.files[0]);
  };
  const handleSelectTechnicalGrade = (event) => {
    const data = listTechnicalGrade.find((o) => `${o?.name}` === event?.target?.value);
    setTechnicalGrade(data?.name);
  };
  const handleSelectCoachGrade = (event) => {
    const data = listGradeCoach.find((o) => `${o?.name}` === event?.target?.value);
    setGradeCoach(data?.name);
  };
  const handleSelectImage = (event) => {
    setImage(event.target.files[0]);
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
    setGradeCoach('');
    setDiplomeUrl('');
    setCertificateUrl('');
    setPaymentUrl('');
    setImage('');
    // reset files
    document.getElementById('diplome').value = '';
    document.getElementById('certificat').value = '';
    document.getElementById('payment').value = '';
    imageRef.current = '';

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
        paymentUrl: paymentUrl,
        image
      }).then((response) => {
        if (response.status === 201) {
          handleReset();
          toast.success('Ajout avec succès');
        } else {
          console.log('error', response);
          toast.error('inserer les fichiers');
        }
      }).catch((error) => {
        console.log(error);
        toast.error('inserer les fichiers');
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
      <label>مكان الولادة</label>
        <input
          type="text"
          required
          name="place_birth"
          value={birthdayPlace}
          id="place_birth"
          onChange={(evt) => {
            isArabic(evt.target.value) || evt.target.value ==="" ? setBirthdayPlace(evt.target.value):setBirthdayPlace(prev =>prev)
          }}
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
          onChange={(evt) => {
            isArabic(evt.target.value) || evt.target.value ==="" ? setNationality(evt.target.value):setNationality(prev =>prev)
          }}
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
          onChange={(evt) => {
            (isNumber(evt.target.value) && evt.target.value.length <9) || evt.target.value ==="" ? setCinNumber(evt.target.value):setCinNumber(prev =>prev)
          }}
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
          onChange={(evt) => {
            isArabic(evt.target.value) || evt.target.value ==="" ? setCinPlace(evt.target.value):setCinPlace(prev =>prev)
          }}
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
          onChange={(evt) => {
            isArabic(evt.target.value) || evt.target.value ==="" ? setLevelStudy(evt.target.value):setLevelStudy(prev =>prev)
          }}
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
          onChange={(evt) => {
            isArabic(evt.target.value) || evt.target.value ==="" ? setProfession(evt.target.value):setProfession(prev =>prev)
          }}
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
          onChange={(evt) => {
            isArabicAndNumber(evt.target.value) || evt.target.value ==="" ? setAddress(evt.target.value):setAddress(prev =>prev)
          }}
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
          onChange={(evt) => {
            (isNumber(evt.target.value) && evt.target.value.length < 5) || evt.target.value ==="" ? setPostalCode(evt.target.value):setPostalCode(prev =>prev)
          }}
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
          onChange={(evt) => {
           (isNumber(evt.target.value) && evt.target.value.length < 9) || evt.target.value ==="" ? setPhone(evt.target.value):setPhone(prev =>prev)
          }}
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
          onChange={(evt) => {
            setEmail(evt.target.value.toLowerCase())
          }}
        />
      </div>
      <div className="input-container">
        <label>الرتبة الفنية</label>
        <select value={technicalGrade} id="technical_grade" onChange={handleSelectTechnicalGrade}>
          <option selected key="-1" value={null}>
            إختيار
          </option>
          {listTechnicalGrade.map((item) => (
            <option key={item?.id} value={item.name}>
              {item?.name}
            </option>
          ))}
        </select>
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
        <label>رتبة المدرب</label>
        <select value={gradeCoach} id="grade_coach" onChange={handleSelectCoachGrade}>
          <option selected key="-1" value={null}>
            إختيار
          </option>
          {listGradeCoach.map((item) => (
            <option key={item?.id} value={item.name}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
                    <div className="file-label">
                        <label>صورة المدرب </label>
                    </div>
                    <div style={{display: 'flex',marginRight:20 }}>
                        <input
                            type="file"
                            id="file"
                            onChange={handleSelectImage}
                            ref={imageRef}
                        />
                    </div>
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
        <label>شهادة التدريب (PDF)</label>
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
                <label>عقد التدريب (PDF)</label>
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
      }}>
        <button type="submit" className="btn primary">التأكيد</button>
        <div style={{ width: '50px' }} />
        <button className="btn primary" onClick={handleReset}>مسح و إعادة</button>
      </div>

    </form>
  );
}
export default CoachForm;
