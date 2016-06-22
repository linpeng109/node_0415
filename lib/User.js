/**
 * Created by Mars on 2016/5/4.
 */
module.exports = function (mongoose) {
  const userSchema = mongoose.Schema({
    userName: {type: String, unique: true},
    passWord: String,
    department: String,
    eMail: String,
    Mobile: String,
    WeiXing: String
  });
  
  var User = mongoose.model('user', userSchema);

  User.insert = function (user, callback) {
    user.save(callback);
  };
  User.update = function (callback) {

  };
  User.delete = function (callback) {

  };
  User.findAll = function (callback) {
    var query = User.find({});
    query.exec(callback);
  };
  User.findByDepartment = function (department, callback) {
    var query = User.find({});
    query.where('department').gte('tech');
    query.exec(callback);
  };
  User.findById = function (callback) {

  }
  return User;
};
