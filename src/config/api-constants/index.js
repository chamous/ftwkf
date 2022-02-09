const baseUrl = 'http://127.0.0.1:8000/api';
const affilationUrl = {
  coach: `${baseUrl}/add-affiliation-coach`,
  arbitrator: `${baseUrl}/add-affiliation-arbitrator`,
  club: `${baseUrl}/add-affiliation-club`,
  gov: `${baseUrl}/governorates`,
  delegation: id => `${baseUrl}/delegations?gov_id=`+id,
};

export {
  baseUrl,
  affilationUrl,
};
