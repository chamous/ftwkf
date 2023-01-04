import React from 'react';
import {
    BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import EventsPage from './pages/EventsPage';
import Home from './pages/Home';
import EventInfo from './pages/EventInfo';
import {UserSubscriptionsInfo} from './pages/UserSubscriptions/UserSubscriptionsInfo';
import {UserEventInfo} from './pages/UserEvents/UserEventsInfo';
import UserEventsHandler from './components/UserEventsHandler';
import Navbar from './pages/admin/Nav/Navbar';
import {UseScrollToTop} from './hooks/scrollToTop';
import NavbarClub from "./pages/club/Nav/NavbarClub";
import AddPost from "./pages/admin/screens/post/addPost";
import ListPosts from "./pages/admin/screens/post/listPosts";
import ClubAffiliationList from "./pages/admin/screens/club/club_affiliation_list";
import DemandeClubAffiliationList from "./pages/admin/screens/club/demande_club_affiliation_list";
import RefusedClubAffiliationList from "./pages/admin/screens/club/refused_club_affiliation_list";
import ArbitratorAffiliationList from "./pages/admin/screens/arbitrator/arbitrator_affiliation_list";
import DemandeArbitratorAffiliationList from "./pages/admin/screens/arbitrator/demande_arbitrator_affiliation_list";
import RefusedArbitratorAffiliationList from "./pages/admin/screens/arbitrator/refused_arbitrator_affiliation_list";
import CoachAffiliationList from "./pages/admin/screens/coach/coach_affiliation_list";
import DemandeCoachAffiliationList from "./pages/admin/screens/coach/demande_coach_affiliation_list";
import RefusedCoachAffiliationList from "./pages/admin/screens/coach/refused_coach_affiliation_list";
import AthleteAffiliationList from "./pages/admin/screens/athlete/athlete_affiliation_list";
import RefusedAthleteAffiliationList from "./pages/admin/screens/athlete/refused_athlete_affiliation_list";
import DemandeAthleteAffiliationList from "./pages/admin/screens/athlete/demande_athlete_affiliation_list";
import ListAthlete from "./pages/club/screens/athlete/list_athlete";
import AddAthlete from "./pages/club/screens/athlete/add_athlete";
import UpdatePassword from "./pages/club/screens/update_password";
import CoachForm from "./pages/club/screens/coach/CoachForm/coachForm";
import { useSelector } from 'react-redux';
import ListCoachs from './pages/club/screens/coach/list_coachs';
import AddAttendant from './pages/club/screens/attendant/add_attendant';
import ListAttendants from './pages/club/screens/attendant/list_attendants';
import AttendantAcceptedList from './pages/admin/screens/attendant/accpted_attendant_list';
import AttendantDemandList from './pages/admin/screens/attendant/demand_attendant_list';
import AttendantRefusedList from './pages/admin/screens/attendant/refused_attendant_list';
import SupporterAcceptedList from './pages/admin/screens/supporter/accpted_supporter_list';
import SupporterDemandList from './pages/admin/screens/supporter/demand_supporter_list';
import SupporterRefusedList from './pages/admin/screens/supporter/refused_supporter_list';

export function Routes() {
    const loading = useSelector(state => state?.loader?.loading);
    return (
        <BrowserRouter>
            <UseScrollToTop/>
            <div id="cover-spin" style={{display:loading ? 'flex':'none'}}></div>
            <Switch>
                <Route path="/" exact component={Home}>
                    <IsLoggedInRoute/>
                </Route>
                <Route path="/login" exact>
                    <UnprotectedRoute children={<Login/>}/>
                </Route>
                <Route path="/register" exact>
                    <UnprotectedRoute children={<Register/>}/>
                </Route>
                <Route path="/dashboard">
                    <ProtectedRoute children={Dashboard}/>
                </Route>
                <Route path="/event/:id" exact component={EventInfo}/>
                <Route path="/events" component={EventsPage}/>
                <Route path="/user/events" render={() => (<UserEventsHandler {...UserEventInfo} />)}/>
                <Route path="/user/subscriptions" render={() => (<UserEventsHandler {...UserSubscriptionsInfo} />)}/>

                {/*Admin Club*/}
                <Route path="/admin/affiliation/clubs/affiliated" component={<ClubAffiliationList/>}>
                    <ProtectedAdminRoutes children={<ClubAffiliationList/>}/>
                </Route>
                <Route path="/admin/affiliation/clubs/demand" component={<DemandeClubAffiliationList/>}>
                    <ProtectedAdminRoutes children={<DemandeClubAffiliationList/>}/>
                </Route>
                <Route path="/admin/affiliation/clubs/refused" component={<RefusedClubAffiliationList/>}>
                    <ProtectedAdminRoutes children={<RefusedClubAffiliationList/>}/>
                </Route>
                {/*Admin Arbitrator*/}
                <Route path="/admin/affiliation/arbitrator/affiliated" component={<ArbitratorAffiliationList/>}>
                    <ProtectedAdminRoutes children={<ArbitratorAffiliationList/>}/>
                </Route>
                <Route path="/admin/affiliation/arbitrator/demand" component={<DemandeArbitratorAffiliationList/>}>
                    <ProtectedAdminRoutes children={<DemandeArbitratorAffiliationList/>}/>
                </Route>
                <Route path="/admin/affiliation/arbitrator/refused" component={<RefusedArbitratorAffiliationList/>}>
                    <ProtectedAdminRoutes children={<RefusedArbitratorAffiliationList/>}/>
                </Route>
                {/*Admin Coach*/}
                <Route path="/admin/affiliation/coach/affiliated" component={<CoachAffiliationList/>}>
                    <ProtectedAdminRoutes children={<CoachAffiliationList/>}/>
                </Route>
                <Route path="/admin/affiliation/coach/demand" component={<DemandeCoachAffiliationList/>}>
                    <ProtectedAdminRoutes children={<DemandeCoachAffiliationList/>}/>
                </Route>
                <Route path="/admin/affiliation/coach/refused" component={<RefusedCoachAffiliationList/>}>
                    <ProtectedAdminRoutes children={<RefusedCoachAffiliationList/>}/>
                </Route>
                {/*Admin Athlete*/}
                <Route path="/admin/affiliation/athlete/affiliated" component={<AthleteAffiliationList/>}>
                    <ProtectedAdminRoutes children={<AthleteAffiliationList/>}/>
                </Route>
                <Route path="/admin/affiliation/athlete/demand" component={<DemandeAthleteAffiliationList/>}>
                    <ProtectedAdminRoutes children={<DemandeAthleteAffiliationList/>}/>
                </Route>

                <Route path="/admin/affiliation/athlete/refused" component={<RefusedAthleteAffiliationList/>}>
                    <ProtectedAdminRoutes children={<RefusedAthleteAffiliationList/>}/>
                </Route>
                {/*Admin Attendant*/}
                <Route path="/admin/attendant/accepted" component={<AttendantAcceptedList/>}>
                    <ProtectedAdminRoutes children={<AttendantAcceptedList/>}/>
                </Route>
                <Route path="/admin/attendant/demand" component={<AttendantDemandList/>}>
                    <ProtectedAdminRoutes children={<AttendantDemandList/>}/>
                </Route>

                <Route path="/admin/attendant/refused" component={<AttendantRefusedList/>}>
                    <ProtectedAdminRoutes children={<AttendantRefusedList/>}/>
                </Route>
                {/*Admin supporter*/}
                <Route path="/admin/supporter/accepted" component={<SupporterAcceptedList/>}>
                    <ProtectedAdminRoutes children={<SupporterAcceptedList/>}/>
                </Route>
                <Route path="/admin/supporter/demand" component={<SupporterDemandList/>}>
                    <ProtectedAdminRoutes children={<SupporterDemandList/>}/>
                </Route>

                <Route path="/admin/supporter/refused" component={<SupporterRefusedList/>}>
                    <ProtectedAdminRoutes children={<SupporterRefusedList/>}/>
                </Route>
                {/*Admin Posts*/}
                <Route path="/admin/posts/add" component={<AddPost/>}>
                    <ProtectedAdminRoutes children={<AddPost/>}/>
                </Route>
                <Route path="/admin/posts/list" component={<ListPosts/>}>
                    <ProtectedAdminRoutes children={<ListPosts/>}/>
                </Route>
                <Route path="/club/athlete/list" component={<ListAthlete/>}>
                    <ProtectedAdminRoutes children={<ListAthlete/>}/>
                </Route>
                <Route path="/club/coach/list" component={<ListCoachs/>}>
                    <ProtectedAdminRoutes children={<ListCoachs/>}/>
                </Route>
                <Route path="/club/attendant/list" component={<ListAttendants/>}>
                    <ProtectedAdminRoutes children={<ListAttendants/>}/>
                </Route>
                <Route path="/club/athlete/add" component={<AddAthlete/>}>
                    <ProtectedAdminRoutes children={<AddAthlete/>}/>
                </Route>
                <Route path="/club/attendant/add" component={<AddAttendant/>}>
                    <ProtectedAdminRoutes children={<AddAttendant/>}/>
                </Route>
                <Route path="/club/update-password" component={<UpdatePassword/>}>
                    <ProtectedAdminRoutes children={<UpdatePassword/>}/>
                </Route>
                <Route path="/club/coach/add" component={<CoachForm/>}>
                    <ProtectedAdminRoutes children={<CoachForm/>}/>
                </Route>
                <Route path="/api/reset-password">
                    <ProtectedAdminRoutes children={<UpdatePassword/>}/>
                </Route>

                <Route path="/admin/affiliation">
                    <Redirect to="/admin/affiliation/club/affiliated"/>
                </Route>

                <Route path="/club/athlete/">
                    <Redirect to="/club/athlete/list"/>
                </Route>

            </Switch>

        </BrowserRouter>
    );
}

function ProtectedRoute({children}) {
    const token = localStorage.getItem('token');
    return token ? <>{children}</> : <Redirect to="/login"/>;
}

function UnprotectedRoute({children}) {
    const token = localStorage.getItem('token');
    return !token ? <>{children}</> : <Redirect to="/"/>;
}

function ProtectedAdminRoutes({children}) {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); // useSelector(state=> state.login)

    return token && role === 'admin' ? <Navbar>{children}</Navbar> : token && role === 'club' ?
        <NavbarClub>{children}</NavbarClub> : <Redirect to="/login"/>;
}
function IsLoggedInRoute() {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role'); // useSelector(state=> state.login)

    return token && role === 'admin' ? <Redirect to={'/admin/affiliation/clubs/affiliated'}/> : token && role === 'club' ?
        <NavbarClub><ListAthlete/></NavbarClub> : <Home/>;
}

