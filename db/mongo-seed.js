import mongoose from 'mongoose';
import Standing from '../models/standing.js';
import Team from '../models/teams.js';
import Player from '../models/players.js'
import db from './connection.js'
import teamRawData from '../data/teams.json' assert {type: 'json'}
import playerRawData from '../data/players.json' assert {type: 'json'}
import standingRawData from '../data/data.json' assert {type: 'json'}

//Teams Data
let teamData = teamRawData.map(team => {
    return {
    name : team.name,
    code : team.code,
    city : team.city
    }
})

let makeTeams = async() => {
    try {
        await Team.deleteMany()
        await Team.create(teamData)
        console.log('Team created and seeded')
        // mongoose.connection.close()
    }
    catch(error) {
        console.error('Error: ', error)
    }
}

makeTeams()


// Players Data
let playerData = playerRawData.map(player => {
    return {
    firstname : player.firstname,
    lastname : player.lastname,
    college : player.college
    }
})

let makePlayers = async() => {
    try {
        await Player.deleteMany()
        await Player.create(playerData)
        console.log('Player created and seeded')
        // mongoose.connection.close()
    }
    catch(error) {
        console.error('Error: ', error)
    }
}

makePlayers()


//Standings Data
let standingData = standingRawData.map(standing => {
    return {
    season : standing.season,
    team : standing.team.name,
    win : standing.win.total,
    loss : standing.loss.total
    }
})

let makeStandings = async() => {
    try {
        await Standing.deleteMany()
        await Standing.create(standingData)
        console.log('Standings created and seeded')
        // mongoose.connection.close()
    }
    catch(error) {
        console.error('Error: ', error)
    }
}

makeStandings()




