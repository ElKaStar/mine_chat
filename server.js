const express = require("express");
const app = express();
const path = require('path')




console.log(__dirname)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/public/pages/index.html");
});
app.get("/registration", (request, response) => {
    response.sendFile(__dirname + "/public/pages/registrationPage.html");
});
app.get("/messages", (request, response) => {
    response.sendFile(__dirname + "/public/pages/message.html");
});
app.get("/users", (request, response) => {
    response.sendFile(__dirname + "/public/pages/listOfChats.html");
});
app.get("/profile", (request, response) => {
    response.sendFile(__dirname + "/public/pages/profilePage.html");
});
app.get("/500", (request, response) => {
    response.sendFile(__dirname + "/public/pages/500ServerError.html");
});
app.get("/404", (request, response) => {
    response.sendFile(__dirname + "/public/pages/404notFound.html");
});

// listen for requests
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
