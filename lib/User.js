/**
 * Created by Mars on 2016/5/4.
 */
module.exports = function (mongoose) {
  var UserSchema = mongoose.Schema({
    userName: {type: String, unique: true},
    passWord: String,
    department: String,
    eMail: String,
    Mobile: String,
    WeiXing: String
  });
  var User = mongoose.model('meeting', UserSchema);

  User.insert = function (user, callback) {
    user.save(function (err, result) {
      callback(err, result);
    });
  };
  User.update = function (callback) {

  };
  User.delete = function (callback) {

  };
  User.findByDepartment = function (department, callback) {

  };
  return User;
};
