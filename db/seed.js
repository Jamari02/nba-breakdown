import mongoose from 'mongoose';
import axios from 'axios';
import fs from 'fs';
import db from './connection.js'
import * as dotenv from 'dotenv'

dotenv.config()
let apiKey = process.env.API_KEY


//Team Data 

const teamOptions = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/teams?',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
};

function writeTeamDataToFile(teams) {
    fs.writeFile('./data/teams.json', JSON.stringify(teams), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Team data has been written to teams.json');
    });
}

export const fetchTeamsFromAPI = async () => {
    try {
        const teamResponse = await axios.request(teamOptions);
        return teamResponse.data;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to be caught in the caller
    }
}

let parsedTeamData = []
fetchTeamsFromAPI()
  .then((response) => {
    return response;
  })
  .then((teams) => {
    teams.response.forEach((team) => {
        parsedTeamData.push(team);
    })
    writeTeamDataToFile(teams); // Pass the teams data to the function
  })
  .then(() => {
    console.log('Successfully written to JSON');
  })
  .catch((error) => console.error(error))
  .finally(() => {
    console.log(parsedTeamData);
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
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  
  function writeStandingDataToFile(standing) {
    fs.writeFile('./data/data.json', JSON.stringify(standing), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Standings data has been written to data.json');
    });
}
 
export const fetchStandingsFromAPI = async () => {
    try {
        const standingResponse = await axios.request(standingOptions);
        return standingResponse.data.response;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to be caught in the caller
    }
}

let parsedStandingData = []
fetchStandingsFromAPI()
.then((response) => {
    // console.log(response)
    return response;
  })
  .then((response) => {
    console.log(response[0].streak)
    response.forEach((stand) => {
      return parsedStandingData.push(stand); 

    });
    writeStandingDataToFile(response); 
  })
  
  .then(() => {
    console.log('Successfully added to data.json');
  })
  .catch((error) => console.error(error))
  .finally(() => {
    console.log('Parsed Standing Data:', parsedStandingData);
  });


// //Players Data

const playerOptions = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/players',
    params: {
        team: '1',
        season: '2021'
      },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
};

function writePlayerDataToFile(players) {
  fs.writeFile('./data/players.json', JSON.stringify(players), (err) => {
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

let parsedPlayerData = []
fetchPlayersFromAPI()
  .then((response) => {
     return response
    })
   .then((players) => {
    players.response.forEach((player) => {
        parsedPlayerData.push(player);
    })
    writePlayerDataToFile(players); // Pass the teams data to the function
  })
  .then(() => {
    console.log('Successfully written to JSON');
  })
  .catch((error) => console.error(error))
  .finally(() => {
    console.log(parsedPlayerData);
  });




