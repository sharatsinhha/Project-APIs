import express from "express";
import axios from "axios";
import bodyparser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.set("view engien", "ejs");
app.use(bodyparser.urlencoded({extended: true}));

const API_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


app.get("/", async (req,res)=>{
    try{
        const result = await axios.get(API_URL)
        res.render("index.ejs", {joke: result.data.joke});
    }catch(error){
        res.statusMessage(404).send(error.message);
    }
});

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
}) 
