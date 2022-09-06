"use strict";
let renderFriendsList = function () {
    $(".friends-container").empty();
    $(".friends-container").html(info.friendsList);
};
let renderUser = function () {
    $(".user-container").empty();
    //const source = $("#user-template").html()
    //const template = Handlebars.compile(source)
    //const someHTML = template({mainUser})
    //console.log(someHTML)
    //$("#results").append(someHTML)
    $(".user-container").append(`<img id=\"profile-pic\" src=\"${info.mainUser.userImage}\">`);
    $(".user-container").append(`<p1 class=\"user-info\">${info.mainUser.userText}</p1>`);
    renderFriendsList();
};
let renderQuote = function () {
    $(".quote-container").empty();
    $(".quote-container").append(`<p3 id=\"quote\">${info.quote.quote}</p3>`);
};
let renderPoke = function () {
    $(".pokemon-container").empty();
    $(".pokemon-container").append(`<img id=\"pokemon-image\" src=\"${info.poke.pokeImage}\">`);
    $(".pokemon-container").append(`<p4 id=\"pokemon-text\">Favorite Pokemon: ${info.poke.favorite}</p4>`);
};
let renderMeat = function () {
    $(".meat-container").empty();
    $(".meat-container").append(`<p5 class=\"meat-text\">${info.meat}</p5>`);
};
