const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Testing if the CI/CD automate");
    res.send("CI/CD is automatic");
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});