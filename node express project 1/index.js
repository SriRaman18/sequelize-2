import  express  from "express";
import bodyParser from "body-parser";

import users from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", users);

app.get ("/",(req,res)=>{
    console.log("[Test]");
    res.send("hello from home page.. how are you");
})
app.listen(PORT,()=> console.log(`serVer runing on port : http://localhost:${PORT}`))