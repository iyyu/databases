var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let request = 'SELECT messages.msgid, messages.text, messages.roomname, messages.userid FROM messages ORDER BY messages.msgid DESC';
      db.query(request, (err, results) => { callback(err, results); });
    }, // a function which produces all the messages
    post: function (params, callback) {
      let request = 'INSERT INTO messages(text, userid, roomname) VALUES (?, (SELECT userid FROM users WHERE username = ? limit 1), ?)';
      // limit 1 is optional, but it just gives you the first one found
      db.query(request, (err, results) => { callback(err, results); });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      let request = 'SELECT * FROM users';
      db.query(request, (err, results) => { callback(err, results); });
    },
    post: function (params, callback) {
      // calling it 'params' seems to be the convention
      let request = 'INSERT INTO users(username) VALUES (?)';
      //the '?' is an argument to the query function itself to provide parameters, hence the params argument
      //userid auto-increments in the table
      db.query(request, params, (err, results) => { callback(err, results); });
    }
  }
};

