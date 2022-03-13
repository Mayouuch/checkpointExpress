
let day = new Date().getDay();
let hour = new Date().getHours();

function work(req, res, next) {
  if (day > 0 && day < 6 && hour > 9 && hour < 23) {
    next();
  } else {
    res.send("sorrrry,this app out of time ");
  }
}

module.exports = work;