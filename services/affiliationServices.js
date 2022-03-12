import Interceptor from '../config/interceptor';
import { affilationUrl } from '../config/api-constants';

export const affiliationCoach = (
  {
    firstName,
    lastName,
    dateBirth,
    placeBirth,
    speciality,
    nationality,
    cinNumber,
    dateCin,
    placeCin,
    levelStudy,
    profession,
    address,
    postalCode,
    phone,
    email,
    technicalGrade,
    dateObtained,
    gradeCoach,
    diplomeUrl,
    certificationUrl,
  },
) => new Promise((resolve, reject) => {
  const bodyFormData = new FormData();
  bodyFormData.append('diplome_url', diplomeUrl);
  bodyFormData.append('certificate_url', certificationUrl);
  bodyFormData.append('first_name', firstName);
  bodyFormData.append('last_name', lastName);
  bodyFormData.append('date_birth', dateBirth);
  bodyFormData.append('place_birth', placeBirth);
  bodyFormData.append('specialty', speciality);
  bodyFormData.append('nationality', nationality);
  bodyFormData.append('cin_number', cinNumber);
  bodyFormData.append('date_cin', dateCin);
  bodyFormData.append('place_cin', placeCin);
  bodyFormData.append('level_study', levelStudy);
  bodyFormData.append('profession', profession);
  bodyFormData.append('address', address);
  bodyFormData.append('postal_code', postalCode);
  bodyFormData.append('phone', phone);
  bodyFormData.append('email', email);
  bodyFormData.append('technical_grade', technicalGrade);
  bodyFormData.append('date_obtained', dateObtained);
  bodyFormData.append('grade_coach', gradeCoach);
  Interceptor({
    url: affilationUrl.coach,
    method: 'POST',
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(async (response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});

export const affiliationArbitrator = (
  {
    firstName,
    lastName,
    dateBirth,
    placeBirth,
    speciality,
    nationality,
    cinNumber,
    dateCin,
    placeCin,
    levelStudy,
    profession,
    address,
    postalCode,
    phone,
    email,
    technicalGrade,
    dateObtained,
    gradeArbitrator,
    diplomeUrl,
    certificationUrl,
  },
) => new Promise((resolve, reject) => {
  const bodyFormData = new FormData();
  bodyFormData.append('diplome_url', diplomeUrl);
  bodyFormData.append('certificate_url', certificationUrl);
  bodyFormData.append('first_name', firstName);
  bodyFormData.append('last_name', lastName);
  bodyFormData.append('date_birth', dateBirth);
  bodyFormData.append('place_birth', placeBirth);
  bodyFormData.append('specialty', speciality);
  bodyFormData.append('nationality', nationality);
  bodyFormData.append('cin_number', cinNumber);
  bodyFormData.append('date_cin', dateCin);
  bodyFormData.append('place_cin', placeCin);
  bodyFormData.append('level_study', levelStudy);
  bodyFormData.append('profession', profession);
  bodyFormData.append('address', address);
  bodyFormData.append('postal_code', postalCode);
  bodyFormData.append('phone', phone);
  bodyFormData.append('email', email);
  bodyFormData.append('technical_grade', technicalGrade);
  bodyFormData.append('date_obtained', dateObtained);
  bodyFormData.append('grade_arbitrator', gradeArbitrator);
  Interceptor({
    url: affilationUrl.arbitrator,
    method: 'POST',
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(async (response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});

export const affiliationClub = (
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
) => new Promise((resolve, reject) => {
  const bodyFormData = new FormData();
  bodyFormData.append('designation', designation);
  bodyFormData.append('assurance_number', assuranceNumber);
  bodyFormData.append('assurance_date', assuranceDate);
  bodyFormData.append('governorate', governorate);
  bodyFormData.append('delegation', delegation);
  bodyFormData.append('email', email);
  bodyFormData.append('postal_code', postalCode);
  bodyFormData.append('phone', phone);
  bodyFormData.append('fax', fax);
  bodyFormData.append('specialty', speciality);
  bodyFormData.append('first_name_president', firstNamePresident);
  bodyFormData.append('last_name_president', lastNamePresident);
  bodyFormData.append('cin_number_president', cinNumberPresident);
  bodyFormData.append('date_cin_president', cinDatePresident);
  bodyFormData.append('place_cin_president', cinPlacePresident);
  bodyFormData.append('phone_president', phonePresident);
  bodyFormData.append('address_president', addressPresident);
  bodyFormData.append('postal_code_president', postalCodePresident);
  bodyFormData.append('first_name_ruler', firstNameRuler);
  bodyFormData.append('last_name_ruler', lastNameRuler);
  bodyFormData.append('specialty_ruler', specialityRuler);
  bodyFormData.append('date_birth_ruler', birthDateRuler);
  bodyFormData.append('place_birth_ruler', placeBirthRuler);
  bodyFormData.append('nationality_ruler', nationalityRuler);
  bodyFormData.append('cin_number_ruler', cinNumberRuler);
  bodyFormData.append('date_cin_ruler', cinDateRuler);
  bodyFormData.append('place_cin_ruler', cinPlaceRuler);
  bodyFormData.append('level_study_ruler', levelStudyRuler);
  bodyFormData.append('profession_ruler', professionRuler);
  bodyFormData.append('address_ruler', addressRuler);
  bodyFormData.append('postal_code_ruler', postalCodeRuler);
  bodyFormData.append('phone_ruler', phoneRuler);
  bodyFormData.append('diplome_url', diplomeUrl);
  bodyFormData.append('certificate_url', certificateUrl);
  Interceptor({
    url: affilationUrl.club,
    method: 'POST',
    data: bodyFormData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(async (response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});

export const getGov = () => new Promise((resolve, reject) => {
  Interceptor({
    url: affilationUrl.gov,
    method: 'GET',
  })
    .then(async (response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});
export const getDelegation = (id) => new Promise((resolve, reject) => {
  Interceptor({
    url: affilationUrl.delegation(id),
    method: 'GET',
  })
    .then(async (response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
});
