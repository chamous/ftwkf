import React from 'react';
import { useParams } from 'react-router-dom';
import CoachAffiliationList from './screens/coach_affiliation_list';
import ArbitratorAffiliationList from "./screens/arbitrator_affiliation_list";
import ClubAffiliationList from "./screens/club_affiliation_list";
import DemandeCoachAffiliationList from "./screens/demande_coach_affiliation_list";
import DemandeArbitratorAffiliationList from "./screens/demande_arbitrator_affiliation_list";
import DemandeClubAffiliationList from "./screens/demande_club_affiliation_list";
import RefusedCoachAffiliationList from "./screens/refused_coach_affiliation_list";
import RefusedArbitratorAffiliationList from "./screens/refused_arbitrator_affiliation_list";
import RefusedClubAffiliationList from "./screens/refused_club_affiliation_list";
import AthleteAffiliationList from "./screens/athlete_affiliation_list";
import DemandeAthleteAffiliationList from "./screens/demande_athlete_affiliation_list";
import RefusedAthleteAffiliationList from "./screens/refused_athlete_affiliation_list";


function
Affiliation() {
  const { type,affiliated } = useParams();

  return (
    <div>
      {
          type === 'coach' && affiliated ==="1"
              ? <CoachAffiliationList/>
              :type === 'coach' && affiliated ==="2"
                  ?<DemandeCoachAffiliationList/>
                  :type === 'coach' && affiliated ==="3"
                      ?<RefusedCoachAffiliationList/>
                  : type === 'arbitrator' && affiliated ==="1"
                  ? <ArbitratorAffiliationList />
                      :type === 'arbitrator' && affiliated ==="2"
                          ?<DemandeArbitratorAffiliationList />
                              :type === 'arbitrator' && affiliated ==="3"
                                  ?<RefusedArbitratorAffiliationList />
                      :type === 'clubs' && affiliated ==="1"
                              ?<ClubAffiliationList/>:type === 'clubs' && affiliated ==="2"
                                          ? <DemandeClubAffiliationList/>:type === 'clubs' && affiliated ==="3"?
                                          <RefusedClubAffiliationList/>:type === 'athlete' && affiliated ==="1"?
                                                  <AthleteAffiliationList/>:type === 'athlete' && affiliated ==="2"?
                                                      <DemandeAthleteAffiliationList/>:<DemandeAthleteAffiliationList/>
            }
    </div>
  );
}

export default Affiliation;
