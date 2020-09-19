import React from 'react'
import { useRouteMatch, Router, Route, Switch } from 'react-router-dom'
import ListView from "./Dashboard/ListView";
import GraphView from "./Dashboard/GraphView";
import JournalView from "./Dashboard/JournalView";
import Anxiety from "./questionaires/Anxiety";
import NewJournal from "./Dashboard/NewJournal";
import Depression from "./questionaires/Depression";

export default function DashboardRouter(props) {
    let {path, url} = useRouteMatch();
    return <Switch>
        <Route exact path={`${path}/`}>
            <ListView myInfo={props.myInfo} />
        </Route>
        <Route path={`${path}/graph`}>
            <GraphView myInfo={props.myInfo} />
        </Route>
        <Route path={`${path}/journal`}>
            <JournalView myInfo={props.myInfo} />
        </Route>
        <Route path={`${path}/anxiety`}>
            <Anxiety myInfo={props.myInfo} />
        </Route>
        <Route path={`${path}/journal/new`}>
            <NewJournal myInfo={props.myInfo} />
        </Route>
        <Route path={`${path}/depression`}>
            <Depression myInfo={props.myInfo} />
        </Route>

        
    </Switch>
}