const express = require("express");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const router = express.Router();

router.use(function (req, res, next) {
  if (req.query.cookie) {
    try {
      if (req.cookies) {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded)
          return res
            .send(400)
            .json({ authenticated: false, message: "jwt verify 에러" });

        return next();
      }
    } catch (e) {
      return res.status(400).json({ authenticated: false, message: e.message });
    }
  }

  try {
    const token = String(req?.headers?.authorization?.replace("Bearer ", ""));

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (!decoded)
        return res
          .send(400)
          .json({ authenticated: false, message: "jwt verify 에러" });

      return next();
    }

    return res
      .status(400)
      .json({ authenticated: false, message: "토큰 undefined" });
  } catch (e) {
    return res.status(400).json({ authenticated: false, message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    return res
      .status(200)
      .json({ authenticated: true, message: "토큰 검증 완료" });
  } catch (e) {
    return res.status(400).json({ authenticated: false, message: e.message });
  }
});

module.exports = router;
