export const fullTeamDB = [
    {
        name: 'Real Madrid',
        code: 'S'
    },
    {
        name: 'Barcelona',
        code: 'S'
    },
    {
        name: 'Liverpool',
        code: 'E'
    },
    {
        name: 'Bayern Munich',
        code: 'G'
    },
    {
        name: 'Manchester City',
        code: 'E'
    },
    {
        name: 'Juventus',
        code: 'I'
    },
    {
        name: 'Paris Saint Germain',
        code: 'F'
    },
    {
        name: 'Benfica',
        code: 'P'
    },
    {
        name: 'Borussia Dortmund',
        code: 'G'
    },
    {
        name: 'Porto',
        code: 'P'
    },
    {
        name: 'Atletico Madrid',
        code: 'S'
    },
    {
        name: 'Ajax',
        code: 'N'
    },
    {
        name: 'Chelsea',
        code: 'E'
    },
    {
        name: 'Napoli',
        code: 'I'
    },
    {
        name: 'Tottenham Hotspurs',
        code: 'E'
    },
    {
        name: 'Inter Milan',
        code: 'I'
    },
    {
        name: 'Sevilla',
        code: 'S'
    },
    {
        name: 'Galatasaray',
        code: 'T'
    },
    {
        name: 'Lyon',
        code: 'F'
    },
    {
        name: 'AC Milan',
        code: 'I'
    },
    {
        name: 'Arsenal',
        code: 'E'
    },
    {
        name: 'CSKA Moskow',
        code: 'R'
    },
    {
        name: 'PSV Eindhoven',
        code: 'N'
    },
    {
        name: 'Valencia',
        code: 'S'
    },
    {
        name: 'Manchester United',
        code: 'E'
    },
    {
        name: 'Club Brugge',
        code: 'B'
    },
    {
        name: 'Olympiacos',
        code: 'T'
    },
    {
        name: 'Shakhtar Donetsk',
        code: 'U'
    },
    {
        name: 'Zenit',
        code: 'R'
    },
    {
        name: 'RB Leipzieg',
        code: 'G'
    },
    {
        name: 'Losc Lille',
        code: 'F'
    },
    {
        name: 'Bayer Leverkusen',
        code: 'G'
    }
];

export const teamPotData = {
    pot1: [
        {
            name: 'Real Madrid',
            code: 'S'
        },
        {
            name: 'Barcelona',
            code: 'S'
        },
        {
            name: 'Liverpool',
            code: 'E'
        },
        {
            name: 'Bayern Munich',
            code: 'G'
        },
        {
            name: 'Manchester City',
            code: 'E'
        },
        {
            name: 'Juventus',
            code: 'I'
        },
        {
            name: 'Paris Saint Germain',
            code: 'F'
        },
        {
            name: 'Benfica',
            code: 'P'
        }
    ],
    pot2: [
        {
            name: 'Borussia Dortmund',
            code: 'G'
        },
        {
            name: 'Porto',
            code: 'P'
        },
        {
            name: 'Atletico Madrid',
            code: 'S'
        },
        {
            name: 'Ajax',
            code: 'N'
        },
        {
            name: 'Chelsea',
            code: 'E'
        },
        {
            name: 'Napoli',
            code: 'I'
        },
        {
            name: 'Tottenham Hotspurs',
            code: 'E'
        },
        {
            name: 'Inter Milan',
            code: 'I'
        }
    ],
    pot3: [
        {
            name: 'Sevilla',
            code: 'S'
        },
        {
            name: 'Galatasaray',
            code: 'T'
        },
        {
            name: 'Lyon',
            code: 'F'
        },
        {
            name: 'AC Milan',
            code: 'I'
        },
        {
            name: 'Arsenal',
            code: 'E'
        },
        {
            name: 'CSKA Moskow',
            code: 'R'
        },
        {
            name: 'PSV Eindhoven',
            code: 'N'
        },
        {
            name: 'Valencia',
            code: 'S'
        }
    ],
    pot4: [
        {
            name: 'Manchester United',
            code: 'E'
        },
        {
            name: 'Club Brugge',
            code: 'B'
        },
        {
            name: 'Olympiacos',
            code: 'T'
        },
        {
            name: 'Shakhtar Donetsk',
            code: 'U'
        },
        {
            name: 'Zenit',
            code: 'R'
        },
        {
            name: 'RB Leipzieg',
            code: 'G'
        },
        {
            name: 'Losc Lille',
            code: 'F'
        },
        {
            name: 'Bayer Leverkusen',
            code: 'G'
        }
    ]
};


const random = myArray => {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

const remove = (myArray, item) => {
    return myArray.filter(team => team.name !== item.name);
}

export const generateGroups = () => { 
    let doIterations = true;
    let iterationCount = 1;
    let finalGroup = [];

    while (doIterations) {

        let pt1 = teamPotData.pot1;
        let pt2 = teamPotData.pot2;
        let pt3 = teamPotData.pot3;
        let pt4 = teamPotData.pot4;

        const groupHead = ['A','B','C','D','E','F','G','H'];
        const group = [];
        for (let i = 0; i < 5; i++) {
            let groupInternal = [];
            for (let j = 0; j < 8; j++) {
                groupInternal.push('SS');
            }
            group.push(groupInternal);
        }

        let groupCounter = 0;

        for (let i = 0; i < 8; i++) {
            
            // group initializer
            let teamCodes = ['$','$','$','$'];
            let groupTeams = ['ss','ss','ss','ss'];
            let potFillCheck = false;

            // from pot1 filling
            let potRNDTeam = random(pt1);
            let rndTeamCode = potRNDTeam.code;
            let rndTeamName = potRNDTeam.name;
            
            pt1 = remove(pt1, potRNDTeam);
            
            groupTeams[0] = rndTeamName;
            teamCodes[0] = rndTeamCode;
            
            //from pot2 filling
            let loopIterator = 0;
            while(loopIterator <= 30) {
                potRNDTeam = random(pt2);
                rndTeamCode = potRNDTeam.code;
                if(rndTeamCode !== teamCodes[0] || loopIterator === 30) {
                    pt2 = remove(pt2, potRNDTeam);
                    rndTeamName = potRNDTeam.name;
                    groupTeams[1] = rndTeamName;
                    teamCodes[1] = rndTeamCode;
                    if (loopIterator >= 30)
                        potFillCheck = true;
                    loopIterator = 35;
                }
                loopIterator++;
            }

            //from pot3 filling
            loopIterator = 0;
            while(loopIterator <= 30) {
                potRNDTeam = random(pt3);
                rndTeamCode = potRNDTeam.code;
                if((rndTeamCode !== teamCodes[0] && rndTeamCode  !== teamCodes[1]) || loopIterator === 30) {
                    pt3 = remove(pt3, potRNDTeam)
                    rndTeamName = potRNDTeam.name;
                    groupTeams[2] = rndTeamName;
                    teamCodes[2] = rndTeamCode;
                    if (loopIterator >= 30)
                        potFillCheck = true;
                    loopIterator = 35;
                }
                loopIterator++;
            }

            //from pot4 filling
            loopIterator = 0;
            while(loopIterator <= 30) {
                potRNDTeam = random(pt4);
                rndTeamCode = potRNDTeam.code;
                if((rndTeamCode !== teamCodes[0] && rndTeamCode !== teamCodes[1] && rndTeamCode !== teamCodes[2]) || loopIterator === 30) {
                    pt4 = remove(pt4, potRNDTeam);
                    rndTeamName = potRNDTeam.name;
                    groupTeams[3] = rndTeamName;
                    teamCodes[3] = rndTeamCode;
                    if (loopIterator >= 30)
                        potFillCheck = true;
                    loopIterator = 35;
                }
                loopIterator++;
            }

            //printing groups at random positions
            group[0][i] = groupHead[i]
            for (let gh = 1; gh < 5; gh++) {
                let gdr = random(groupTeams);
                group[gh][i] = gdr;
                groupTeams = groupTeams.filter(g => g !== gdr);
            }

            if (potFillCheck)
                groupCounter++;

        }

        if(groupCounter !== 0)
            iterationCount++;

        else {
            doIterations = false;
            for (let i = 0; i < 8; i++) {
                let groupInternal = [];
                for (let j = 0; j < 5; j++) {
                    groupInternal.push(group[j][i]);
                }
                finalGroup.push(groupInternal);
            }
        }
    }

    return {
        groups: finalGroup,
        iterations: iterationCount
    };
}