import uuidv4 from 'uuid/v4'

module.exports = class Posts {
  constructor(body, url) {
    this.body = body;
    this.image = url;
    this.id = uuidv4();
  };
};