const renderPlayers = function(players: JSON): void{
    $("#players-container").empty()
    const rawtemplate = $("#playersTemplate").html()
    const template = Handlebars.compile(rawtemplate)
    const HTML = template({players: players})
    $("#players-container").append(HTML)
}

const renderStats = function(personId: string, playerStats: JSON){
    const rawtemplate = $("#statsTemplate").html()
    const template = Handlebars.compile(rawtemplate)
    const HTML = template(playerStats)
    $(`#${personId}-stats-display`).html("")
    $(`#${personId}-stats-display`).append(HTML)
    $(`#${personId}-stats-display`).toggleClass("show")
}
