const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();

router.get("/stream/search/:query", async (req, res, next) => {
    const { query } = req.params;
    axios
        .get(
            `https://api.twitch.tv/helix/search/channels?first=3&query=${encodeURI(
                query
            )}`,
            {
                headers: {
                    "Client-ID": process.env.TWITCH_CLIENT_ID,
                    Authorization: "Bearer " + process.env.TWITCH_TOKEN_AUTH0,
                },
            }
        )
        .then((data) => {
            return res.send(data.data);
        })
        .catch((err) => {
            next(err);
        });
});

module.exports = router;
