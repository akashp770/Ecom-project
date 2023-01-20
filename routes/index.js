var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Aakash Patil",
    subtitle: "Welcome to my ",
  });
});

router.get("/tutorials", function (req, res, next) {
  const courseName = req.query.course;
  let courseTitle = "AP Tutorials - " + courseName;
  res.render("index", {
    title: courseTitle,
    subtitle: "Welcome to my " + courseName + " course",
  });
});
module.exports = router;
