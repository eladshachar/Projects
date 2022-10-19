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
const getPlayers = function (team, year, activeFilter) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        if (activeFilter) {
            data = yield $.get(`http://127.0.0.1:8000/get-players/${team}/${year}/active=true`);
        }
        else {
            data = yield $.get(`http://127.0.0.1:8000/get-players/${team}/${year}/active=false`);
        }
        return data;
    });
};
const addPlayer = function (personId) {
    return __awaiter(this, void 0, void 0, function* () {
        let players;
        players = yield $.ajax({
            url: `http://127.0.0.1:8000/dream-team/add/${personId}`,
            type: 'PUT',
            success: function (result) {
                return result;
            }
        });
        return players;
    });
};
const removePlayer = function (personId) {
    return __awaiter(this, void 0, void 0, function* () {
        let players;
        players = yield $.ajax({
            url: `http://127.0.0.1:8000/dream-team/delete/${personId}`,
            type: 'DELETE',
            success: function (result) {
                return result;
            }
        });
        return players;
    });
};
const getDreamTeam = function () {
    return __awaiter(this, void 0, void 0, function* () {
        let players;
        players = yield $.get('http://127.0.0.1:8000/dream-team');
        return players;
    });
};
const getStats = function (personId) {
    return __awaiter(this, void 0, void 0, function* () {
        let playerStats;
        playerStats = yield $.get(`http://127.0.0.1:8000/stats/${personId}`);
        return playerStats;
    });
};
