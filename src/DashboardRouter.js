import React from 'react'
import { useRouteMatch, Router, Route, Switch } from 'react-router-dom'
import ListView from "./Dashboard/ListView";
import GraphView from "./Dashboard/GraphView";
import JournalView from "./Dashboard/JournalView";
import Anxiety from "./questionaires/Anxiety";
import NewJournal from "./Dashboard/NewJournal";
import Depression from "./questionaires/Depression";
import Water from "./questionaires/Water";

export default function DashboardRouter(props) {
    let {path, url} = useRouteMatch();
    return <Switch>
        <Route exact path={`${path}/`}>
            <ListView myInfo={props.myInfo} />
        </Route>
        <Route path={`${path}/graph`}>
            <GraphView myInfo={props.myInfo} />
        </Route>
        <Route exact path={`${path}/journal`}>
            <JournalView myInfo={props.myInfo} journals={props.journals} />
        </Route>
        <Route path={`${path}/anxiety`}>
            <Anxiety myInfo={props.myInfo} anxietyScores={props.anxietyScores}/>
        </Route>
        <Route path={`${path}/journal/new`}>
            <NewJournal myInfo={props.myInfo} />
        </Route>
        <Route path={`${path}/depression`}>
            <Depression myInfo={props.myInfo} depressionScores={props.depressionScores}/>
        </Route>
        <Route path={`${path}/water`}>
            <Water myInfo={props.myInfo} water={props.water} />
        </Route>

        
    </Switch>
}