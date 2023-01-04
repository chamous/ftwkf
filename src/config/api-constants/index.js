const baseUrl = 'https://backend.ftwkf.org.tn/api';
export const baseUrlDownload = 'https://backend.ftwkf.org.tn';
const affilationUrl = {
    coach: `${baseUrl}/add-affiliation-coach`,
    arbitrator: `${baseUrl}/add-affiliation-arbitrator`,
    club: `${baseUrl}/add-affiliation-club`,
    gov: `${baseUrl}/governorates`,
    delegation: (id) => `${baseUrl}/delegations?gov_id=${id}`,
};
const authUrl = {
    login: `${baseUrl}/login`,
};

const adminServicesUrls = {
    getCoachAffiliationsEndPoint: `${baseUrl}/affiliations-coachs`,
    getArbitratorAffiliationsEndPoint: `${baseUrl}/affiliations-arbitrators`,
    getClubAffiliationsEndPoint: `${baseUrl}/affiliations-clubs`,
    addClub: `${baseUrl}/add-club`,
    addPublication:`${baseUrl}/posts`,
    updateCoachAffiliation: (id) => `${baseUrl}/update-affiliations-coach/${id}`,
    activateAthlete: (id) => `${baseUrl}/active-athlete/${id}`,
    refuseAthlete: (id) => `${baseUrl}/refuse-athlete/${id}`,
    updateArbitratorAffiliation: (id) => `${baseUrl}/update-affiliations-arbitrator/${id}`,
    updateClubAffiliation: (id) => `${baseUrl}/update-affiliations-club/${id}`
}

const clubUrls = {
    addAthlete: `${baseUrl}/add-athlete`,
    getAthletes: `${baseUrl}/athletes`,
    updatePassword: `${baseUrl}/update/password`,
    resetPassword: `${baseUrl}/send-reset-link-password`,
}

export {
    baseUrl,
    affilationUrl,
    authUrl,
    adminServicesUrls,
    clubUrls
};
