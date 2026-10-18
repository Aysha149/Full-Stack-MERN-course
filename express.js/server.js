const express = require("express")
const mongoose = require("mongoose")

const app = express();
app.use(express.json())

mongoose.connect(
"mongodb+srv://ayshaifra149_db_user:aysha09@cluster0.vditcxk.mongodb.net/",
)

.then(()=> console.log("Express app connected to MongoDB"))
.catch((err) => console.error(err))

app.listen(3000, ()=> {
    console.log("Express App running on port 3000");
})