import uuidv4 from 'uuid/v4'

module.exports = class Board {
  constructor(name, threads) {
    this.name = name;
    this.threads = threads;
    this.id = uuidv4();
  };
};