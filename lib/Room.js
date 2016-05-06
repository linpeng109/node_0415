/**
 * Created by Mars on 2016/5/5.
 */
module.exports = function (mongoose) {
  const RoomSchema = mongoose.Schema({
    name: {type: String, unique: true},
    descript: String,
    status: String
  });
  const Room = mongoose.module('room', RoomSchema);
  Room.findAll = function (callback) {

  };
  Room.findByStatus = function (status, callback) {

  };
  return Room;
};
