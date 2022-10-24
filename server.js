const express = require("express");
const app = express();

/*
app.get("/", function(req, res){
    console.log("Express here!!!! Here I'am :)")
})
*/

app.use("/users/", require("./routes/usersRoute"));



app.listen(3001, function(){
    console.log("express server is running on port 3001")
})