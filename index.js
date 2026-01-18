const express = require("express");
const puter = require("@heyputer/puter.js");

const app = express();
app.use(express.json());

app.post("/ai/chat", async (req, res) => {
    const input = req.body.input || "";
    if (!input) {
        return res.status(400).send("400: Bad Request");
    }
    const prompt = decodeURIComponent(input);
    const output = await puter.ai.chat(prompt, { model:"openai:openai/gpt-4o",  })
    res.status(200).send(output);
});

app.listen(3000, () => {
    console.log('server started');
});
