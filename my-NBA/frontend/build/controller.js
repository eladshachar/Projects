"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let dreamTeamDisplay = false;
$("#get-team").on("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let team = $("#team").val();
        let year = $("#year").val();
        let checkboxElement = $('#active');
        let checkbox = checkboxElement;
        let filterActive = checkbox.checked;
        let playersData = yield getPlayers(team, year, filterActive);
        renderPlayers(playersData);
        dreamTeamDisplay = false;
        console.log(playersData);
    });
});
$("#display-dream-team").on("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let dreamTeam = yield getDreamTeam();
        renderPlayers(dreamTeam);
        dreamTeamDisplay = true;
    });
});
$("body").on("click", ".add-button", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let personId = $(this).closest('.player').attr('id');
        console.log(personId);
        let players = yield addPlayer(personId);
        renderPlayers(players);
    });
});
$("body").on("click", ".delete-button", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let personId = $(this).closest('.player').attr('id');
        console.log(personId);
        let players = yield removePlayer(personId);
        renderPlayers(players);
    });
});
