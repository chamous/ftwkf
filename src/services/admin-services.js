import Interceptor from "../config/interceptor";
import {adminServicesUrls} from "../config/api-constants";

class AdminServices {
    static getCoachAffiliations = ({type:type}) => Interceptor(
        {
            url: adminServicesUrls.getCoachAffiliationsEndPoint,
            params: {
                type: type
            }
        });
    static getArbitratorAffiliations = ({type:type}) => Interceptor(
        {
            url: adminServicesUrls.getArbitratorAffiliationsEndPoint,
            params: {
                type: type
            }
        }
    )
    static getClubsAffiliations = ({type:type}) => Interceptor(
        {
            url: adminServicesUrls.getClubAffiliationsEndPoint,
            params: {
                type: type
            }
        }
    )

    static updateAffiliationCoach = (id,status) => Interceptor({
        url: adminServicesUrls.updateCoachAffiliation(id),
        method:'PUT',
        params: {
            status: status
        },
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
}
export default AdminServices