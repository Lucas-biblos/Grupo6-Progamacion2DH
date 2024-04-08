const controller = {
  index: function (req, res) {
    res.render("index", { title: "Express" });
  },
};

module.exports = controller;
