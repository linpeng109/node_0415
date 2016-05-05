/**
 * Created by Mars on 2016/5/5.
 */


module.exports = function (mongoose) {

  var ReportSchema = new mongoose.Schema({
    ower: String,
    subject: String,
    content: String,
    meeting: {type: mongoose.Types.ObjectId, ref: 'Meeting'},
    file: {filename: String, type: String, path: String}
  });
  var Report = mongoose.module(document, ReportSchema);
  Report.insert = function (callback) {

  };
  Report.update = function (callback) {

  };
  Report.delete = function (callback) {

  };
  Report.findAll = function (callback) {

  };
  Report.findByMeeting = function (meeting, callback) {

  };
  Report.findByOwer = function (ower, callback) {

  };
  return Report;
};
