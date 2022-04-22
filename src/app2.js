// src/app2.js
const express = require("express");
const cors = require("cors");
const app = express();


const corsOptions = {
    origin:"http://localhost:8000",
    credentials:true
}
app.use(cors(corsOptions));
// 定义一个接口，index.html页面请求这个接口就是跨域（因为端口不同）
app.get("/anotherService",(req, res) => {
    // res.header("Access-Control-Allow-Credentials", "true");
    // res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.json({ code: 0, msg: "这是8003端口返回的" });

});

app.listen("8003", () => {
    console.log("app2 running at port 8003");
});
