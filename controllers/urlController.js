const shortid = require("shortid");
const URL = require("../models/url");

async function getShortId(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ message: "required url" });
  }

  const shortId = shortid();

  await URL.create({
    shortId: shortId,
    redirectUrl: req.body.url,
    visitHistory: [],
    generatedBy: { generatorId: req.user._id, generatorName: req.user.name },
  });

  return res.render("home", { id: shortId, url: body.url });
}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOne({ shortId });
  return res.json({
    totalClicks: entry.visitHistory.length,
    analytics: entry.visitHistory,
  });
}

async function deleteEntry(req, res) {
  const deleteId = req.params.shortId;

  const entry = await URL.deleteOne({ shortId: deleteId });
  return res.redirect("/");
}
module.exports = { getShortId, getAnalytics, deleteEntry };
