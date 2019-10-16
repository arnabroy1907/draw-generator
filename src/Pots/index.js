import React from 'react';
import './main.css';
import { teamPotData } from '../service';

const Pot = props => {

    return(
        <div className = 'pot-div'>
            <div className = 'pot-head'> <span> {props.groupName} </span> </div>
            {
                props.teams.map(team => (
                    <div className = 'pot-list' key={team.name} > {team.name} </div>
                ))
            }
        </div>
    );
}

export default function Pots() {
    return (
        <div className = 'pot-container'>
            <Pot groupName='Pot 1' teams={teamPotData.pot1} />
            <Pot groupName='Pot 2' teams={teamPotData.pot2} />
            <Pot groupName='Pot 3' teams={teamPotData.pot3} />
            <Pot groupName='Pot 4' teams={teamPotData.pot4} />
        </div>
    )
}
