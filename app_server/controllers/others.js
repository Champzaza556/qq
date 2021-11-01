/* GET 'about' page */
const about = (req, res) => {
  res.render("generic-text", { title: "History of Cryptocurrency" });
};
module.exports = {
  about,
};
