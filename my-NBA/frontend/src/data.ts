const getPlayers = async function(team: string, year: string, activeFilter: boolean){
    let data: JSON
    
    if(activeFilter){
        data = await $.get(`http://127.0.0.1:8000/get-players/${team}/${year}/active=true`)
    }
    else{
        data = await $.get(`http://127.0.0.1:8000/get-players/${team}/${year}/active=false`)
    }
    
    return data
}

const addPlayer = async function(personId:string) {
    let players: JSON

    players = await $.ajax({
        url: `http://127.0.0.1:8000/dream-team/add/${personId}`,
        type: 'PUT',
        success: function(result) {
            return result
        }
    });

    return players
}

const removePlayer = async function(personId:string) {
    let players: JSON

    players = await $.ajax({
        url: `http://127.0.0.1:8000/dream-team/delete/${personId}`,
        type: 'DELETE',
        success: function(result) {
            return result
        }
    });

    return players
}

const getDreamTeam = async function() {
    let players: JSON

    players = await $.get('http://127.0.0.1:8000/dream-team')

    return players
}

const getStats = async function(personId:string){
    let playerStats: JSON
    
    playerStats = await $.get(`http://127.0.0.1:8000/stats/${personId}`)

    return playerStats
}