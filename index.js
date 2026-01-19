const express = require("express");
const puter = require("@heyputer/puter.js");

const app = express();
app.use(express.json());

app.post("/ai/chat", async (req, res) => {
    const input = req.body.input;
    if (!input) {
        return res.status(400).send("400: Bad Request");
    }

    try {
        const output = await puter.ai.chat(input, {
            model: "openai:openai/gpt-4o",
            testMode: true,
        });

        res.status(200).json(output);
    } catch (err) {
        console.error(err);
        res.status(500).send("500: Server Error");
    }
});

app.listen(3000, () => {
    console.log("server started");
});
