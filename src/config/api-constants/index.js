const baseUrl = 'http://37.59.204.214:8080/api';
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

    updateCoachAffiliation: (id) => `${baseUrl}/update-affiliations-coach/${id}`,
    activateAthlete: (id) => `${baseUrl}/active-athlete/${id}`,
    updateArbitratorAffiliation: (id) => `${baseUrl}/update-affiliations-arbitrator/${id}`,
    updateClubAffiliation: (id) => `${baseUrl}/update-affiliations-club/${id}`
}

const clubUrls = {
    addAthlete: `${baseUrl}/add-athlete`,
    getAthletes: `${baseUrl}/athletes`,
}

export {
    baseUrl,
    affilationUrl,
    authUrl,
    adminServicesUrls,
    clubUrls
};
