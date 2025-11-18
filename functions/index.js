const functions = require("firebase-functions");
const cors = require("cors")({origin: true});
const fetch = require("node-fetch");

exports.apiProxy = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      // 경로에서 /api/v1 제거
      const apiPath = req.path.replace(/^\/api\/v1/, "");

      // 쿼리 문자열 가져오기
      const queryString = req.url.split("?")[1] || "";

      // backend 서버 URL
      const url = `http://35.239.9.84:7000/api/v1${apiPath}${queryString ? "?" + queryString : ""}`;
      console.log("Fetching URL:", url);

      const response = await fetch(url);
      const text = await response.text();
      console.log("Raw response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (parseErr) {
        console.error("JSON parse error:", parseErr);
        return res.status(502).send("Invalid JSON from backend");
      }

      res.json(data);
    } catch (err) {
      console.error("ERROR in apiProxy:", err);
      res.status(500).send(err.toString());
    }
  });
});
