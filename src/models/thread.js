import uuidv4 from 'uuid/v4'

module.exports = class Thread {
  constructor(subject, posts) {
    this.subject = subject;
    this.posts = posts;
    this.id = uuidv4();
  };
};