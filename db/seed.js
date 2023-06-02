import axios from 'axios';
import fs from 'fs';


const teamOptions = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/teams?',
    headers: {
        'X-RapidAPI-Key': '12bd3cc3bbmsh52036825cde08aep1e1b77jsnf376ecc4fdf3',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
};

function writeTeamDataToFile(teams) {
    fs.writeFile('teamData.json', JSON.stringify(teams), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Team data has been written to teamData.json');
    });
}

// writeTeamDataToFile()


export const fetchTeamsFromAPI = async () => {
    try {
        const teamResponse = await axios.request(teamOptions);
        return teamResponse.data;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to be caught in the caller
    }
}

let parsedTeamData = {}
fetchTeamsFromAPI()
    .then((TEST) => {
        const teamData = TEST.response.map(team => {
            const newTeam = {}
            newTeam.name = team.name;
            newTeam.code = team.code;
            newTeam.conference = team.leagues.standard;
            return newTeam;
        });
        return teamData;
    })
    .then((data) => {
        fs.writeFile('./data/teams.json', JSON.stringify(data), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Successfully written to JSON');
        });
    })
    .catch((error) => console.error(error))
    .finally(() => {
        console.log(parsedTeamData)
    });







  // To do: Standing data

  const standingOptions = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/standings',
    params: {
      league: 'standard',
      season: '2021'
    },
    headers: {
      'X-RapidAPI-Key': '12bd3cc3bbmsh52036825cde08aep1e1b77jsnf376ecc4fdf3',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  
  try {
      const standingResponse = await axios.request(standingOptions);
      console.log(standingResponse.data);
  } catch (error) {
      console.error(error);
  }


  function writeStandingDataToFile(standings) {
    fs.writeFile('standingData.json', JSON.stringify(standings), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Standings data has been written to standingData.json');
    });
}


export const fetchStandingsFromAPI = async () => {
    try {
        const standingResponse = await axios.request(standingOptions);
        return standingResponse.data;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to be caught in the caller
    }
}

let parsedStandingData = {}
fetchStandingsFromAPI()
.then((stand) => {
const standingData = stand.response.map(standing => {
    const newStanding = {}
    newStanding.season = standing.season
    newStanding.team = standing.team
    newStanding.conference = standing.conference
    return newStanding
})
return standingData
})
.then((dataTwo) => {
    fs.writeFile('./data/data.json', JSON.stringify(dataTwo), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Successfully written to JSON');
    });
})
.catch((error) => console.error(error))
.finally(() => {
    console.log(parsedStandingData)
});




//Players Data

const playerOptions = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/players',
    params: {
        team: '1',
        season: '2021'
      },
    headers: {
      'X-RapidAPI-Key': '12bd3cc3bbmsh52036825cde08aep1e1b77jsnf376ecc4fdf3',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  
  try {
      const playerResponse = await axios.request(playerOptions);
      console.log(playerResponse.data);
  } catch (error) {
      console.error(error);
  }

  function writePlayerDataToFile(players) {
    fs.writeFile('playerData.json', JSON.stringify(players), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Players data has been written to playerData.json');
    });
}

export const fetchPlayersFromAPI = async () => {
    try {
        const playerResponse = await axios.request(playerOptions);
        return playerResponse.data;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to be caught in the caller
    }
}

let parsedPlayerData = {}
fetchPlayersFromAPI()
.then((player) => {
const playerData = player.response.map(player => {
    const newPlayer = {}
    newPlayer.name = player.name
    newPlayer.team = player.team
    newPlayer.season = player.season
    return newPlayer
})
return playerData
})
.then((dataPlay) => {
    fs.writeFile('./data/players.json', JSON.stringify(dataPlay), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Successfully written to JSON');
    });
})
.catch((error) => console.error(error))
.finally(() => {
    console.log(parsedPlayerData)
});