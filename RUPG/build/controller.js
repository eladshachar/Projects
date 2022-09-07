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
let currentProfile = new Info;
$("#button").on("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        let info = new Info;
        getUsers(info).then(() => renderUser(info));
        getQuote(info).then(() => renderQuote(info));
        getPoke(info).then(() => renderPoke(info));
        getMeat(info).then(() => renderMeat(info));
        renderSavedUsers();
        currentProfile = info;
    });
});
$("#save-user").on("click", function () {
    window.localStorage.setItem(currentProfile.mainUser.userName, JSON.stringify(currentProfile));
    renderSavedUsers();
});
$("#load-user").on("click", function () {
    let select = (document.getElementById("saved-users"));
    let key = select.options[select.selectedIndex].text;
    currentProfile = JSON.parse(window.localStorage.getItem(key));
    renderUser(currentProfile);
    renderQuote(currentProfile);
    renderPoke(currentProfile);
    renderMeat(currentProfile);
});
