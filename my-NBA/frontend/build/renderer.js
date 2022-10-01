"use strict";
const renderPlayers = function (players) {
    $("#players-container").empty();
    const rawtemplate = $("#playersTemplate").html();
    const template = Handlebars.compile(rawtemplate);
    const HTML = template({ players: players });
    $("#players-container").append(HTML);
};
const renderStats = function (personId, playerStats) {
    const rawtemplate = $("#statsTemplate").html();
    const template = Handlebars.compile(rawtemplate);
    const HTML = template(playerStats);
    $(`#${personId}-stats`).html("");
    $(`#${personId}-stats`).append(HTML);
    $(`#${personId}-stats`).toggleClass("show");
};
