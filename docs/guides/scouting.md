---
description: Scouting
---

# Scouting
Our scouting part is dedicated to fetch players, teams, matches information. For that, we have 2 main sources : `FACEIT` and `Blizzard`. 

## 🚀 Description

### 🥊 FACEIT
We use [FACEIT API](https://developers.faceit.com/) to fetch data from the platform. We are able to get players, teams, and matches information. 
:::warning
Some of the data provided by FACEIT seems not to be accurate (results in player history for example), so we have to be careful with the data we get from them.
:::
### ❄️ Blizzard
To fetch data from Blizzard, we use the [OverFast API](https://overfast-api.tekrop.fr/) provided by [TeKrop](https://github.com/TeKrop).

Blizzard let us get some players information that have a **public career**. When the data is available we can get stats about the players and its heroes, but also about the winrate and the number of games played on the different roles. I recommend to check out the [OverFast documentation](https://overfast-api.tekrop.fr/) which is really well done.
