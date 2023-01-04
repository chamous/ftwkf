import Interceptor from "../config/interceptor";
import {adminServicesUrls, clubUrls} from "../config/api-constants";
import axios from 'axios';
class AdminServices {
    static getCoachAffiliations = ({type:type,cin:cin,page:page}) => Interceptor(
        {
            url: adminServicesUrls.getCoachAffiliationsEndPoint,
            params: {
                type: type,
                search: cin,
                page:page
            }
        });

    static getSupporters = ({type:type,search:search,page:page}) => Interceptor(
        {
            url: adminServicesUrls.getSupporters,
            params: {
                type: type,
                search: search,
                page:page
            }
        });
    static getArbitratorAffiliations = ({type:type,cin:cin,page:page}) => Interceptor(
        {
            url: adminServicesUrls.getArbitratorAffiliationsEndPoint,
            params: {
                type: type,
                search: cin,
                page:page
            }
        }
    )
    static exportAthlete = () => Interceptor(
        {
            url: adminServicesUrls.exportAthlete,
            method: 'GET',
            responseType: 'blob',
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` },
        }
    )

    static exportCoach = () => Interceptor(
        {
            url: adminServicesUrls.exportCoach,
            method:'GET',
            responseType: 'blob',
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` },
        }
    )
    static exportRuler = () => Interceptor(
        {
            url: adminServicesUrls.exportRuler,
            method:'GET',
            responseType: 'blob',
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` },
        }
    )
    static getClubsAffiliations = ({type:type,cin:cin,page:page}) =>
        Interceptor(
            {
                url: adminServicesUrls.getClubAffiliationsEndPoint,
                params: {
                    type: type,
                    search: cin,
                    page:page
                }
            }
        )
    static getPosts = () => Interceptor(
        {
            url: adminServicesUrls.addPublication,
        }
    )

    static acceptCoach = (id) => Interceptor({
        url: adminServicesUrls.acceptCoach(id),
        method:'POST',
    })
    static refuseCoach = (id) => Interceptor({
        url: adminServicesUrls.refuseCoach(id),
        method:'POST',
    })
    static updateAffiliationClub = (id,status) => Interceptor({
        url: adminServicesUrls.updateClubAffiliation(id),
        method:'PUT',
        params: {
            status: status
        },
    })

    static activateAthlete = (id) => Interceptor({
        url: adminServicesUrls.activateAthlete(id),
        method:'POST',
    })
    static refuseAthlete = (id) => Interceptor({
        url: adminServicesUrls.refuseAthlete(id),
        method:'POST',
    })

    static activateAttendant = (id) => Interceptor({
        url: adminServicesUrls.acceptAttendant(id),
        method:'POST',
    })
    static refuseAttendant = (id) => Interceptor({
        url: adminServicesUrls.refuseAttendant(id),
        method:'POST',
    })

    static getAttendantAdmin = ({type:type,cin:cin,page:page}) =>
        Interceptor(
            {
                url:clubUrls.getAttendants,
                params: {
                    type: type,
                    search: cin,
                    page:page
                }
            }
        )

        static getSupporterAdmin = ({type:type,cin:cin,page:page}) =>
        Interceptor(
            {
                url:clubUrls.getAttendants,
                params: {
                    type: type,
                    search: cin,
                    page:page
                }
            }
        )
    static addPost = (
        {
            title,
            description,
            file,
        }
    )  => new Promise((resolve, reject) =>  {
        const bodyFormData = new FormData();
        bodyFormData.append('title', title);
        bodyFormData.append('description', description);
        bodyFormData.append('file', file);
        Interceptor({
            url: adminServicesUrls.addPublication,
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
    static addClub = (
        {
            specialty,
            designation,
            assurance_number,
            assurance_date,
            governorate,
            delegation,
            email,
            postal_code,
            phone,
            fax,
            first_name_president,
            last_name_president,
            cin_number_president,
            date_cin_president,
            place_cin_president,
            address_president,
            postal_code_president,
            phone_president,
            specialty_ruler,
            first_name_ruler,
            last_name_ruler,
            date_birth_ruler,
            place_birth_ruler,
            nationality_ruler,
            cin_number_ruler,
            date_cin_ruler,
            place_cin_ruler,
            level_study_ruler,
            profession_ruler,
            address_ruler,
            postal_code_ruler,
            phone_ruler,
        }
    ) => Interceptor({
        url: adminServicesUrls.addClub,
        method:'POST',
        data:{
            specialty:specialty,
            designation:designation,
            assurance_number:assurance_number,
            assurance_date:assurance_date,
            governorate:governorate,
            delegation:delegation,
            email:email,
            postal_code:postal_code,
            phone:phone,
            fax:fax,
            first_name_president:first_name_president,
            last_name_president:last_name_president,
            cin_number_president:cin_number_president,
            date_cin_president:date_cin_president,
            place_cin_president:place_cin_president,
            address_president:address_president,
            postal_code_president:postal_code_president,
            phone_president:phone_president,
            specialty_ruler:specialty_ruler,
            first_name_ruler:first_name_ruler,
            last_name_ruler:last_name_ruler,
            date_birth_ruler:date_birth_ruler,
            place_birth_ruler:place_birth_ruler,
            nationality_ruler:nationality_ruler,
            cin_number_ruler:cin_number_ruler,
            date_cin_ruler:date_cin_ruler,
            place_cin_ruler:place_cin_ruler,
            level_study_ruler:level_study_ruler,
            profession_ruler:profession_ruler,
            address_ruler:address_ruler,
            postal_code_ruler:postal_code_ruler,
            phone_ruler:phone_ruler,
            password:"password"
        },
    })
    static updateAffiliationArbitrator = (id,status) => Interceptor({
        url: adminServicesUrls.updateArbitratorAffiliation(id),
        method:'PUT',
        params: {
            status: status
        },
    })

    static updateSupporter = (id,status) => Interceptor({
        url: adminServicesUrls.updateAffiliationSupporter(id),
        method:'PUT',
        params: {
            status: status
        },
    })
}
export default AdminServices
