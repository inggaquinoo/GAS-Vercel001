require('dotenv').config();
const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("GAS + VERCEL")
    //console.log("Express here!!!! Here I'am 2 :)")
})



app.use("/users/", require("./routes/usersRoute"));


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

/*
app.listen(3001, function(){
    console.log("express server is running on port 3001")
})
*/