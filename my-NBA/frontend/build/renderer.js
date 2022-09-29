"use strict";
const renderPlayers = function (players) {
    $("#players-container").empty();
    const rawtemplate = $("#playersTemplate").html();
    const template = Handlebars.compile(rawtemplate);
    const HTML = template({ players: players });
    $("#players-container").append(HTML);
};
