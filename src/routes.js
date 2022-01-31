import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/";
import Dashboard from "./pages/Dashboard/";
import Affiliation from "./pages/Affiliation";
import EventsPage from "./pages/EventsPage";
import Home from "./pages/Home";
import EventInfo from "./pages/EventInfo";
import { UserSubscriptionsInfo } from "./pages/UserSubscriptions/UserSubscriptionsInfo";
import { UserEventInfo } from "./pages/UserEvents/UserEventsInfo";
import UserEventsHandler from './components/UserEventsHandler';
export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/Affiliation" exact component={Affiliation} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/event/:id" exact component={EventInfo} />
        <Route path="/events" component={EventsPage} />
        <Route path="/user/events" render={()=>(<UserEventsHandler {...UserEventInfo}/>)}/>
        <Route path="/user/subscriptions" render={()=>(<UserEventsHandler {...UserSubscriptionsInfo} />)}/>
      </Switch>
    </BrowserRouter>
  );
};
