var users = require('./users');
var moment = require('moment');

function getUserInbox(user, callback) {
	users.findByEmail(user, function (err, user) {
		if (err) {
			return callback(err);
		}

		var inboxLastViewed = user.inboxLastViewed;
		if (!inboxLastViewed) {
			return callback (null, {data: []});
		}
	});
}

function viewedByUser(user, callback) {
	var current = moment().toDate();
	users.update(user, {inboxLastViewed: current }, function (err, user) {
		if (err) {
			return callback(err);
		}

		callback (null, current);
	});
}

module.exports = {
	getUserInbox: getUserInbox,
	viewedByUser: viewedByUser
};