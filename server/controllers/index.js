var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) { console.log('error getting messages'); }
        res.JSON(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let params = [req.body.text, req.body.username, req.body.roomname];
      // per mysql module, the params needs to be an array

      models.messages.post(params, (err, data) => {
        if (err) { console.log('error posting message'); }
        res.sendStatus(201);
        //201 for the creation of the row in table
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if (err) { console.log('error getting users'); }
        res.JSON(data);
      });
    },
    post: function (req, res) {
      let params = [req.body.username];
      models.users.post((err, data) => {
        if (err) { console.log('error posting user'); }
        res.sendStatus(201);
        //201 for the creation of the row in table
      });
    }
  }
};

