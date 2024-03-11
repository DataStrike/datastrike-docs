---
description: Analysis
---

# Analysis
The analysis feature of Datastrike.

## 🚀 Description

### 🏭 Setup
The analysis feature is dedicated to parse and analyze log files generated by the scrim workshop code : `DKEEH` from [Scrimtime](https://workshop.codes/DKEEH).
To enable this feature, you need to follow these very simple steps:
- Use scrim code : `DKEEH`.
- `Enable workshop inspector` and `Enable workshop inspector log file` should be on `ON` in your settings.
- `Enable log generator` should be on `ON` in the lobby settings, in `Workshop inspector settings`.
- By default, you'll find your logs in the "Overwatch" folder (`C:\Users\YourName\Documents\Overwatch\Workshop`).
- Import the logs file directly in our tool (you can import multiple files at once).

Once this is done, when you'll play your scrims (and if you play with these settings...), you'll be able to see the logs files and import them in our tool!

### 🤔 How does it work?
When we receive the logs files, we parse and analyze them to retrieve the data we find interesting. The data is processed by a [Python program](https://github.com/DataStrike/datastrike-python-processing) and then persisted in our database. The data is then provided to the user with different visualizations and statistics.

### 📊 Visualizations
Different visualizations are available. Here's a list of the main ones:
#### Timeline
The timeline is used to have a quick overview of the game. It shows the different events that happened during the game such as heroes swaps, kills & deaths, ultimates used, etc.
#### Comps
The comps visualization is used to see the different compositions used by the teams during the game. It shows the heroes played by each team with the times they were played. It also highlight the diff between 2 comps when a swap occurs.
#### Fights
Fights section is dedicated to show the different fights that happened during the game. Since we can't really define when a fight happens, we had to create our own algorithm to detect them. The algorithm is as follows :
```text
if (kill OR ultimate):
    startFight()
    foreach kill OR ultimate:
        if (time - lastKillTime < 10seconds):
            addKillToFight()
        else:
            endFight()
```
Once the fights are detected, we display them with the 2 events categories (kills & ultimates).
#### Graph
Our graph section is dedicated to show the different stats and compare them with graphics. We provide the list of the players and the list of the stats given by the logs. You can select / unselect any stats or players and compare them with our dynamic graph.
#### Rounds
Last but not least: the rounds section. This section is dedicated to show the different rounds that happened during the game. This part is very "raw" since we didn't want to deny the user the possibility to see the raw data. We display the different rounds with the different events that happened during the round in classic tables.