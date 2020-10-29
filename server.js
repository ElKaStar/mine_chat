const express = require("express");
const app = express();
const path = require('path')




console.log(__dirname)
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/public/index.html");
});
app.get("/registration", (request, response) => {
    response.sendFile(__dirname + "/public/pages/RegistrationPage/registrationPage.html");
});
app.get("/messages", (request, response) => {
    response.sendFile(__dirname + "/public/pages/MessagesPage/message.html");
});
app.get("/users", (request, response) => {
    response.sendFile(__dirname + "/public/pages/ListOfChatsPage/listOfChats.html");
});
app.get("/profile", (request, response) => {
    response.sendFile(__dirname + "/public/pages/ProfilePage/profilePage.html");
});
app.get("/500", (request, response) => {
    response.sendFile(__dirname + "/public/pages/500Page/500ServerError.html");
});
app.get("/404", (request, response) => {
    response.sendFile(__dirname + "/public/pages/404Page/404notFound.html");
});

// listen for requests
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
