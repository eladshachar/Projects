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
class Info {
    constructor() {
        this.friendsList = "";
        this.mainUser = {
            userImage: "",
            userTown: "",
            userName: ""
        };
        this.poke = {
            pokeImage: "",
            favorite: ""
        };
        this.quote = "";
        this.meat = "";
    }
}
const getUsers = function (info) {
    return __awaiter(this, void 0, void 0, function* () {
        yield $.ajax({
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            success: function (data) {
                info.mainUser.userImage = data.results[0].picture.thumbnail;
                info.mainUser.userTown = `${data.results[0].location.city}, ${data.results[0].location.state}`;
                info.mainUser.userName = `${data.results[0].name.first} ${data.results[0].name.last}`;
                info.friendsList = "";
                for (let i = 1; i < 7; i++) {
                    info.friendsList += `<br>${data.results[i].name.first} ${data.results[i].name.last}`;
                }
            }
        });
        console.log(info.mainUser.userImage);
    });
};
const getQuote = function (info) {
    return __awaiter(this, void 0, void 0, function* () {
        info.quote = yield $.get('https://api.kanye.rest');
        console.log(info.quote);
    });
};
const getPoke = function (info) {
    return __awaiter(this, void 0, void 0, function* () {
        let random = Math.floor(Math.random() * 949);
        yield $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${random}`,
            dataType: 'json',
            success: function (data) {
                info.poke.favorite = data.name;
                info.poke.pokeImage = data.sprites.front_default;
                console.log(data);
            }
        });
    });
};
const getMeat = function (info) {
    return __awaiter(this, void 0, void 0, function* () {
        info.meat = yield $.get('https://baconipsum.com/api/?type=all-meat&paras=5&format=text');
    });
};
