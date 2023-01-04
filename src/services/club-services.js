import Interceptor from "../config/interceptor";
import {clubUrls} from "../config/api-constants";

class ClubServices {
    static getAthletes = ({type:type,name:name,page:page}) => Interceptor(
        {
            url: clubUrls.getAthletes,
            params: {
                page:page,
                type:type,
                search:name
            }
        }
    )
    static getAthletesClub = ({page:page,name:name}) => Interceptor(
        {
            url: clubUrls.getAthletes,
            params: {
                page:page,
                search:name
            }
        }
    )

    static addAthlete = (
        {
            firstName,
            lastName,
            dateOfBirth,
            sexe,
            image,
            file,
            speciality,
            grade
        },
      ) => new Promise((resolve, reject) => {
        const bodyFormData = new FormData();
        bodyFormData.append('first_name', firstName);
        bodyFormData.append('last_name', lastName);
        bodyFormData.append('date_birth', dateOfBirth);
        bodyFormData.append('sexe', sexe);
        bodyFormData.append('file', file);
        bodyFormData.append('image', image);
        bodyFormData.append('specialty', speciality);
        bodyFormData.append('grade', grade);
        Interceptor({
          url: clubUrls.addAthlete,
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
    static updatePassword = (
        {
            old_password,
            new_password,
            confirm_new_password,
        }) =>
        Interceptor({
            url: clubUrls.updatePassword,
            method: 'POST',
            params:{
                current_password:old_password,
                password:new_password,
                password_confirmation:confirm_new_password,
            }
        })
    static resetPassword = (
        {
            token,
            email,
            password,
            passwordConfirmation
        }) =>
        Interceptor({
            url: clubUrls.resetPassword,
            method: 'POST',
            params:{
                token:token,
                email:email,
                password:password,
                password_confirmation:passwordConfirmation,
            }
        })

}

export default ClubServices
