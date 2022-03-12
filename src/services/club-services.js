import Interceptor from "../config/interceptor";
import {clubUrls} from "../config/api-constants";

class ClubServices {
    static getAthletes = () => Interceptor(
        {
            url: clubUrls.getAthletes,
        }
    )

    static addAthlete = (
        {
            firstName,
            lastName,
            dateOfBirth,
            sexe
        }) =>
        Interceptor({
            url: clubUrls.addAthlete,
            method: 'POST',
            data: {
                first_name: firstName,
                last_name: lastName,
                date_birth: dateOfBirth,
                sexe: sexe,
            }
        })

}

export default ClubServices