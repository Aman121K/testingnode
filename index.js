const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 6000

app.use(cors({
    origin: "*",
}))

app.use("/login", (req,res)=>{
    res.send("Yeh this is vikas")
    
});
app.use(express.json());


app.listen(PORT, () => {
    console.log(`connected to server on PORT ${PORT}`)
})