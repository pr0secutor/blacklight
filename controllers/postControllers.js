const db = require("../config/db");

exports.getCurrentWeek = async (req, res, next) => {
  const query =
    "SELECT * FROM score WHERE YEAR(timestamp) = YEAR(CURDATE()) AND WEEK(timestamp) = WEEK(CURDATE()) ORDER BY score DESC LIMIT 200";

  db.query(query, (err, result, field) => {
    if (err) throw err;
    res.send(result);
  });
};

exports.getLastWeek = async (req, res, next) => {
  const query =
    "SELECT * FROM score WHERE YEAR(timestamp) = YEAR(CURDATE()) AND WEEK(timestamp,1) = WEEK(CURDATE(),1) - 1 ORDER BY score DESC LIMIT 200";

  db.query(query, (err, result, field) => {
    if (err) throw err;
    res.send(result);
  });
};
