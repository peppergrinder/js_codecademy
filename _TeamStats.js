const team = {
    _players: [
      {firstName: 'Lance', lastName: 'Mountain', age: 59},
      {firstName: 'Bucky', lastName: 'Lasek', age: 50},
      {firstName: 'Mike', lastName: 'McGill', age: 59}
    ],
    _games: [
      {opponent: 'DirtySouth', teamPoints: 4, opponentPoints: 1},
      {opponent: 'Frenchies', teamPoints: 5, opponentPoints: 2},
      {opponent: 'Beaners', teamPoints: 3, opponentPoints: 3}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  console.log(team.games);