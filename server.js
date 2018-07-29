const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("/api/sharks", function(req, res) {
  console.log('hit /api/sharks');
  res.json([
    {type: "Whale Shark", length: "9.0m", image: "https://gulfnews.com/polopoly_fs/1.1679171!image/3382532533.gif_gen/derivatives/landscape_422/3382532533.gif"}, 
    {type: "tiger Shark", length: "5.5m", image: "https://gulfnews.com/polopoly_fs/1.1679170!image/4285458110.gif_gen/derivatives/landscape_422/4285458110.gif"},
    {type: "Great hammerhead", length: "3.5m", image: "https://gulfnews.com/polopoly_fs/1.1679160!image/1233273565.gif_gen/derivatives/landscape_422/1233273565.gif"}

  ]);
  res.end();
})
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
