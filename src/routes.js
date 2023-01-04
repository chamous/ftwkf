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
import ListAthlete from "./pages/club/screens/list_athlete";
import AddAthlete from "./pages/club/screens/add_athlete";
import UpdatePassword from "./pages/club/screens/update_password";

export function Routes() {
    return (
        <BrowserRouter>
            <UseScrollToTop/>
            <div id="cover-spin"></div>
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
                <Route path="/club/athlete/add" component={<AddAthlete/>}>
                    <ProtectedAdminRoutes children={<AddAthlete/>}/>
                </Route>
                <Route path="/club/update-password" component={<UpdatePassword/>}>
                    <ProtectedAdminRoutes children={<UpdatePassword/>}/>
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

