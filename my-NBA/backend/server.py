from dis import dis
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import json
import requests
import uvicorn
from collections import abc

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

teams_id = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

cached_players = dict()
displayed_players = json

@app.get("/get-players/{team}/{year}/active={filter_active}")
async def get_players(team, year, filter_active: bool = False):
    
    team_id = teams_id[team]
    response = requests.get(f'https://data.nba.net/data/10s/prod/v1/{year}/players.json')
    players_raw = response.json()["league"]["standard"]
    filtered_players = [player for player in players_raw if player["teamId"] == team_id]

    if filter_active == 'true':
        filtered_players = [player for player in filtered_players if player["isActive"] == True]

    global cached_players
    global displayed_players

    for player in filtered_players:
        personId = player['personId']

        if personId not in cached_players:
            cached_players[personId] = player
            player['dreamTeamMember'] = False
        else:
            player['dreamTeamMember'] = cached_players[personId]['dreamTeamMember']


    displayed_players = filtered_players

    return filtered_players


@app.get("/dream-team/add/{personId}")
async def add_player(personId):
    global cached_players
    global displayed_players

    cached_players[personId]['dreamTeamMember'] = True

    for player in displayed_players:
        if player['personId'] == personId:
            player['dreamTeamMember'] = True
            break

    return displayed_players

@app.get("/dream-team/delete/{personId}")
async def delete_player(personId):
    global cached_players
    global displayed_players

    cached_players[personId]['dreamTeamMember'] = False

    for player in displayed_players:
        if player['personId'] == personId:
            player['dreamTeamMember'] = False
            break

    return displayed_players


@app.get("/dream-team")
async def display_dream_team():
    global cached_players
    global displayed_players

    dream_team = dict()

    for personId in cached_players:
        if cached_players[personId]['dreamTeamMember'] == True:
            dream_team[personId] = cached_players[personId]

    displayed_players = list(dream_team.values())

    #displayed_players = [player for player in displayed_players if player['dreamTeamMember'] == True]

    return displayed_players


if __name__ == "__main__":
    uvicorn.run('server: app', host="0.0.0.0", port=8000, reload=True)