/**
 * Created by Mars on 2016/5/5.
 */
module.exports = function (mongoose) {

  var RoomSchema = mongoose.Schema({
    name: {type: String, unique: true},
    descript: String,
    status: String
  });
  var Room = mongoose.module(document, RoomSchema);
  Room.findAll = function (callback) {

  };
  Room.findByStatus = function (status, callback) {

  };
  return Room;
};
