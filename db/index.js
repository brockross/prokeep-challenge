const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_CONN, { useNewUrlParser: true });

const userSchema = mongoose.Schema({
  email: String,
  password: String
});

let User = mongoose.model("User", userSchema);

let getUser = (userData, callback) => {
  let email = userData.email;
  let password = userData.password;

  let query = User.find({
    email,
    password
  });

  query.exec((err, docs) => {
    if (err) {
      console.log("error querying mongodb: ", err);
      callback(err, null);
    } else {
      console.log("mongodb query successful!");
      callback(null, docs);
    }
  });
};

module.exports.getUser = getUser;
