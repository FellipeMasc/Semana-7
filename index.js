const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const res = require("express/lib/response");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let DB = {
    user: [
        {
            id: 1,
            username: "membro-1",
            senha: "senha-1",
            email: "email-1",
        },
        {
            id: 2,
            username: "membro-2",
            senha: "senha-2",
            email: "email-2",
        },
        {
            id: 3,
            username: "membro-3",
            senha: "senha-3",
            email: "email-3",
        }
    ]
}

app.get("/user", (req, res) => {
    res.statusCode = 200;
    res.json(DB.user);
});








app.listen(3030, () => {
    console.log("API RODANDO!");
});
