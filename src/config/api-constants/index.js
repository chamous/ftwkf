const baseUrl = "https://backend.ftwkf.org.tn/api";
export const baseUrlDownload = 'https://backend.ftwkf.org.tn';
const affilationUrl = {
    coach: `${baseUrl}/add-coach`,
    arbitrator: `${baseUrl}/add-affiliation-arbitrator`,
    club: `${baseUrl}/add-affiliation-club`,
    gov: `${baseUrl}/governorates`,
    delegation: (id) => `${baseUrl}/delegations?gov_id=${id}`,
    supporter: `${baseUrl}/add-affiliation-supporter`,
};
const authUrl = {
    login: `${baseUrl}/login`,
};

const adminServicesUrls = {
    getCoachAffiliationsEndPoint: `${baseUrl}/coachs`,
    getArbitratorAffiliationsEndPoint: `${baseUrl}/affiliations-arbitrators`,
    getClubAffiliationsEndPoint: `${baseUrl}/affiliations-clubs`,
    addClub: `${baseUrl}/add-club`,
    addPublication:`${baseUrl}/posts`,
    acceptCoach: (id) => `${baseUrl}/active-coach/${id}`,
    refuseCoach: (id) => `${baseUrl}/refuse-coach/${id}`,
    activateAthlete: (id) => `${baseUrl}/active-athlete/${id}`,
    refuseAthlete: (id) => `${baseUrl}/refuse-athlete/${id}`,
    updateArbitratorAffiliation: (id) => `${baseUrl}/update-affiliations-arbitrator/${id}`,
    updateAffiliationSupporter: (id) => `${baseUrl}/affiliations-supporter/${id}`,
    updateClubAffiliation: (id) => `${baseUrl}/update-affiliations-club/${id}`,
    getAttendants:`${baseUrl}/attendants`,
    getSupporters:`${baseUrl}/affiliations-supporters`,
    acceptAttendant: (id) => `${baseUrl}/active-attendant/${id}`,
    refuseAttendant: (id) => `${baseUrl}/refuse-attendant/${id}`,
    exportAthlete: `${baseUrl}/export/atheletes`,
    exportCoach: `${baseUrl}/export/coachs`,
    exportRuler: `${baseUrl}/export/rulers`,
}

const clubUrls = {
    addAthlete: `${baseUrl}/add-athlete`,
    getAthletes: `${baseUrl}/athletes`,
    updatePassword: `${baseUrl}/update/password`,
    resetPassword: `${baseUrl}/send-reset-link-password`,
    addAttendant: `${baseUrl}/add-attendant`,
    getAttendants:`${baseUrl}/attendants`,
}

export {
    baseUrl,
    affilationUrl,
    authUrl,
    adminServicesUrls,
    clubUrls
};
