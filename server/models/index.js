var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let request = 'SELECT * FROM messages';
      db.query(request, (err, results) => { callback(err, results); });
    }, // a function which produces all the messages
    post: function (callback) {
      let request = 'INSERT INTO messages(text, user, roomname) VALUE (?, (SELECT userid FROM users WHERE username = ? limit 1), ?)';
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let request = 'SELECT * FROM users';
      db.query(request, (err, results) => { callback(err, results); });
    },
    post: function (params, callback) {
      let request = 'INSERT INTO users(username) values (?)'; //userid auto-increments in the table
      db.query(request, params,(err, results) => { callback(err, results); });
    }
  }
};

