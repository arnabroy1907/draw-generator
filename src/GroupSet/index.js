import React, { useState } from 'react';
import './main.css';
import { generateGroups } from '../service';

const Group = props => {

    return(
        <div className = 'group-div'>
            <div className = 'group-head'> <span> {props.groupName} </span> </div>
            {
                props.teams.map(team => (
                    <div className = 'group-list' key = {team}> {team} </div>
                ))
            }
        </div>
    );
}

export default function GroupsSet() {

    const [groupData, setGroupData] = useState({});
    const [isGroupSet, setIsGroupSet] = useState(false);
    const [iterations, setIterations] = useState(0);

    const groupGenerator = () => {
        setIsGroupSet(true);
        const genGroup = generateGroups();
        setGroupData(genGroup.groups);
        setIterations(genGroup.iterations);
    }


    return (
        <>
            <div className = 'group-gen-div'>
                <button onClick={groupGenerator} className = 'group-gen-button'> Generate Groups </button>
            </div>
            {
                iterations > 0
                &&
                <div className = 'group-gen-div'>
                    <div className = 'group-gen-iters'> Generated after {iterations} tries. </div>
                </div>
            }
            {
                isGroupSet
                &&
                <div className = 'group-container'>
                    {
                        groupData.map(group => {
                            return(
                                <Group groupName={`Group ${group[0]}`} teams={group.slice(1)} key={`group-${group[0]}`}/>
                            )
                        })
                    }
                </div>
            }
        </>
    )
}
