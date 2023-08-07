const express = require("express");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { id, password } = req.body;

    if (!id || !password) {
      return res.status(400).send({
        error: true,
        message: "아이디 혹은 비밀번호를 입력해주세요",
      });
    }

    if (id !== process.env.USER_ID || password !== process.env.USER_PASSWORD) {
      return res.status(400).send({
        error: true,
        message: "아이디 혹은 비밀번호가 일치하지 않습니다.",
      });
    }

    const token = jwt.sign({ user: id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    if (!req.query.cookie) {
      return res.status(200).send({ user: id, token });
    }

    res.cookie("token", token, {
      maxAge: 1000 * 3600,
      sameSite: "strict",
      secure: false,
      httpOnly: false,
    });

    return res.status(200).send({ user: id, token });
  } catch (e) {
    return res.status(400).send({ error: true, message: e.message });
  }
});

module.exports = router;
