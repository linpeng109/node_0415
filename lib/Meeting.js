/**
 * Created by Mars on 2016/5/5.
 */

module.exports = function (mongoose) {
  var MeetingSchema = new mongoose.Schema({
    subject: {type: String, require: true},
    users: [{
      userName: String,
      eMail: String,
      Mobile: String,
      WeiXing: String
    }],
    room: {type: String, require: true},
    begin: {type: Date, require: true},
    end: {type: Date, require: true},
    reports: [{type: mongoose.Types.ObjectId, ref: 'Report'}]
  });
  var Meeting = mongoose.module(document, MeetingSchema);
  Meeting.insert = function (meeting, callback) {
    Meeting.save(meeting, function (err, filename, namespaces) {
      callback(err, filename, namespaces);
    });
  };
  Meeting.delete = function (meeting, callback) {

  };
  Meeting.update = function (meeting, callback) {

  };
  Meeting.findAll = function (callback) {

  };
  Meeting.findByDate = function (date, callback) {

  };
  Meeting.findByUser = function (user, callback) {

  };
  Meeting.findByMeeting = function (meeting, callback) {

  };
  Meeting.findByRoom = function (room, callback) {

  };
  return Meeting;
};
