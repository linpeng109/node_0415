/**
 * Created by Mars on 2016/5/5.
 */
module.exports = function (mongoose) {
  const ReportSchema = mongoose.Schema({
    ower: String,
    subject: String,
    content: String,
    meeting: {type: mongoose.Types.ObjectId, ref: 'Meeting'},
    file: {filename: String, type: String, path: String}
  });
  const Report = mongoose.module('report', ReportSchema);
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
