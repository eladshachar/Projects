let dreamTeamDisplay: boolean = false

$("#get-team").on("click", async function(){   
    let team = $("#team").val()
    let year = $("#year").val()
    
    let checkboxElement = $('#active') as unknown
    let checkbox = checkboxElement as HTMLInputElement
    let filterActive = checkbox.checked

    let playersData = await getPlayers(team, year, filterActive)
    renderPlayers(playersData)
    dreamTeamDisplay = false
    console.log(playersData)
})

$("#display-dream-team").on("click", async function() {
    let dreamTeam = await getDreamTeam()
    renderPlayers(dreamTeam)
    dreamTeamDisplay = true
})

$("body").on("click", ".add-button", async function() {
    let personId = $(this).closest('.player').attr('id')
    console.log(personId)
    let players = await addPlayer(personId)
    renderPlayers(players)
})

$("body").on("click", ".delete-button", async function() {
    let personId = $(this).closest('.player').attr('id')
    console.log(personId)
    let players = await removePlayer(personId)

    if(dreamTeamDisplay){
        players = await getDreamTeam()
    }

    renderPlayers(players)
})

$("body").on("click", ".statistics", async function() {
   const personId = $(this).closest('.player').attr('id')
   let playerStats = await getStats(personId)
   renderStats(personId ,playerStats)
   console.log(playerStats)
}