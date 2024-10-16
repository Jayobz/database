const express =require("express")
const router = require("./routes/post.route.js")


const app = express()
app.use(router)





app.listen(4000, () => {
    console.log("server started")
})


